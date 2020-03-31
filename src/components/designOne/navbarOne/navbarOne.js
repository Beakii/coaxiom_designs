import React, {useState} from 'react';
import './navbarOne.css';
import {Link} from 'react-router-dom';


const NavbarOne = () => {
    const [menuState, setMenuState] = useState(false);

    return (
        <nav className="d1-main-nav">
            <Link>
                <h1 className="d1-logo">
                    CoA
                    <span className="d1-accented-x">x</span>
                    iom
                </h1>
            </Link>          

            <ul className={menuState ? "d1-menu-active" : "d1-main-menu"}>
                <li className="d1-link-item">
                    <Link>
                        Home
                    </Link>
                    <span className="d1-underline-slider"></span>
                </li>

                <li className="d1-link-item">
                    <Link>
                        About Us
                    </Link>
                    <span className="d1-underline-slider"></span>
                </li>

                <li className="d1-link-item">
                    <Link>
                        Services
                    </Link>
                    <span className="d1-underline-slider"></span>
                </li>

                <li className="d1-link-item">
                    <Link>
                        Resources
                    </Link>
                    <span className="d1-underline-slider"></span>
                </li>

                <li className="d1-link-item">
                    <Link>
                        Contact Us
                    </Link>
                    <span className="d1-underline-slider"></span>
                </li>
            </ul>

            <div className={menuState ? "d1-fixed-burger" : "d1-hamburger-menu"} onClick={()=>setMenuState(!menuState)}>
                <div className="d1-line"></div>
                <div className="d1-line"></div>
                <div className="d1-line"></div>
            </div>  
        </nav>
    );
}

export default NavbarOne;