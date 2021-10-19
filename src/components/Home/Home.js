import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Menubar from '../Menubar/Menubar';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
          <Menubar></Menubar>
          <Banner></Banner>
          <About></About>
         <Products></Products>
         <Doctors></Doctors>
        </div>
    );
};

export default Home;