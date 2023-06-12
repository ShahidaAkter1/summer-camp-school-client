import React from 'react';
import Swal from 'sweetalert2';
import useSelectClass from '../../../CustomHook/useSelectClass';


const DisplaySelectedClass = ({selectedClass,index}) => {

    // console.log(selectedClass);
    const {_id,courseName,studentEmail,classImage,instructorName,price,classId,studentName}=selectedClass;

    const [selectClasses,refetch]=useSelectClass();
    

    const handleDelete=(id,name)=>{
        // console.log('Delete id',id);
        Swal.fire({
          title: `Are you sure? 
          to Delete 
           ${courseName} class`,
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {


            // console.log('confirmed');

            fetch(` https://summer-camp-school-server-seven.vercel.app/carts/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your food has been deleted.',
                        'success'
                      )
                }
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
                                <img src={classImage} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>

                <td> {courseName} </td>
                <td> {instructorName} </td>
                <td>{price}</td>
                <td>
                    <button onClick={()=>handleDelete(_id,name)}   className="btn btn-active btn-primary btn-xs ">Delete</button>
                </td>
                
               
            </tr>

        </>
    );
};

export default DisplaySelectedClass;