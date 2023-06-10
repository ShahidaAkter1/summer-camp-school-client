import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import useInstructor from '../../../CustomHook/useInstructor';
 import DisplayInstructor from './DisplayInstructor';

const PopularInstructor = () => {

    const [instructor] = useInstructor();

    return (
        <div className='mt-20'>
            <SectionTitle heading={'popular instructor'}></SectionTitle>

            <div className='grid grid-cols-2 gap-8 justify-center justify-items-center'>
            {
                instructor.slice(0,6).map(singlePopularInstructor => <DisplayInstructor
                    key={singlePopularInstructor._id}
                    singlePopularInstructor={singlePopularInstructor}
                ></DisplayInstructor>)
            }
            </div>




        </div>
    );
};

export default PopularInstructor;