import React from 'react';
import {Link} from 'react-router-dom';
import './showcase.css';

const Showcase = () =>{
    return (
        <div className="showcase">
            <div className="color-bar">
                <h2>Risk Consultation</h2>
                <p>Reach out now to get a quote!</p>
            </div>

            <Link className="btn">
                Contact Us
                <i className="fas fa-chevron-right"></i>
            </Link>
        </div>
    );
}

export default Showcase;