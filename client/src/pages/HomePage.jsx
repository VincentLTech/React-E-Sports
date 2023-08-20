import React from 'react';
import NavBar from '../components/shared/NavBar';
import Hero from '../components/HomePage/Hero';
import About from '../components/HomePage/About';
import About2 from '../components/HomePage/About2';
import About3 from '../components/HomePage/About3';
import Gallery from '../components/HomePage/Gallery';
import Contact from '../components/HomePage/Contact';
import Contact2 from '../components/HomePage/Contact2';
import Footer from '../components/HomePage/Footer';
import Mission from '../components/HomePage/Mission';
import '../App.css';

const HomePage = () => {
    return (
        <>
            <div style={{backgroundColor:'black'}}>
                <NavBar/>
                <Hero/>
                <Mission/>
                <div className='flex-fod'>
                        <About/>
                        <About2/>
                        <About3/>
                </div>
                
                <Gallery/>
                <Contact/>
                <Contact2/>
                <Footer/>
            </div>
            {/* <Contact/>
            <Footer/> */}
        </>
    );
}

export default HomePage;