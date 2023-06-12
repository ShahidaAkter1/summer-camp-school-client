import React, { useState } from 'react';
import image1 from '../../../assets/slider/slider-8.jpg'
import Swal from 'sweetalert2';

const DisplayManageUser = ({ singleUser, index,refetch }) => {

    const { _id, name, email,role,photo } = singleUser;
    const [notDisable,setNotDisable]=useState(true);
    
    const [disable,setDisable]=useState(false);
    const [disableInstructor,setDisableInstructor]=useState(false);



    const handleMakeAdmin = (user) => {
        // console.log(user);
        fetch(` https://summer-camp-school-server-seven.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {                   
                    refetch();

                    setDisable(true);
                    setDisableInstructor(false);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    
    const handleMakeInstructor = (user) => {
        console.log(user);
        fetch(` https://summer-camp-school-server-seven.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    setDisable(false);
                    setDisableInstructor(true);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDelete=(id,name)=>{
        // console.log('Delete id',id);
        Swal.fire({
          title: `Are you sure? 
          to Delete ${name}`,
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(` https://summer-camp-school-server-seven.vercel.app/users/admin/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted successfully.',
                        'success'
                      )
                }
            })
    
          }
        })
    }

    
// if(role!=='instructor'){
//     setDisable
// }


    return (

        <>
            <tr>
                <th> {index + 1}</th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>

                <td> {name} </td>
                <td>{email}</td>
                <td>{role}</td>
                <td className=''> 
                
        

                <button 
                disabled={role !== 'admin'  ?  disable : notDisable} onClick={() => handleMakeAdmin(singleUser)} className="btn text-white btn-active btn-accent btn-xs">Make Admin</button>
                
                
                </td>

                <td>
    
                    <button 
                      disabled={role !== 'instructor'  ?  disable : notDisable}
                    
                    onClick={() => handleMakeInstructor(singleUser)} className="btn btn-active btn-primary btn-xs ">Make Instructor</button>



                </td>
                <td>
                    <button onClick={()=>handleDelete(_id,name)} className="btn btn-active btn-secondary btn-xs ">Delete</button>
                </td>


            </tr>








        </>
    );
};

export default DisplayManageUser;