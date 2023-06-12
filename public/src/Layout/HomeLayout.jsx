import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import LoadingPage from '../components/LoadingPage';

const HomeLayout = () => {
const {user,loading}=useContext(AuthContext);
if(loading){
    return <LoadingPage></LoadingPage>
}

    return (
        <div>


            <Header></Header>
          <div className='pt-20 pb-20'>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;