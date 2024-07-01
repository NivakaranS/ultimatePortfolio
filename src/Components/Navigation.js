import React, { useState } from 'react';
import './Navigation.css';
import Logo from './images/logon.png';
import mobileMenu from './images/menu.png';
import MobileNavigator from './MobileNavigator';


const Navigation = () => {
    const [mobileMenuClick, setMobileMenuClick] = useState(false);

    const mobileMenuClickClose = () => {
        setMobileMenuClick(false);
    }

    return(
        <div className='ultraMainNavigationContainer'>
            <nav className='mainNavigationContainer'>
                <div>
                    <img className='mainLogo' src={Logo}/>
                </div>
                <ul className='navigationContainer'>
                    <li className='navList'>Home</li>
                    <li className='navList'>About</li>
                    <li className='navList'>Services</li>
                    <li className='navList'>Projects</li>
                    <li className='navList'>Contact</li>
                </ul>
                <div>
                    <button className='downloadBtn'>Download resume</button>
                </div>
            </nav>
            {     
                mobileMenuClick
                ?<MobileNavigator mobileMenuClickClose={mobileMenuClickClose} />
                :<nav className='mobileNavigationContainer'>
                
                <img onClick={() => setMobileMenuClick(true)} className='mobileLogo' src={mobileMenu} />
                <div>
                    <img className='mobileMainLogo' src={Logo}/>
                </div>
                <div >
                    <button className='mobileDownloadContainer'>Download resume</button>
                </div>
            </nav>
            }
            
            
        </div>
    )
}

export default Navigation;