import React from 'react';
import './content.css';

const MainContent = () => {
    return(
        <div className="content-wrapper">

            <div className="title-wrapper">
                <div className="title-flex-container">
                    <h1>CoAxiom</h1>
                    <div className="sub-wrapper">
                        <div className="highlight-border"></div>
                        <h2>Consulting</h2>
                    </div>
                </div>
            </div>

            <section className="bottom-image"></section>

            <section className="information">
                <div className="flex-information">

                    <div className="services">
                        <div className="serviceOne"><i class="fas fa-dollar-sign"></i></div>
                        <div className="serviceTwo">2</div>
                        <div className="serviceThree">3</div>
                    </div>

                    <div className="contact">
                        <div className="left">
                            <h1>Need a Consultation?</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="right">
                            <div className="button">Contact Us</div>
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