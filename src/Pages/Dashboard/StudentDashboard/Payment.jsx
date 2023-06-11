import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';

const Payment = () => {

    const paymentHistory = false;

    return (
        <>

            <Helmet>
                <title>Enroll Class | SSC</title>
            </Helmet>
            <SectionTitle heading={' Make Payment'}></SectionTitle>


            {
                paymentHistory ?

                    <div className="overflow-x-auto">
                        <table className="table border border-sky-100">
                            {/* head */}
                            <thead className='text-black text-lg'>
                                <tr>
                                    <th># </th>
                                    <th>Image</th>
                                    <th>Course Name</th>
                                    <th>Ins. Name</th>
                                    <td>Price</td>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                            selectClasses.map((selectedClass, index, refetch) => <DisplaySelectedClass
                                key={selectedClass._id}
                                selectedClass={selectedClass}
                                index={index}
                                refetch={refetch}
                            ></DisplaySelectedClass>)
                        } */}

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