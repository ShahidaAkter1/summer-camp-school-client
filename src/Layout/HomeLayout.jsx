import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const HomeLayout = () => {
    return (
        <div>


            <Header></Header>
             <div className='pt-16 pb-20'>
                 <Outlet></Outlet>
             </div>
            <Footer></Footer>

        </div>
    );
};

export default HomeLayout;