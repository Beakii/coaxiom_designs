import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="main-nav">
            <Link>
                <h1 className="logo">
                    CoA
                    <span className="accented-x">x</span>
                    iom
                </h1>
            </Link>
            

            <ul className="main-menu">
                <li className="link-item">
                    <Link>
                        Home
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        About Us
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        Services
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        Resources
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        Contact Us
                    </Link>
                    <span className="underline-slider"></span>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;