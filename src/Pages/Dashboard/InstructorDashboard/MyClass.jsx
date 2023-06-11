import React from 'react';
import useClasses from '../../../CustomHook/useClasses';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import DisplayMyClass from './DisplayMyClass';
import Swal from 'sweetalert2';
import useSpecificUserClass from '../../../CustomHook/useSpecificUserClass';

const MyClass = () => {


    // const [classes] = useClasses();
    // console.log(classes);

    const [myClasses]=useSpecificUserClass();
    // console.log(myClasses);






    const handleFeedback = (id, feedback='No Feedback') => {

        // console.log(id);

        Swal.fire({
            title:  `
            <h1 className='text-2xl text-red-600 text-center'>Feedback About Your Class</h1>
            <hr>
            ${feedback}
             
            `
            
            ,
           

            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }






    return (
        <div>
            <Helmet>
                <title>Add a Class | CosmetiCraft</title>
            </Helmet>

            <SectionTitle heading={'My Class'}></SectionTitle>

            {/*         
        
            <div className="grid   grid-cols-2 justify-items-center gap-8  mt-16">
            {
                classes.map(myclass=><DisplayMyClass
                    key={myclass._id}
                    myclass={myclass}

                    ></DisplayMyClass>)
            }
            </div> */}



 
<hr />
            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead className='text-black'>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Total seat</th>
                            <th>Total enroll</th>
                            <th>Ava. Seat</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myClasses.map((myclass, index) => <DisplayMyClass
                                key={myclass._id}
                                myclass={myclass}
                                index={index}
                                handleFeedback={handleFeedback}


                            ></DisplayMyClass>)
                        }
                    </tbody>


                </table>
            </div>










        </div>
    );
};

export default MyClass;