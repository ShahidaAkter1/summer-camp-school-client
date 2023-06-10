import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../CustomHook/useClasses';
import DisplayClassesData from './DisplayClassesData';

const Classes = () => {

    const [classes, ,refetch]=useClasses();




    return (
        <div>

            <Helmet>
                <title>All Classes | SSC</title>
            </Helmet>
            
            <SectionTitle heading={'ALl Classes'}></SectionTitle>

          
                        {/* {
                            classes.map((singleClass,index)=><DisplayClassesData
                                key={singleClass._id}
                                singleClass={singleClass}
                                index={index}
                                ></DisplayClassesData>)
                        } */}

             
<div className="grid   grid-cols-2 justify-items-center gap-8  mt-16">
        {classes.map((singleClass) => (
          <DisplayClassesData
            key={singleClass._id}
            singleClass={singleClass}
          ></DisplayClassesData>
        ))}
      </div>




        </div>
    );
};

export default Classes;