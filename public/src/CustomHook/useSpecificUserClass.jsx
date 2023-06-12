import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useSpecificUserClass = () => {

    const {user}=useContext(AuthContext);


    const { data: myClasses = [], isLoading: myClassesLoading ,refetch} = useQuery({
        queryKey: ["classes",user?.email],
        queryFn: async () => {
          const res = await fetch(` https://summer-camp-school-server-seven.vercel.app/classes/email?email=${user.email}`);
          // console.log(res.data);
          return res.json();
          // return res.data;
        }
      });
      return [myClasses,  myClassesLoading ,refetch];




};

export default useSpecificUserClass;