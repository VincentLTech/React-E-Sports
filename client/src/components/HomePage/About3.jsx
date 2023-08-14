import React from 'react';
const Brooklyn = require('../../images/gallery-img-5.jpg');
const Arrow = require('../../images/bluearrow.jpg');
const About3 = () => {
    return (
        <section class="about" id="about">
            <div class="container">
                <div class="about-content">
                    <figure class="about-banner">
                        <img src={Brooklyn} alt="profile-img" class="about-img" />
                    </figure>
                    <h4 class="about-title">Join The <strong>Team</strong> </h4>
                    <p class="about-text">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </p>
                    <p class="about-bottom-text">
                        <img src={Arrow} alt="profile-img" class="arrow" />
                        <span>Click here to join!</span>
                    </p>
                </div>
            
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>
    );
}

export default About3;