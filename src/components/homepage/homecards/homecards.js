import React from 'react';
import {Link} from 'react-router-dom';
import './homecards.css';

const Homecards = () =>{
    return(
        <div className="home-cards">
            <div className="consulting">
                <Link>
                    <div className="image consulting-image"></div>
                    <h2>Consulting</h2>
                    <p>We do a lot of consutling working and thats why....</p>
                    <p className="read-more">Read More...<i class="fas fa-chevron-right"></i></p>
                    
                </Link>
            </div>

            <div className="risk">
                <Link>
                    <div className="image risk-image"></div>
                    <h2>Risk</h2>
                    <p>We do a lot of consutling working and thats why....</p>
                    <p className="read-more">Read More...<i class="fas fa-chevron-right"></i></p>
                </Link>
            </div>

            <div className="compliance">
                <Link>
                    <div className="image consulting-image"></div>
                    <h2>Compliance</h2>
                    <p>We do a lot of consutling working and thats why....</p>
                    <p className="read-more">Read More...<i class="fas fa-chevron-right"></i></p>
                </Link>
            </div>

        </div>
    );
}

export default Homecards;