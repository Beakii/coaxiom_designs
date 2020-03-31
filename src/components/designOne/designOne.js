import React from 'react';
import NavbarOne from './navbarOne/navbarOne';
import Homepage from './mainContent/homepage';
import Footer from './footer/footer';
import './designOne.css';

const DesignOne = () => {
    return (
        <div className="design-one">
            <NavbarOne/>
            <Homepage/>
            <Footer/>
        </div>
    );
}

export default DesignOne;