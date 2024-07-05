
import React from "react";
import './WhatIDo.css';
import Circle from './images/circle.png';
import Web from './images/web2.png';
import UI from './images/ui_ux.png'
import Datascience from './images/datascience.png';
import Hacking from './images/hacking.png';
import MobileDevelopment from './images/mobile_development.png'

const WhatIDo = () => {
    return(
        <div className="mainWhatIDoContainer">
            <div className="whatTitle">
                <img src={Circle} style={{height: '90px', position: 'relative', zIndex: 0}}/>
                <div className="whatTitleContainer1" >
                    What I do
                </div>
                
            </div>
            <div className="innerWhatIDoContainerContent">

            
            <div className="whatIDoContainerList">
                <div>
                    <img src={UI} style={{height: '150px'}}/>
                </div>
                <div className="whatIDoContentContainer">
                    <div className="whatIDoHeader">
                        UI/UX Designing
                    </div>
                    <div className="whatIDoContentInformation">
                        I specialize in creating intuitive and visually captivating UI/UX designs. From wireframing and protyping to crafting engaging interactions, I blend creativity with stratergy to deliver seamless digital experiences that resonate with users and achieve business goals.
                    </div>
                    
                </div>
            </div>
            <div className="whatIDoContainerList">
                <div>
                    <img src={Web} style={{height: '200px'}}/>
                </div>
                <div className="whatIDoContentContainer">
                <div className="whatIDoHeader">
                        Full stack web development
                    </div>
                    <div className="whatIDoContentInformation">
                        Full stack web development is my forte, where I thrive in creating dynamic and scalable web applications from concept to deployment. On the front end, I specialize in crafting responsive and intuitive user interfaces using modern frameworks like React, ensuring seamless user experiences across devices. Meanwhile, my back-end skills encompass designing robust APIs and databases, implementing server-side logic with Node.js and Express.js, and optimizing database performace with SQL and NoSQL solutions. 
                    </div>
                    
                </div>
            </div>
            <div className="whatIDoContainerList">
                <div>
                    <img src={MobileDevelopment} style={{height: '150px'}}/>
                </div>
                <div className="whatIDoContentContainer">
                <div className="whatIDoHeader">
                        Mobile app development
                    </div>
                    <div className="whatIDoContentInformation">
                        I am passionate about developing cutting-edge mobile applications that blend creativity with functionality for both iOS and Android platforms. With a solid foundation in React native, I create robust, high-performance apps tailored to meet client objectives. My approach integrates user-centric design principles with agile methodologies, ensuring that each app not only meets technical requirements but also exceeds user expectations for usability and visual appeal. I thrive in collaborative environments, working closely with teams to iterate on designs, integrate backend services securely, and optimize app performance for diverse user bases.

                    </div>

                    
                </div>
            </div>
            <div className="whatIDoContainerList">
                <div>
                    <img src={Datascience} style={{height: '150px'}}/>
                </div>
                <div className="whatIDoContentContainer">
                <div className="whatIDoHeader">
                        Data science
                    </div>
                    <div className="whatIDoContentInformation">
                    As a data scientist, I specialize in extracting actionable insights from complex and large datasets to drive strategic decision-making. Leveraging my expertise in statistical analysis, machine learning, and data visualization, I uncover patterns, trends, and correlations that reveal valuable business insights. I excel in programming languages such as Python, utilizing frameworks like TensorFlow and scikit-learn for machine learning model development and deployment. My proficiency extends to data preprocessing, feature engineering, and building predictive models that optimize performance metrics and enhance operational efficiency. With a keen eye for data storytelling, I communicate findings effectively to stakeholders, transforming raw data into compelling narratives that guide informed decisions. I am passionate about continuous learning and innovation, staying abreast of emerging technologies and methodologies to deliver impactful solutions in dynamic business environments.
                    </div>

                    
                </div>
            </div>
            <div className="whatIDoContainerList">
                <div>
                    <img src={Hacking} style={{height: '150px'}}/>
                </div>
                <div className="whatIDoContentContainer">
                <div className="whatIDoHeader">
                        Ethical hacking
                    </div>
                    <div className="whatIDoContentInformation">
                    Ethical hacking, or penetration testing, is my forte where I apply my technical expertise to proactively identify and address security vulnerabilities in systems and networks. With a deep understanding of cybersecurity principles and methodologies, I employ a systematic approach to simulate real-world cyber attacks in a controlled environment. Using tools and techniques compliant with legal and ethical standards, I conduct comprehensive assessments to assess the resilience of infrastructures against potential threats. My skill set includes proficiency in penetration testing frameworks such as Metasploit, along with network scanning tools like Nmap. Through continuous learning and staying updated on the latest security trends, I ensure that my strategies remain adaptive and effective in combating evolving cyber threats.
                    </div>

                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default WhatIDo;