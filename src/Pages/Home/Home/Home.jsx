import React from 'react';
import { Helmet } from 'react-helmet-async';
 
import Banner from './Banner';
import SectionTitle from '../../../components/SectionTitle';
import StudentsLove from './StudentsLove';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | SSC</title>
            </Helmet>

        
            <Banner></Banner>
            <SectionTitle heading={'Popular'}></SectionTitle>

            <StudentsLove></StudentsLove>
            <Category></Category>
           
        </div>
    );
};

export default Home;