import React from 'react';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';
// import {Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';
// const profile = require('../images/profile.jpg')
const profile1 = require('../images/team-member-13.png');

const Xander = () => {
    return (
      <div style={{backgroundColor:'black'}}>
          <NavBar/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <section class="team contact" id="contact">
          <div className='flex-fod'>
              <h2 class="h2 section-title">President</h2>
              <a href="#" class="team-member">
                  <figure>
                    <img src={profile1} alt="profile-img" class="team-crop"/>
                    <center><b>Xander</b></center>
                  </figure>
                </a>
              <h4>To my amazing Eboard team, I appreciate your hard work, completing 
                and organizing all of our most fruitful and lifechanging projects and 
                events. When I came to the club, I was alone. I had no one to share 
                my hobbies or my goals with. But you guys accepted me and together we 
                built something that will be remembered in Brooklyn College forever 
                for generations to come.
                This club will have future successors and leaders to build this 
                community we made. But the memories of the original founders of 
                this club will always be remembered.</h4>
              <h4>I am forever thankful.</h4>
              <h4><i>-From, Vincent</i></h4>
          </div>
          
        </section>
        <Footer/>
      </div>
    );
}

export default Xander;