import React from 'react';

const DisplayEnrollClasses = ({ enroll }) => {

    // console.log(enroll);

    const { className, email, image, instructorName, price } = enroll;

    return (
        <div>

        

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

                            <button className="btn btn-primary">See details</button>
                            
                        </div>
                    </div>
                </div>
 
            
        </div>
    );
};

export default DisplayEnrollClasses;