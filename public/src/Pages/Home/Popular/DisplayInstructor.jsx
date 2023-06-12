import React from 'react';
// import image1 from '../../../assets/slider/slider-5.jpg'


const DisplayInstructor = ({ singlePopularInstructor }) => {
    
    // console.log('Ins ', singlePopularInstructor);

    const { email,photo,name,_id}=singlePopularInstructor;





    return (
        <div>
             <div className="card w-96  shadow-xl">
                <figure><img className='rounded-xl w-[385px] h-[250px]' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <p>Email : {email}</p>
                     
 
                    </div>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DisplayInstructor;