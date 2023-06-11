import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const usePayment = () => {
 
  const {user}=useContext(AuthContext);
    const { data: paymentHistory = [], isLoading: paymentHistoryLoading ,refetch} = useQuery({
        queryKey: ["classes"],
        queryFn: async () => {
         const res = await fetch(`http://localhost:5000/payments/email?email=${user.email}`);
          // console.log(res.data);
          return res.json();
          // return res.data;
        }
      });
      return [paymentHistory,  paymentHistoryLoading ,refetch];


};

export default usePayment;