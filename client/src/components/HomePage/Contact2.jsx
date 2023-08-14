import React from 'react';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')
const profile1 = require('../../images/team-member-1.png');
const profile2 = require('../../images/team-member-2.png');
const profile3 = require('../../images/team-member-3.png');
const profile4 = require('../../images/team-member-4.png');
const profile5 = require('../../images/team-member-5.png');
// const profile4 = require('../../images/team-member-14.png');
// const image5 = require('../../images/team-member-1.png');
const Contact2 = () => {
    return (
        <section class="team" id="team">
          <div class="container">
            <h2 class="h2 section-title">Student E-board Members</h2>
            <ul class="team-list">
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile1} alt="profile-img" class="team-crop"/>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile2} alt="profile-img" class="team-crop"/>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                    <figure>
                        <img src={profile3} alt="profile-img" class="team-crop"/>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                <figure>
                        <img src={profile4} alt="profile-img" class="team-crop"/>
                    </figure>
                </a>
              </li>
              <li>
                <a href="#" class="team-member">
                <figure>
                        <img src={profile5} alt="profile-img" class="team-crop"/>
                    </figure>
                </a>
              </li>
            </ul>
            <button class="btn btn-primary">view all members</button>
          </div>
        </section>
    );
}

export default Contact2;   
