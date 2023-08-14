import React from 'react';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')

const Footer = () => {
    return (
        <footer>
            <div class="footer-top">
                <div class="container">
                    <div class="footer-brand-wrapper">
                        <div class="footer-menu-wrapper">
                            <ul class="footer-menu-list">
                                <li>
                                    <a href="#hero" class="footer-menu-link">Home</a>
                                </li>
                                <li>
                                    <a href="#about" class="footer-menu-link">About</a>
                                </li>
                                <li>
                                    <a href="#" class="footer-menu-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
