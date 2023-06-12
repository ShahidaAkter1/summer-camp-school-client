import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/SectionTitle';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
//  console.log(img_hosting_token);



const AddClass = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    // console.log(img_hosting_url);

    const { user } = useContext(AuthContext);


    const onSubmit = data => {
        console.log(data);

        //TODO: backend code

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;

                    // console.log(imgURL);

                    const { className, email, instructorName, price, totalSeat } = data;
                    const newClass = { className, email, instructorName, price: parseFloat(price), totalSeat:parseInt(totalSeat),available_seat:parseInt(totalSeat), image: imgURL,status:'pending',feedback:'none' };
                    // console.log(newClass);


        
                    fetch(' https://summer-camp-school-server-seven.vercel.app/classes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'Class added successfully',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                            }

                        })
                }
            })


    }




    return (
        <div >
            <Helmet>
                <title>Add a Class | CosmetiCraft</title>
            </Helmet>

            <SectionTitle heading={'Add A Class'}></SectionTitle>

            <form className='-mt-12' onSubmit={handleSubmit(onSubmit)} >

                <div className="hero-content w-full   ">



                    <div className="   w-full   shadow-2xl bg-base-800 border  ">
                        <div className="card-body">


                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Instructor Name</span> </label>
                                <input type="text" readOnly defaultValue={user.displayName}
                                    {...register("instructorName")}
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                            </div>

                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Instructor Email</span> </label>
                                <input type="text" readOnly defaultValue={user.email}
                                    {...register("email")}
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                            </div>




                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Class Name</span> </label>
                                <input type="text"
                                    {...register("className", { required: true, maxLength: 100 })} placeholder="Enter your class name"
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.className && <span className='text-red-600 mt-2'>Class name field is required</span>}
                            </div>

                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Price</span> </label>
                                <input type="number"
                                    {...register("price", { required: true, maxLength: 100 })} placeholder="Enter your price"
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.price && <span className='text-red-600 mt-2'>Price field is required</span>}
                            </div>


                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Total Seat</span> </label>
                                <input type="number"
                                    {...register("totalSeat", { required: true, maxLength: 100 })} placeholder="Enter your classes seat limit"
                                    className="input input-bordered bg-white border border-sky-300 text-black" />
                                {errors.seat && <span className='text-red-600 mt-2'>This field is required</span>}
                            </div>




                            <div class="form-control w-full my-4 ">
                                <label class="label">
                                    <span class="label-text text-black">Class Image*</span>
                                </label>
                                <input type="file"
                                    {...register("image", { required: true })}
                                    class="file-input file-input-bordered w-full bg-white  " />
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><input type="submit" value='Register' /></button>

                            </div>


                        </div>
                    </div>
                </div>

            </form>


            <ToastContainer />

        </div>
    );
};

export default AddClass;