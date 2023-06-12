import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import LoadingPage from '../components/LoadingPage';

const PrivateRoute = ({children}) => {
 
       
    const location=useLocation();
    const {user,loading}=useContext(AuthContext);

    if(user){
        return children;
    }

    if(loading){
      return <LoadingPage></LoadingPage>
    }



    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;