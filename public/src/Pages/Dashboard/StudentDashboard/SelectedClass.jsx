import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import DisplaySelectedClass from './DisplaySelectedClass';
import useSelectClass from '../../../CustomHook/useSelectClass';
import { Link } from 'react-router-dom';



const SelectedClass = () => {


    const [selectClasses, refetch] = useSelectClass();
    // console.log(selectClasses);

    const total = selectClasses.reduce((sum, item) => item.price + sum, 0);
    //  console.log(total);

 


    return (
        <div>

            <Helmet>
                <title>Selected Class | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={'My Selected class'}></SectionTitle>

            {
                selectClasses.length !== 0 ?
                  
                  
                  <div className="overflow-x-auto">
                        <div className='  text-right mb-4'>
                        
                        <Link to={`/dashboard/paymentPage/${total}`}>    <button  className="btn btn-secondary w-36 text-xl">Pay</button></Link>
                        </div>
                        <table className="table border border-sky-100">
                            {/* head */}
                            <thead className='text-black text-lg'>
                                <tr>
                                    <th># </th>
                                    <th>Image</th>
                                    <th>Course Name</th>
                                    <th>Ins. Name</th>
                                    <td>Price</td>
                                    <th >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectClasses.map((selectedClass, index, refetch) => <DisplaySelectedClass
                                        key={selectedClass._id}
                                        selectedClass={selectedClass}
                                        index={index}
                                        refetch={refetch}
                                    ></DisplaySelectedClass>)
                                }
                                <tr className='bg-sky-600'>
                                    <td></td><td></td><td></td>
                                    <td className='text-xl  text-white'>Total</td>
                                    <td className='text-xl text-white' >{total}/=</td>
                                    <td></td>
                                </tr>



                            </tbody>


                        </table>
                    </div>


                    :
                    <>
                        <div className="card-body">
                            <div className=''>
                                <div className="card w-full h-36 shadow-2xl">
                                    <div className="card-body ">
                                        <h1 className='text-center text-2xl'>No selected classes is exists</h1>
                                        <p className='text-center text-red-600'>Please Select any class</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>


            }












        </div>
    );
};

export default SelectedClass;