import React from "react";
import image1 from "../../assets/proxyInstructorPhoto/images.jpg";
import useSpecificUserClass from "../../CustomHook/useSpecificUserClass";

const singleInstructor = ({ singleInstructorDetails }) => {
  // console.log(singleInstructorDetails);

  const {
    _id,
    photo,
    email,
    name,
    number_of_classes_taken,
  } = singleInstructorDetails;

  const [myClasses]=useSpecificUserClass();


  return (
    <div>
      <div className="card w-96  shadow-xl">
        <figure>
{/* 
          <img className='w-[450px] h-[200px]'   src={photo} alt="instructor" /> */}


          {
            photo ? 
            <img className='w-[450px] h-[200px]'   src={photo} alt="instructor" />
            :
            
          <img className='w-[450px] h-[200px]'   src={image1} alt="instructor" />
          }



        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> Email : {email}</p>
          <p> Number of classes taken : {myClasses.length}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">See Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleInstructor;
