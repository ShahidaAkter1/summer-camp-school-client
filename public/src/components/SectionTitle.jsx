import React from 'react';

const SectionTitle = ({ heading }) => {
    return (
        <div className='text-2xl mb-20 uppercase'>

            <div className="divider my-8 text-red-500">꧁𓊈𒆜 <span className='text-blue-600'>{heading}</span>
                𒆜𓊉꧂
            </div>

        </div>

        //   <div className='md:w-4/12  mx-auto text-center '>
        // <h3 className='text-4xl uppercase border-y-4 py-4'>{heading}</h3>

        // </div>

    );
};

export default SectionTitle;