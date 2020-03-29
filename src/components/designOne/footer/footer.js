import './footer.css';
import React from 'react';

const Footer = () => {
    return(
        <div className="footer">
            <ul className="social-list">
                <li>Social 1</li>
                <li>Social 2</li>
                <li>Social 3</li>
                <li>Social 4</li>
            </ul>

            <ul className="site-map">
                <li>Sitemap 1</li>
                <li>Sitemap 2</li>
                <li>Sitemap 3</li>
                <li>Sitemap 4</li>
                <li>Sitemap 5</li>
            </ul>

            <ul className="additional-content">
                <li>Content 1</li>
                <li>Content 2</li>
                <li>Content 3</li>
                <li>Content 4</li>
                <li>Content 5</li>
            </ul>
        </div>
    );
}

export default Footer;