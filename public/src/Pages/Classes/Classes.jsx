import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../CustomHook/useClasses';
import DisplayClassesData from './DisplayClassesData';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Classes = () => {

  const [classes, , refetch] = useClasses();
  const {user}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const filterClasses=classes.filter(data=>data.status==='approved');


//  console.log(filterClasses);



  const handleAddToClass = classData => {
    // console.log(classData);

    if (user) {
      const { className,image,instructorName,price,_id}=classData;
      
      const cartItem={courseName:className,studentEmail:user.email,classImage:image,instructorName,  price,  classId:_id,studentName:user.displayName};
      // console.log(cartItem);

      fetch(' https://summer-camp-school-server-seven.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)

      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);

          if (data.insertedId) {
            // refetch();//refetch cart to update the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: ' Select this class successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }

          else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title:  `Selected ${className} class already exists!! `,
              showConfirmButton: false,
              timer: 1500
            })
          }

        })
    }
    else {
      Swal.fire({
        title: 'Please login to select the class  ',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }


  }




  return (
    <div>

      <Helmet>
        <title>All Classes | CosmetiCraft</title>
      </Helmet>

      <SectionTitle heading={'ALl Classes'}></SectionTitle>


      <div className="grid   grid-cols-2 justify-items-center gap-8  mt-16">
        {filterClasses.map((singleClass) => (
          <DisplayClassesData
            key={singleClass._id}
            singleClass={singleClass}
            handleAddToClass={handleAddToClass}
          ></DisplayClassesData>
        ))}
      </div>




    </div>
  );
};

export default Classes;