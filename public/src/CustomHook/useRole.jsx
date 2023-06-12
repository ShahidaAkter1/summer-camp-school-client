import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAllUser from './UseAllUser';
import { useState } from 'react';

const useRole = () => {
 

    const { user } = useContext(AuthContext);
    const [allUsers, allUsersLoading, refetch] = UseAllUser();

    let findUserRole='';
    if (!allUsersLoading) {
        const loggedUserEmail = user.email;
        const findUser = allUsers.filter(data => data.email === loggedUserEmail);
          findUserRole = findUser[0].role;
    }

 
 
    return [findUserRole];


};

export default useRole;