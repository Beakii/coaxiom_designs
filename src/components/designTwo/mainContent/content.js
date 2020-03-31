import React from 'react';
import './content.css';

const MainContent = () => {
    return(
        <div className="content-wrapper">
            <div className="landing-title-container">
                <h2>CoAxiom</h2>
                <h1>Consulting</h1>
                
                <div className="sub-wrapper">
                    <div></div>
                </div>
            </div>
            
            <div className="container-top-right"></div>
            <div className="container-bottom-right"></div>

            <img src={require('../assets/splash-img.svg')} alt="image"/>
        </div>
    );
}

export default MainContent;