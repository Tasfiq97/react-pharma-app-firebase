import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

import Course from '../CourseCreate/Course';

import Products from '../Products/Products';


const Home = () => {
    return (
        <div id="home" style={{overflowX:"hidden"}}>
          
          <Banner></Banner>
          <About></About>
         <Products></Products>
         <Course></Course>
         
        
        </div>
    );
};

export default Home;