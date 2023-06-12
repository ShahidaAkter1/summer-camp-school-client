import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Footer from '../Shared/Footer';

const DashboardLayout = () => {
    return (
        <div>

            <Dashboard></Dashboard>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default DashboardLayout;