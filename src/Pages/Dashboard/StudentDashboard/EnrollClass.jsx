import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';

const EnrollClass = () => {
    return (
        <>

            <Helmet>
                <title>Enroll Class | SSC</title>
            </Helmet>
            <SectionTitle heading={'Enroll classes'}></SectionTitle>




            <div className="card-body">
                <div className=''>
                    <div className="card w-full h-36 shadow-2xl">
                        <div className="card-body ">
                            <h1 className='text-center text-2xl'>No Enroll classes is exists</h1>
                            <p className='text-center text-red-600'>Please make payment and enroll the class successfully!!</p>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
};

export default EnrollClass;