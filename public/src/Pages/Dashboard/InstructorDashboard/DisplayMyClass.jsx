import React from 'react';
import image1 from '../../../assets/slider/slider-6.jpg'

const DisplayMyClass = ({ myclass, index,handleFeedback }) => {


    const { className, email, instructorName, price, totalSeat, image, status,_id,feedback } = myclass;

    
    // console.log(feedback);

    // console.log(myclass);
    // console.log(status=='denied');
    // console.log(status!=='pending');
    // console.log(typeof status);




    return (

        <>
            <tr>
                <th> {index + 1}</th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>

                <td> {className} </td>
         
                 

                <td>{totalSeat}</td>
                <td>00</td>
                <td>00</td>
                <td>{price}</td>

                <td className='text-red-600'>{status}</td>
                <td>
                    {
                        status!=='pending' && status!=='approved' ? 
                        <button onClick={()=>handleFeedback(_id,feedback)}  className="btn btn-active btn-primary btn-xs ">Show</button>
                        :
                        'None'
                    }
                </td>
   

                {/* <td>
                    <button className="btn btn-active btn-primary btn-xs ">Select</button>
                </td> */}
            </tr>


        </>






    );
};

export default DisplayMyClass;