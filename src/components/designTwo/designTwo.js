import React from 'react';
import './designTwo.css';
import NavbarTwo from './navbarTwo/navbarTwo';
import MainContent from './mainContent/content';

const DesignTwo = () => {
    return(
        <div className="design-two">
            <NavbarTwo/>
            <MainContent/>
        </div>
    );
}

export default DesignTwo;