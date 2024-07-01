import React from 'react';
import Navigation from './Components/Navigation';
import BasicContainer from './Components/BasicContainer';
import About from './Components/About';
import WhatIDo from './Components/WhatIDo';
import Projects from './Components/Projects';
import HireContainer from './Components/HireContainer';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
      <Navigation/>
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
