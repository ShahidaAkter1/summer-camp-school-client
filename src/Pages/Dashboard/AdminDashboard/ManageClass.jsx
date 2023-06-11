import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle';
import useClasses from '../../../CustomHook/useClasses';
// import DisplayClassesData from '../../Classes/DisplayClassesData';
// import useClasses from '../../../CustomHook/useClasses';
import DisplayManageClass from './DisplayManageClass';

const ManageClass = () => {

    // const [classes, ,refetch]=useClasses();

    const [classes, ,refetch]=useClasses();
    // console.log(classes);

   



    return (
        <div>

            <Helmet>
                <title>All Classes | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={'ALl Classes'}></SectionTitle>

            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}

                    <thead className='text-black text-center'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Total/Enroll/Ava. Seat</th>
                            <th>Status</th>
                            <th>Status</th>
                            <th>Status</th>
                            <th>Feedback</th>
 
                        </tr>
                    </thead>
                    <tbody>

{
    classes.map((singleClass,index)=><DisplayManageClass
    
        key={singleClass._id}
        singleClass={singleClass}
        index={index}
        refetch={refetch}
     


    ></DisplayManageClass>)
}
        

                    </tbody>


                </table>
            </div>






        </div>
    );
};

export default ManageClass;