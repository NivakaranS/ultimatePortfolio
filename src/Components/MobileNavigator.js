import React from "react";
import './MobileNavigator.css';
import Logo from './images/logon.png'
import Close from './images/close-3.png'
import { useScroll } from "../ScrollContext";

const MobileNavigator = ({mobileNavigationFalse}) => {
    

    return(
        <div className="mainMobileNavigator">
            <div>
                <img className="mobileNavigatorLogo"src={Logo} />
            </div>
            <div className="mobileClose">
                <img src={Close} onClick={mobileNavigationFalse}/>
            </div>
            <nav>
                <ul>
                    <li className="mobileNavList">Home</li>
                    <li className="mobileNavList">About</li>
                    <li className="mobileNavList">Projects</li>
                    <li className="mobileNavList">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default MobileNavigator;
