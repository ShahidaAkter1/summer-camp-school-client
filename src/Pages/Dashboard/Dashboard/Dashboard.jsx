import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useRole from '../../../CustomHook/useRole';
 
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import UseAllUser from '../../../CustomHook/UseAllUser';
 

const Dashboard = () => {

 


    // const [isAdmin,setIsAdmin]=useState(true);
    // const [isInstructor,setInstructor]=useState(false);
    // const [isStudent,setIsStudent]=useState(false);


    const {user}=useContext(AuthContext);
    const [allUsers]=UseAllUser();

    // console.log(user);
    console.log(allUsers);
    const loggedUserEmail=user.email;
    // console.log(loggedUserEmail);
    const findUser=allUsers.filter(data=>data.email===loggedUserEmail);
    console.log(findUser);

    // const findUserRole=findUser[0].role;
    // console.log( findUserRole);
 
    const findUserRole='instructor';
    // const findUserRole='admin';
    // const findUserRole='student';
 
 

 
 
 


    return (
        <div>



            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-black text-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Dashboard</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal ">




                                {
                                    findUserRole==='admin' &&
                                    <>
                                        <Link to='/dashboard/manageClass'>  <li className='ml-4 text-xl'>Manage Class </li> </Link>
                                        <Link to='/dashboard/manageUsers'>  <li className='ml-4 text-xl'>Manage Users </li>  </Link>                                   
                                        <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                                    </>
                                }
                                {
                                      findUserRole==='instructor' &&
                                    <>
                                        <Link to='/dashboard/addClass'>  <li className='ml-4 text-xl'>Add a Class </li> </Link>
                                        <Link to='/dashboard/myClass'>  <li className='ml-4 text-xl'>My Class</li>  </Link>                                   
                                        <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                                    </>
                                }

                                {
                                      findUserRole==='student' &&
                                    <>
                                        <Link to='/dashboard/selectedClass'>  <li className='ml-4 text-xl'>My Selected Class </li> </Link>
                                        <Link to='/dashboard/enrollClass'>  <li className='ml-4 text-xl'>My Enroll Class</li>  </Link>                                   
                                        <Link to='/dashboard/payment'>  <li className='ml-4 text-xl'>Payment</li>  </Link>                                   
                                        <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                                    </>
                                }

                            </ul>

                        </div>
                    </div>




                    {/* Page content here */}
                 
 
            




                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 mt-16 w-80 h-full bg-blue-600">

                    {
                        findUserRole==='admin' &&
                        <>
                            <Link to='/dashboard/manageClass'>  <li className='ml-4 text-xl'>Manage Class </li> </Link>
                            <Link to='/dashboard/manageUsers'>  <li className='ml-4 text-xl'>Manage Users </li>  </Link>                                   
                            <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                        </>
                    }



                    {
                          findUserRole==='instructor' &&
                        <>
                            <Link to='/dashboard/addClass'>  <li className='ml-4 text-xl'>Add a Class </li> </Link>
                            <Link to='/dashboard/myClass'>  <li className='ml-4 text-xl'>My Class</li>  </Link>                                   
                            <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                        </>
                    }

                    {
                         findUserRole==='student' &&
                        <>
                            <Link to='/dashboard/selectedClass'>  <li className='ml-4 text-xl'>My Selected Class </li> </Link>
                            <Link to='/dashboard/enrollClass'>  <li className='ml-4 text-xl'>My Enroll Class</li>  </Link>                                   
                            <Link to='/dashboard/payment'>  <li className='ml-4 text-xl'>Payment</li>  </Link>                                   
                            <Link to='/'>             <li className='ml-4 text-xl mr-12'>Go to Home</li> </Link>
                        </>
                    }


                    </ul>

                </div>
            </div>


        </div>
    );
};

export default Dashboard;