import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import useSelectClass from '../../../CustomHook/useSelectClass';
import Swal from 'sweetalert2';
import useClasses from '../../../CustomHook/useClasses';
 

const CheckoutForm = ({ total }) => {


    // console.log(typeof total ,total);
    // const total = 2500;

    // const price= parseFloat(total.toFixed(2));

    const [selectClasses, refetch] = useSelectClass();
    const [classes] = useClasses();
    const filterClasses=classes.filter(data=>data.status==='approved');

    
    
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);

    const [cardError, setCardError] = useState('');
    const [secret, setSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');








    const grandTotal={total};

      useEffect(() => {
        // Fetch the client secret from your server
       if(total>0){
        fetch(' https://summer-camp-school-server-seven.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(grandTotal),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setSecret(data.clientSecret);
            })
       }
    }, [total]);

    // console.log(secret);

 

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        //get card info
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        // console.log('card', card);



        //check is card is valid or not
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',//types of method
            card //which method pass...look upward
        })


        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }

        else {
            setCardError('');
            // console.log('Payment method', paymentMethod);
        }


        setProcessing(true);

        const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(secret,{
                payment_method:{
                    card:card,
                    billing_details:{
                        email:user?.email || 'anonymous',
                        name:user?.displayName || 'unknown'
                    }
                }
        })



        if(confirmError){
            setCardError(confirmError);
        }
        console.log(paymentIntent);

        setProcessing(false);
        if(paymentIntent.status==='succeeded'){
            setTransactionId(paymentIntent.id);
            const transactionId=paymentIntent.id;





            //save payment information
            const payment={email:user?.email,
                transactionId:paymentIntent.id,
                total,
                date:new Date(),
                quantity:selectClasses.length,
                orderStatus:'service pending',
                className:selectClasses.map(item=>item.courseName),
                cartClasses:selectClasses.map(item=>item._id),
                courseNamesId:selectClasses.map(item=>item.classId),
                allClasses:filterClasses
            
            }

            fetch(' https://summer-camp-school-server-seven.vercel.app/payments',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if (data.insertResult.insertedId) {
                    // reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Payment Complete!!!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })












        }

    }






    return (
        <div>

        
        <div className="card-body -mt-16">
        <div className=''>
            <div className="card w-full h-36 shadow-2xl">
                <div className="card-body ">
                   

                <h1 className='text-4xl text-center'>Total Price : {total}</h1>
                </div>
            </div>
        </div>
    </div>


            <div>

                 

                <form className='w-2/3 m-8' onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '26px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className="btn btn-warning mt-8" type="submit" disabled={!stripe || !secret || processing}>
                        Pay
                    </button>
                </form>


                {
                    cardError &&
                    <p className='text-red-600 ml-8'>{cardError}</p>
                }

                {
                    transactionId && 
                    <p className='text-green-600 ml-8'>Transaction complete with transaction id : {transactionId}</p>
                }


            </div>
        </div>
    );
};

export default CheckoutForm;