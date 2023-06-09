import React from "react";
import image1 from "../../assets/slider/slider-5.jpg";

const singleInstructor = ({ singleInstructorDetails }) => {
  console.log(singleInstructorDetails);

  const {
    _id,
    image,
    email,
    name,
    number_of_classes_taken,
  } = singleInstructorDetails;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image1} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p> Email : {email}</p>
          <p> Number of classes taken : {number_of_classes_taken}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">See Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleInstructor;
