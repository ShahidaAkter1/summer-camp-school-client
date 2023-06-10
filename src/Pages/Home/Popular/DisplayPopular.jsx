import React from 'react';
import image1 from '../../../assets/slider/slider-4.jpg'

const DisplayPopular = ({ singlePopularClass }) => {

    const { _id, name, available_seat, instructor_name, price, image } = singlePopularClass;
   
 

    return (
        <div>

            <div className="card w-96 shadow-xl">
                <figure><img className='rounded-xl w-[385px] h-[250px]' src={image1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                    <p>Instructor : {instructor_name}</p>
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