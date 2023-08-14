import React from 'react';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')

const Hero = () => {
    return (
        <section class="hero" id="hero">
            <div class="container">
            <h1 class="h1 hero-title">Brooklyn College Esports</h1>
            <h2 class="hero-subtitle">PLAY LIKE A CHAMPION</h2>
            <div class="btn-group">
                <button class="btn btn-primary">
                <a href="https://www.twitch.tv/cunybcesports"><span styles="color:rgb(255, 255, 255);text-align:center;"><b>Watch Live</b></span></a>
                {/* <!-- <ion-icon name="play-circle"></ion-icon> --> */}
                </button>
                {/* <button><a href="https://forms.gle/kVmB9CahkDHVXr796" class="btn btn-secondary"><b>Sign Up</b></a></button> */}
            </div>
            </div>
        </section>
    );
}

export default Hero;
