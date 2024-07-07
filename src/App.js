import React, { useRef, useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import BasicContainer from './Components/BasicContainer';
import About from './Components/About';
import WhatIDo from './Components/WhatIDo';
import Projects from './Components/Projects';
import HireContainer from './Components/HireContainer';
import Footer from './Components/Footer';
import MobileNavigator from './Components/MobileNavigator';
import {ScrollProvider} from './ScrollContext';
import {Element} from 'react-scroll';
import TechStack from './Components/TechStack';

function App() {
  const [mobileNavigationMenuClick, setMobileNavigationMenuClick] = useState(false);




  const mobileNavigationClick = () => {
    setMobileNavigationMenuClick(true);
  }

  const mobileNavigationFalse = () => {
    setMobileNavigationMenuClick(false)
  }

  return (
      <div>
        {mobileNavigationMenuClick && (
        <MobileNavigator mobileNavigationFalse={mobileNavigationFalse} />
      )}
        
        <Navigation navigationClick={mobileNavigationClick} mobileNavigationClick={mobileNavigationClick}/>
        <Element name='home' className='home'>
          <BasicContainer/>
        </Element>
        <Element name='about' className='about'>
          <About />
        </Element>
        <Element name='services' className='services'>
          <WhatIDo/>
          
        </Element>
        <TechStack/>
        <Element name='projects' className='projects'>
          <Projects/>
        </Element>
        <Element name='contact' className='contact'>
          <HireContainer/>
          <Footer/>
        </Element>
      </div>
    
      
    
  );
}

export default App;
