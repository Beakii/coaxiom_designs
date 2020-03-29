import React from 'react';
import './designOne.css';
import './footer/footer';
import './mainContent/homepage';
import Navbar from './navbar/navbar';
import Homepage from './mainContent/homepage';
import Footer from './footer/footer';

const DesignOne = () => {
    return (
        <div>
            <Navbar/>
            <Homepage/>
            <Footer/>
        </div>
    );
}

export default DesignOne;