import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import BasicContainer from './Components/BasicContainer';
import About from './Components/About';
import WhatIDo from './Components/WhatIDo';
import Projects from './Components/Projects';
import HireContainer from './Components/HireContainer';
import Footer from './Components/Footer';
import MobileNavigator from './Components/MobileNavigator';


function App() {
  const [mobileNavigationMenuClick, setMobileNavigationMenuClick] = useState(false);

  const mobileNavigationClick = () => {
    setMobileNavigationMenuClick(true);
  }

  const mobileNavigationFalse = () => {
    setMobileNavigationMenuClick(false)
  }

  return (
    
      mobileNavigationMenuClick
      ?<MobileNavigator mobileNavigationFalse={mobileNavigationFalse}/>
      :
      <div>
        <Navigation mobileNavigationClick={mobileNavigationClick}/>
      <BasicContainer/>
      <About/>
      <WhatIDo/>
      <Projects/>
      <HireContainer/>
      <Footer/>

      </div>
      
    
  );
}

export default App;
