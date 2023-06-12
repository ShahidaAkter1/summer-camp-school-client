import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import usePayment from '../../../CustomHook/usePayment';
import DisplayPaymentHistory from './DisplayPaymentHistory';

const Payment = () => {

    // const paymentHistory = false;

    const [paymentHistory, paymentHistoryLoading, refetch] = usePayment();

    // console.log(paymentHistory);

    paymentHistory.sort((a,b) => new Date (b.date) -new Date(a.date));


    return (
        <>

            <Helmet>
                <title>Enroll Class | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={' Make Payment'}></SectionTitle>


            {
                paymentHistory ?

                    <div className="overflow-x-auto">
                        <table className="table border border-sky-100">
                            {/* head */}
                            <thead className='text-black text-lg'>
                                <tr className='text-center'>
                                    <th># </th>
                                    <th>Transaction ID</th>
                                    <th>Date </th>
                           
                            
                                 <th>Enroll Class</th>
                                    <th>Amount</th>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    paymentHistory.map((singlePayment, index) => <DisplayPaymentHistory
                                        key={singlePayment._id}
                                        singlePayment={singlePayment}
                                        index={index}
                                    ></DisplayPaymentHistory>)
                                }


                            </tbody>
                        </table>
                    </div>





                    :

                    <div className="card-body">
                        <div className=''>
                            <div className="card w-full h-36 shadow-2xl">
                                <div className="card-body ">
                                    <h1 className='text-center text-2xl'>No    payment history is exists</h1>
                                    <p className='text-center text-red-600'>Please enroll any class with payment to get payment history!!</p>
                                </div>
                            </div>
                        </div>
                    </div>

            }















        </>
    );
};

export default Payment;