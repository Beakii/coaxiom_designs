import React, {useState} from 'react';
import './navbarTwo.css';
import {Link} from 'react-router-dom';


const NavbarTwo = () => {
    const [menuState, setMenuState] = useState(false);

    return (
        <nav className="main-nav">
            <Link>
                <h1 className="logo">
                    CoA
                    <span className="accented-x">x</span>
                    iom
                </h1>
            </Link>          

            <ul className={menuState ? "menu-active" : "main-menu"}>
                <li className="link-item">
                    <Link>
                        about
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        services
                    </Link>
                    <span className="underline-slider"></span>
                </li>

                <li className="link-item">
                    <Link>
                        contact
                    </Link>
                    <span className="underline-slider"></span>
                </li>
            </ul>

            <div className={menuState ? "fixed-burger" : "hamburger-menu"} onClick={()=>setMenuState(!menuState)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
}

export default NavbarTwo;