import React from 'react';
import makeup from '../../../assets/logo/makeup.jpg'
import SectionTitle from '../../../components/SectionTitle';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Category = () => {
    return (
       <div>


<SectionTitle heading={'popular Category'}></SectionTitle>


         <div className="container mx-auto m-6 bg-slate-100 rounded-lg">
        <div className=" p-4 shadow rounded-lg flex">


            {/* PICTURE */}
          <div className="w-1/2 rounded-lg"  data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            
            <img src={makeup} alt="" />
          </div>
            
          {/* Content */}
          <div className="w-1/2 px-6" data-aos="zoom-in-left">
             <h2 className="text-2xl font-bold">Online Makeup Courses At CosmetiCraft Makeup Academy</h2>
             <h2 className="text-lg font-medium mt-4">Become A Certified Professional Makeup Artist.</h2>
             <p className="mt-2">At <strong>CosmetiCraft</strong> MAKEUP ACADEMY, we bring out the best in every student. We are an accredited makeup academy, teaching makeup artistry to people around the world. We are renowned for our excellence in educating professionals who are interested in this exciting career.</p>


             <p className="mt-2"> <strong>Online Makeup Courses</strong> are delivered entirely online using our advanced training platform. Once enrolled, you’ll gain access to all the curriculum chapters, videos, tests, and makeup assignments associated with your course.</p>


             <p className="mt-2">Just as important, you’ll receive extensive feedback from our experienced instructors. They will analyze and critique your makeup assignments and provide you with customized guidance and recommendations.</p>


        
             <button className="btn btn-active btn-primary mt-4">ENROLL NOW</button>


          </div>


          
  
        </div>
      </div>
       </div>
    );
};


export default Category;
