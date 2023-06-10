import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useUser = () => {
 
    const {user}=useContext(AuthContext);
    
    const { data: users = [], isLoading: usersLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/users/${user.email}`);
        //   console.log(res);
          return res.json();
        },
      });
      return [users];



};

export default useUser;