import React from 'react';
import { Helmet } from 'react-helmet-async';
 
import Banner from './Banner';
import Popular from '../Popular/Popular';
import PopularInstructor from '../Popular/PopularInstructor';
import Category from './Category';
import StudentsLove from './StudentsLove';
 

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | CosmetiCraft</title>
            </Helmet>

        
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructor></PopularInstructor>
            <Category></Category>
            <StudentsLove></StudentsLove>
          

            
           
        </div>
    );
};

export default Home;