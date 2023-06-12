import React from 'react';

const DisplayPaymentHistory = ({singlePayment,index}) => {
    const {_id,date,email,quantity,total,transactionId}=singlePayment;



    return (
        <tr className='text-center'>
        <td>{index+1}</td>
        <td>{transactionId}</td>
        <td>{date}</td>
        <td>{quantity}</td>
        <td>{total}</td>
        <td>
        <button className="btn btn-success">Details</button>
        </td>
        
        
        
        </tr>
 
    );
};

export default DisplayPaymentHistory;