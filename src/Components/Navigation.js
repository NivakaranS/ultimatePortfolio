import React, { useState } from 'react';
import './Navigation.css';
import Logo from './images/logon.png';
import mobileMenu from './images/menu.png';
import MobileNavigator from './MobileNavigator';


const Navigation = ({mobileNavigationClick}) => {
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
                    <button className='downloadBtn'><a href='https://drive.google.com/file/d/1e8cJMopvJCOQS3-HEzXdJxNbVSXhv5_h/view?usp=sharing'>Download resume</a></button>
                </div>
            </nav>
            {     
                mobileMenuClick
                ?<MobileNavigator mobileMenuClickClose={mobileMenuClickClose} />
                :<nav className='mobileNavigationContainer'>
                
                <img onClick={mobileNavigationClick} className='mobileLogo' src={mobileMenu} />
                <div>
                    <img className='mobileMainLogo' src={Logo}/>
                </div>
                <div >
                    <button className='mobileDownloadContainer'><a href='https://drive.google.com/file/d/1e8cJMopvJCOQS3-HEzXdJxNbVSXhv5_h/view?usp=sharing'>Download resume</a></button>
                </div>
            </nav>
            }
            
            
        </div>
    )
}

export default Navigation;