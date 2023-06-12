import React, { useEffect } from 'react';
import client1 from '../../../assets/logo/client1.jpg'
import client2 from '../../../assets/logo/client2.jpg'
import client3 from '../../../assets/logo/client3.jpg'
import SectionTitle from '../../../components/SectionTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'


const StudentsLove = () => {


    useEffect(() =>{
        Aos.init();
    },[])


    return (
        <div>


<SectionTitle heading={'Students Love'}></SectionTitle>


        <div>
            <h1 className='text-center font-bold text-4xl mt-20'>Why Our Students Love CosmetiCraft Academy</h1>


           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-2 mb-10'>
                <div className="card  w-72 bg-base-100 shadow-xl "  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
                        <div className="card-body">
                            <p>This is by far the best makeup course I have ever taken. I learned so so much during my time taking this course. I highly recommend it.</p>
                            <div className="container mx-auto">
                                <div className="bg-white p-4  flex">
                                    {/* Image */}
                                    <div className="w-1/3">
                                    <img
                                        src={client3}
                                        alt="Card Image"
                                        className="rounded h-20 w-28"
                                    />
                                    </div>


                                    {/* Content */}
                                    <div className="w-2/3 pl-4">
                                    <h2 className="text-sm font-bold">Jewel Rana</h2>
                                    <p className="mt-2 text-sm">Makeup Artist Graduate</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                </div>
               
                <div className="card  w-72 bg-base-100 shadow-xl"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <div className="card-body">
                            <p>I can't express how much this means to me all in one post. To get those dreams! Thank you, VMA @vizioamkeupacademyofficial</p>
                            <div className="container mx-auto">
                                <div className="bg-white p-4  flex">
                                    {/* Image */}
                                    <div className="w-1/3">
                                    <img
                                        src={client1}
                                        alt="Card Image"
                                        className="rounded h-20 w-28"
                                    />
                                    </div>


                                    {/* Content */}
                                    <div className="w-2/3 pl-4">
                                    <h2 className="text-sm font-bold">Shaia Thomas</h2>
                                    <p className="mt-2 text-sm">Makeup Artist Graduate</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                </div>


                <div className="card  w-72 bg-base-100 shadow-xl "  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                        <div className="card-body">
                            <p>Number #1 makeup school in the BD! I already knew makeup artistry, but I just took my skills to a whole new level.</p>
                            <div className="container mx-auto">
                                <div className="bg-white p-4  flex">
                                    {/* Image */}
                                    <div className="w-1/3">
                                    <img
                                        src={client2}
                                        alt="Card Image"
                                        className="rounded h-20 w-28"
                                    />
                                    </div>


                                    {/* Content */}
                                    <div className="w-2/3 pl-4">
                                    <h2 className="text-sm font-bold">Suad Rana</h2>
                                    <p className="mt-2 text-sm">Makeup Artist Graduate</p>
                                    </div>
                                </div>
                                </div>
                        </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default StudentsLove;

