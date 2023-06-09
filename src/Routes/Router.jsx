import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/LoginReg/Login";
import Registration from "../Pages/LoginReg/Registration";
import Instructor from "../Pages/Instructor/Instructor";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
 


const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            } ,
            //login layout
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/instructor',
                element:<Instructor></Instructor>
            },
            {
                path:'/classes',
                element:<Classes></Classes>
            },
            
            {
                path:'/dashboard',
                element: <PrivateRoute><StudentDashboard></StudentDashboard></PrivateRoute>
            }
            
        ]
    },

    

    //dashboard route





]);

export default router;