import React from 'react';
import { Helmet } from 'react-helmet-async';
 
import Banner from './Banner';
import Popular from '../Popular/Popular';
import PopularInstructor from '../Popular/PopularInstructor';
 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | SSC</title>
            </Helmet>

        
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
          

            
           
        </div>
    );
};

export default Home;