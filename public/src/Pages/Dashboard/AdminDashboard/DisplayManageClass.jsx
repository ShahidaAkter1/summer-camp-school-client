import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayManageClass = ({ singleClass, index, refetch }) => {

    const { user } = useContext(AuthContext);
    // console.log(singleClass);
    const [disable, setDisable] = useState(false);
    const [notDisable, setNotDisable] = useState(true);

    const { className, email, instructorName, price, totalSeat, image, status, _id, feedback } = singleClass;



    const handleApproved = (user, status) => {
        // console.log(user);

        // fetch(` https://summer-camp-school-server-seven.vercel.app/classes/${user._id}`, {
        //     method: 'PATCH'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data);
        //         if (data.modifiedCount > 0) {                   
        //             refetch();
        //             Swal.fire({
        //                 position: 'top-end',
        //                 icon: 'success',
        //                 title: `${user.instructorName}'s ${className} class is approved now`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })


        const newStatus = {
            userId: user._id,
            statusNew: status
        };
        // console.log(newStatus);
        fetch(` https://summer-camp-school-server-seven.vercel.app/classes/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newStatus)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    setDisable(true);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.instructorName}'s ${className} class is ${status}  `,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }





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
                <td> {instructorName} </td>

                <td>{email}</td>
                <td className='text-center'>{totalSeat}/0/0</td>


                <td className='uppercase'>  {status}</td>


                <td>

                    <button disabled={status !== 'approved' && status !== 'denied' ?
                        disable : notDisable}
                        onClick={() => handleApproved(singleClass, 'approved')} className="btn btn-active btn-primary btn-xs ">Approved</button>
                </td>
                <td>
                    <button disabled={status !== 'approved' &&  status !== 'denied' ?
                        disable : notDisable}
                        onClick={() => handleApproved(singleClass, 'denied')} className="btn btn-active btn-secondary btn-xs ">Deny</button>
                </td>
                <td>
                  <Link to={`/dashboard/feedback/${_id}`}> <button className="btn btn-active btn-info btn-xs  text-white">Feedback</button></Link>


                </td>


            </tr>





        </>
    );
};

export default DisplayManageClass;