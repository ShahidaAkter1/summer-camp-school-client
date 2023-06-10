import React from 'react';
import useClasses from '../../../CustomHook/useClasses';
import SectionTitle from '../../../components/SectionTitle';
import DisplayPopular from './DisplayPopular';

const Popular = () => {


    const [classes] = useClasses();
    // console.log(classes)


    return (
        <div>

            <SectionTitle heading={'Popular class'}></SectionTitle>



            <div className='grid grid-cols-2 gap-8 justify-center justify-items-center'>
                {
                    classes.map(singlePopularClass => <DisplayPopular
                        key={singlePopularClass._id}
                        singlePopularClass={singlePopularClass}
                    ></DisplayPopular>)
                }

            </div>


        </div>
    );
};

export default Popular;