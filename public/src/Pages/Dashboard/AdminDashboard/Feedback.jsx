import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import useClasses from '../../../CustomHook/useClasses';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Feedback = () => {

    const { id } = useParams();
    // console.log(id);

    const navigate = useNavigate();

    const [classes, , refetch] = useClasses();
    const feedbackData = classes.filter(data => data._id === id);
    //  console.log(feedbackData);
    const { className, email, instructorName, price, totalSeat, image, status, _id, feedback } = feedbackData[0];



    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = feedback => {
        console.log(feedback);

        fetch(` https://summer-camp-school-server-seven.vercel.app/classes/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    navigate('/dashboard/manageClass');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Send Feedback Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }



    return (
        <div className='mt-12'>

            <Helmet>
                <title>Feedback | CosmetiCraft</title>
            </Helmet>

            <SectionTitle heading={'GIve Feedback'} ></SectionTitle>


            <div className="hero-content w-full  -mt-8 ">
                <div className="   w-full   shadow-2xl  border  ">
                    <div className="card-body">
                        <h1 className='text-center text-2xl '>Denied User and Classes Information</h1>
                        <hr className='' />
                      
                        <div className='grid grid-cols-2 gap-3  mt-8'>
                            <div className="card w-96 shadow-xl">
                                <figure>
                                    <img className='w-full h-fit' src={image} alt="Shoes" />
                                </figure>
                            </div>
                            <div className="card w-96 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{className}</h2>
                                    <p>Instructor Name : {instructorName}</p>
                                    <p> Email : {email}</p>
                                    <p>Price: {price}</p>
                                    <p> Total seat : {totalSeat}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <form className='' onSubmit={handleSubmit(onSubmit)} >
                <div className="hero-content w-full   ">
                    <div className="   w-full   shadow-2xl bg-base-800 border  ">
                        <div className="card-body">
                            <div className="form-control  ">
                                <label className="label"> <span className="label-text text-black">Give Feedback</span> </label>
                                <textarea className="textarea textarea-secondary bg-white text-xl h-44"
                                    {...register("feedback")} required
                                    placeholder="Enter Your feedback .Why you denied the class."></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary"><input type="submit" value='Send Feedback' /></button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>






        </div>
    );
};

export default Feedback;