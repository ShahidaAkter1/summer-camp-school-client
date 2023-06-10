import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import sliderImage1 from '/src/assets/slider/slider-2.jpg';

import sliderImage3 from '/src/assets/slider/slider-4.jpg';
import sliderImage4 from '/src/assets/slider/slider-5.jpg';
import sliderImage5 from '/src/assets/slider/slider-6.jpg';
import sliderImage6 from '/src/assets/slider/slider-7.jpg';
import sliderImage7 from '/src/assets/slider/slider-8.jpg';


const Banner = () => {
    return (
        <div className='mb-20'>
            <AwesomeSlider>
                <div> <img className='w-full h-full' src={sliderImage1} alt="" /></div>
                <div> <img className='w-[100%] h-full' src={sliderImage6} alt="" /></div>

                <div> <img src={sliderImage3} alt="" /></div>
                <div> <img src={sliderImage4} alt="" /></div>
                <div> <img src={sliderImage5} alt="" /></div>
                <div> <img src={sliderImage7} alt="" /></div>
                <div> <img src={sliderImage5} alt="" /></div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;