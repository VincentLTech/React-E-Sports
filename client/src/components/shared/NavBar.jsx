import React from 'react';
const main_logo = require('../../images/main_logo.png');
const NavBar = () => {
    return (
        <header class="header">
            <div class="overlay" data-overlay></div>
                <div class="container">
                    <img src={main_logo} alt="profile-img" className='logo-img'/>
                    <nav class="navbar" data-nav>   
                        <ul class="navbar-list">
                            <li>
                                <a href="#hero" class="navbar-link">Home</a>
                            </li>
                            <li>
                                <a href="#about" class="navbar-link">About</a>
                            </li>
                            <li>
                                <a href="#contact" class="navbar-link">Contact</a>
                            </li>

                        </ul>
                    </nav>
                    <div class="header-actions">
                        <button class="btn-sign_in">
                        <span><a href="https://forms.gle/kVmB9CahkDHVXr796">Join Us</a></span>
                        </button>
                    </div>
                </div>
        </header>
    );
}

export default NavBar;