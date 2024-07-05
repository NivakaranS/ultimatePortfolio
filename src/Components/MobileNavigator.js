import React from "react";
import './MobileNavigator.css';
import Logo from './images/logon.png'
import Close from './images/close-3.png'

import { Link } from "react-scroll";

const MobileNavigator = ({mobileNavigationFalse}) => {
    const handleClick = (section) => {
        console.log(`Navigating to ${section}`);
        mobileNavigationFalse();
    }
    

    return(
        <div className="mainMobileNavigator" style={{position: 'fixed'}}>
            
            <div className="mobileClose">
                <img src={Close} onClick={mobileNavigationFalse}/>
            </div>
            <nav>
                <ul>
                <Link to="home" smooth={true} duration={500} offset={-100} style={{color: 'white'}} onClick={() => handleClick('home')}>
                    <li className="mobileNavList">Home</li>
                </Link>
                <Link to="about" smooth={true} duration={500} offset={-85} style={{color: 'white'}} onClick={() => handleClick('about')}>
                    <li className="mobileNavList">About</li>
                </Link>
                <Link to="services" smooth={true} duration={500} offset={-80} style={{color: 'white'}} onClick={() => handleClick('services')}>
                    <li className="mobileNavList">Services</li>
                </Link>
                <Link to="projects" smooth={true} duration={500} offset={-80} style={{color: 'white'}} onClick={() => handleClick('projects')}>
                    <li className="mobileNavList">Projects</li>
                </Link>
                <Link to="contact" smooth={true} duration={500} offset={-60} style={{color: 'white'}} onClick={() => handleClick('contact')}>
                    <li className="mobileNavList">Contact</li>
                </Link>    
                    
                    
                    
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavigator;
