import React from 'react';
import './content.css';
import {Link} from 'react-router-dom';

const MainContent = () => {
    return(
        <div className="content-wrapper">

            <div className="title-wrapper">
                <div className="title-flex-container">
                    <h1>CoAxiom</h1>
                    <div className="sub-wrapper">
                        <div className="highlight-border">
                            <h3>"At your service to manage risk"</h3>
                        </div>
                        <h2>Consulting</h2>
                    </div>
                </div>

                <i class="fas fa-chevron-down"></i>
            </div>

            <section className="bottom-image"></section>

            <section className="information" id="#test">
                <div className="flex-information">

                    <div className="services">
                        <div className="serviceOne">
                            <h1>Service 1</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="service-button">Read More</div>
                        </div>

                        <div className="serviceTwo">
                        <h1>Service 2</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="service-button">Read More</div>
                        </div>
                    
                        <div className="serviceThree">
                            <h1>Service 3</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="service-button">Read More</div>
                        </div>
                        <div className="serviceFour">
                            <h1>Service 4</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="service-button">Read More</div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="flex-list-wrapper">
                    <ul className="sitemap">
                        <div className="list-header">Sitemap</div>
                        <li>Sitemap 1</li>
                        <li>Sitemap 2</li>
                        <li>Sitemap 3</li>
                        <li>Sitemap 4</li>
                    </ul>

                    <ul className="contact-list">
                        <div className="list-header">Contact</div>
                        <li>Contact 1</li>
                        <li>Contact 2</li>
                    </ul>

                    <ul className="content-list">
                        <div className="list-header">Content</div>
                        <li>Content 1</li>
                        <li>Content 2</li>
                        <li>Content 3</li>
                        <li>Content 4</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default MainContent;