import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import usePayment from '../../../CustomHook/usePayment';
import useClasses from '../../../CustomHook/useClasses';
import Enroll from './Enroll';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import LoadingPage from '../../../components/LoadingPage';

const EnrollClass = () => {

 
 
    // const [loading,setLoading]=useState(false);

 

        const [paymentHistory, paymentHistoryLoading] = usePayment();
        // console.log(paymentHistory);
        // const newArray=paymentHistory.map((item)=> item.courseNamesId);
        // console.log(newArray);

        let idArray=[];
    const newArray=paymentHistory.filter((item,index)=> {
        // console.log(item.courseNamesId)
    
        item.courseNamesId.map(data=>{
            // console.log(data);
            idArray.push(data);
        })
     
    });
  


    return (
        <>

            <Helmet>
                <title>Enroll Class | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={'Enroll classes'}></SectionTitle>

        
            <Enroll idArray={idArray}></Enroll>
     

           


        </>
    );
};

export default EnrollClass;



 