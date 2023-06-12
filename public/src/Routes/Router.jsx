import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginReg/Login";
import Registration from "../Pages/LoginReg/Registration";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
 

import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClass";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import WelcomeDashboard from "../Pages/Dashboard/AdminDashboard/WelcomeDashboard";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";
import EnrollClass from "../Pages/Dashboard/StudentDashboard/EnrollClass";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass";
import Feedback from "../Pages/Dashboard/AdminDashboard/Feedback";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";
import PaymentPage from "../Pages/Dashboard/StudentDashboard/PaymentPage";
import ErrorPage from "../Shared/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            //login layout
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/instructor',
                element: <Instructor></Instructor>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }




        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/',
                element: <WelcomeDashboard></WelcomeDashboard>
            },
            {
                path: '/dashboard/manageClass',
                element: <ManageClass></ManageClass>
            },
            {
                path: '/dashboard/feedback/:id',
                element: <Feedback></Feedback>
            },
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/addClass',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/myClass',
                element: <MyClass></MyClass>
            },
            {
                path: '/dashboard/selectedClass',
                element: <SelectedClass></SelectedClass>
            },
            
            {
                path: '/dashboard/enrollClass',
                element: <EnrollClass></EnrollClass>
            },
            {
                path: '/dashboard/payment',
                element:  <Payment></Payment>
            },
            {
                path: '/dashboard/paymentPage/:total',
                element:  <PaymentPage></PaymentPage>
            }
        ]

    }










]);

export default router;