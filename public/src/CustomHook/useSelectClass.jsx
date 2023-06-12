import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSelectClass = () => {
 
    const {user}=useContext(AuthContext);

    const {data:selectClasses=[],refetch, isLoading  } = useQuery({
        queryKey: ['carts', user?.email], //here carts=backend api which search based on email
        // enabled:!loading,
        queryFn: async () => {
            const response = await fetch(` https://summer-camp-school-server-seven.vercel.app/carts?email=${user.email}`) 
            return response.json();
        }   
    })
    return [selectClasses,refetch];
}






export default useSelectClass;

