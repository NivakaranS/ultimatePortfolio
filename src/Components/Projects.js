import React from "react";
import './Projects.css'
import Circle from './images/circle.png';
import Card from "./Card";
import Logo from './images/logon.png';

const Projects = () => {
    return(
        <div className="mainProjectsContainer">
            
            <div className="projectsTitle">
                <img src={Circle} style={{height: '90px', position: 'relative', zIndex: 0}}/>
                <div className="whatTitleContainer1" >
                    Projects
                </div>
                
            </div>
            <div className="projectsContentContainer">
                <Card name="My portfolio" projectIcon={Logo}/>
                
            </div>
        </div>
    )
}

export default Projects