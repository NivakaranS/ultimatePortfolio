import React from "react";
import './TechStack.css';
import Circle from './images/circle.png';
import Python from './images/python-final.png';
import ReactImage from './images/react-final5.png';
import ReactNative from './images/reactNative.png';
import TensorFlow from './images/TensorFlow.png';
import Java from './images/java.png';
import Node from './images/node-new.png';
import Express from './images/express2.png'
import Mongo from './images/mongodb.png';
import Mysql from './images/mysql.png';
import Php from './images/php.png';
import Aws from './images/aws.png';
import Redux from './images/redux.png';
import Next from './images/next.png';
import Postgres from './images/postgresql.png';
import Firebase from './images/firebase.png';


const TechStack = () => {
    return(
        <div className="mainTechStackContainer">
            <div className="projectsTitle">
                <img src={Circle} style={{height: '90px', position: 'relative', zIndex: 0}}/>
                <div className="whatTitleContainer1" >
                    Tech Stack
                </div>
                
                
            </div>
            <div className="techStackMainContent">
                <div className="innerTechStackContent">
                    <img src={Python} style={{width: '70px', height: '70px'}}/>
                    <img src={ReactImage} style={{width: 'auto', height: '70px'}}/>
                    <img src={Express} style={{width: 'auto', height: '70px'}}/>
                    <img src={ReactNative} style={{width: 'auto', height: '70px'}}/>
                    <img src={Node} style={{width: 'auto', height: '35px'}}/>
                    <img src={Java} style={{width: 'auto', height: '90px'}}/>
                    <img src={TensorFlow} style={{width: 'auto', height: '100px'}}/>
                    <img src={Mongo} style={{width: 'auto', height: '70px'}}/>
                    <img src={Mysql} style={{width: 'auto', height: '70px'}}/>
                    <img src={Postgres} style={{width: 'auto', height: '70px'}}/>
                    <img src={Firebase} style={{width: 'auto', height: '70px'}}/>
                    <img src={Next} style={{width: 'auto', height: '70px'}}/> 
                    <img src={Redux} style={{width: 'auto', height: '70px'}}/>
                    {/* <img src={Aws} style={{width: 'auto', height: '70px'}}/> */}
                    <img src={Php} style={{ width: 'auto', height: '70px'}}/>

                </div>
            </div>

        </div>
    )
}

export default TechStack;

