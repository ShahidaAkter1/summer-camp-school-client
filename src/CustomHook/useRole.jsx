import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAllUser from './UseAllUser';
import { useState } from 'react';

const useRole = () => {
 

    const {user}=useContext(AuthContext);
    const [allUsers]=UseAllUser();

    const [state,setState]=useState(false);

    // console.log(user);
    // console.log(allUsers);

    const loggedUserEmail=user.email;
    // console.log(loggedUserEmail);
    const findUser=allUsers.filter(data=>data.email===loggedUserEmail);
    console.log(findUser);

    // const findUserRole=findUser[0].role;
    // console.log(typeof findUserRole);

    // if(findUserRole==='admin'){
    //     setState(true);
    // }
    // else if(findUserRole==='instructor'){
    //     setState(true);
    // }
    // else if(findUserRole==='student'){
    //     setState(true);
    // }

 
    // return [state,findUserRole];

 

};

export default useRole;