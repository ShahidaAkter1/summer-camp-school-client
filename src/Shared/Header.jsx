import React, { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../public/logo.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';




import { FaBeer, FaShoppingCart, FaUser, FaUserAlt } from 'react-icons/fa';




const Header = () => {
    const { user, logout } = useContext(AuthContext);

    // console.log(user);
    const userName = user?.displayName;
    const photoUrl = user?.photoURL;
    // console.log(userName, photoUrl);
    // const [cart]=useCart();



    const handleLogout = () => {
        logout()
            .then(() => {
                toast('Successfully logout');
            })
            .catch(error => console.log(error))
    }


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li>
        <li><Link to='/classes'>Classes </Link></li>
        <li><Link to='/dashboard'>Dashboard </Link></li>
        <li><Link to=''>
            <button className=" flex ">
                <FaShoppingCart className='mt-1  text-sm'></FaShoppingCart>
                <sup className='mt-2 ml-1 '>0</sup>
            </button>
        </Link></li>
    </>



    return (
        < >
            <div className="navbar    z-10 bg-opacity-80 bg-black text-white max-w-4xl">
                <div className="navbar-start  ">
                    <div className="dropdown  ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  bg-black">

                            {navOptions}

                        </ul>
                    </div>

                    <img src={logo} className='rounded-full h-8' alt="" />
                    <a className="btn btn-ghost normal-case text-xl -ml-2"> cos <span className='text-red-600 -ml-2'>Make</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

 
            

                    {
                        user &&
                        <>
                            <img className="w-10 rounded-full mr-4" src={photoUrl ? 
                                photoUrl
                                 : 
                                <FaUserAlt className='text-3xl mr-4'></FaUserAlt>} title={userName} alt="" />
                        </>
                    }
                    

                    {
                        user ?
                            <Link to='/login' className='mr-6'><button onClick={handleLogout} className="btn btn-active btn-primary"   >Logout</button></Link> :

                            <Link to='/login' className='mr-6'><button className="btn btn-active btn-warning text-white text-xl">Login</button></Link>
                    }


                </div>
                <ToastContainer />
            </div>
        </>
    );
};

export default Header;