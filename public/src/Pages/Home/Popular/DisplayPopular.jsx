import React from 'react';
import image1 from '../../../assets/slider/slider-4.jpg'

const DisplayPopular = ({ singlePopularClass }) => {

    const { _id, name,className, available_seat, instructorName, price, image } = singlePopularClass;



    // console.log(singlePopularClass);
   
 

    return (
        <div>

            <div className="card w-96 shadow-xl">
                <figure><img className='rounded-xl w-[385px] h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                    <h1 className='text-3xl mb-2'>{className}</h1>
                    <p>Instructor : {instructorName}</p>
                    <p>Price : {price}</p>
                    <p>Available seat : {available_seat}</p>
                    </div>
                   
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DisplayPopular;