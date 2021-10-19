import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';

import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
          
          <Banner></Banner>
          <About></About>
         <Products></Products>
         <Doctors></Doctors>
         
        
        </div>
    );
};

export default Home;