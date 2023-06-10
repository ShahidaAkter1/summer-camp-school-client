import React from 'react';
import image1 from '../../assets/slider/slider-5.jpg'

const DisplayClassesData = ({ singleClass, index }) => {

    // console.log(singleClass,index);
    const {  className, email, instructorName, price, totalSeat, image, status,_id,feedback}=singleClass;

    //TODO: avialble seat===0 hole card red
    //do using dynamic className styling
    //just bg-red-600



    return (

   


<div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img className='w-[450px] h-[200px]'  src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{className}</h2>
          <p>Instructor Name : {instructorName}</p>
          <p> Email : {email}</p>
          <p>Price: {price}</p>
          <p> Total seat : {totalSeat }</p>
          <p>Available seat : </p>


          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">See Class</button>
          </div>
        </div>
      </div>
    </div>


 




     
    );
};

export default DisplayClassesData;