import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import SectionTitle from '../../../components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useSecret from '../../../CustomHook/useSecret';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);


const PaymentPage = () => {

    const { total } = useParams();
    // console.log(typeof total);
    const newTotal=parseFloat(total);
    // console.log('new : ',typeof newTotal);
    const price=parseFloat(newTotal.toFixed(2));
    // console.log(typeof price ,price);

   
    // const price= parseFloat(total.toFixed(2));

    


    




    return (
        <div>
            <Helmet>
                <title>Enroll Class | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={'Payment Page'}></SectionTitle>

 


            <Elements stripe={stripePromise}>
                <CheckoutForm total={price}></CheckoutForm>
            </Elements>


        </div>
    );
};

export default PaymentPage;


   