import React from 'react';
import NavBar from '../components/shared/NavBar';
import Introduction from '../components/History/Introduction';
import Footer from '../components/HomePage/Footer';
import '../static/Navbar.css';
import '../static/About.css';
const History= () => {
    return (
        <>
            <div style={{backgroundColor:'black'}}>
                <NavBar/>
                <Introduction/>
                <Footer/>
            </div>
            {/* <Contact/>
            <Footer/> */}
        </>
    );
}

export default History;