import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
      //password hide and show
      const [show, setShow] =useState(false);
      const handleShow= () =>{
          setShow(!show)
      }
 

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';


    
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    // const [show, setShow] = useState(false);

    const onSubmit = data => {
        // console.log(data);

        login(data.email, data.password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                navigate(from,{replace:true});
                reset();
                toast("Successfully Login!!!");

            })
            .catch((error) => {
                // console.log(error);
                toast("  Login Failed!!!")
            })

    }

    const handleShowPassword = () => {
        if (show === false) {
            setShow('password');
        }
        else {
            setShow('text');
        }
    }



    return (
        <div className=''>
            <Helmet>
                <title>Login | CosmetiCraft</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="hero min-h-screen  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left sm:mt-16">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-800 border">
                            <div className="card-body">


                                <div className="form-control  ">
                                    <label className="label">
                                        <span className="label-text text-black">Email</span>
                                    </label>
                                    <input type="text"
                                        {...register("email", { required: true, maxLength: 100 })}
                                        placeholder="Enter your Email"
                                        className="input input-bordered bg-white border border-sky-300 text-black" />
                                    {errors.email && <span className='text-red-600 mt-2'>Email field is required</span>}
                                </div>


                                <div className="form-control">
                                   

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black">Password</span>
                                        </label>
                                        <div className='w-full rounded-md border-sky-300 flex  justify-between border'>
                                            <input type={show? "text" :"password"} required
                                                {...register("password", {
                                                    required: true,
                                                    maxLength: 20,
                                                    minLength: 6,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/

                                                })}
                                                placeholder="password" className="input    bg-white border  text-black" />
                                            <button  ><FaEye className=' mr-4'onClick={handleShow}>{show? "Hide": "Show"}</FaEye></button>


                                        </div>
                                        <p>
                                            {errors.password?.type === 'required' && <p className='text-red-600 mt-2' > Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className='text-red-600 mt-2' > Password must be 6 character</p>}
                                            {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-2' > Password should not be greater than 20 character   </p>}
                                            {errors.password?.type === 'pattern' && <p className='text-red-600 mt-2' > Password  must have one uppercase one lowercase one number and one special characters  </p>}
                                        </p>

                                    </div>


                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>


                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"><input type="submit" value='Login' /></button>

                                </div>
                                <br />
                                <hr />


                                <SocialLogin></SocialLogin>


                                <div className='mx-auto mt-2'>
                                    <p><small>Don't have an account?</small>
                                        <Link to='/registration' className='text-blue-600 ml-2'>Register Now</Link></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
};

export default Login;