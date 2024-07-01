import React from 'react';
import './Card.css';
import Logo from './images/logon.png'

const Card = ({projectIcon, name}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <img src={Logo} style={{height: '70px', width: '70px'}}/>
            <div>
                <strong>{name}</strong>
                
            </div>
            
            
          </div>
        </div>
        <div className="front">
          
          <div className="front-content">
            <small className="badge">{name}</small>
            <div className='projectDescription'>
                    This is my personal portfolio website which serves as a showcase of my skills and projects, built using React.js for the frontend and Node.js with Express.js for the backend. The frontend is designed to be responsive and user-friendly, providing seamless navigation and showcasing my projects, skills and experience. I've integrated PostgreSQL for efficient data management, ensuring smooth retrieval and storage of the details of the people who would like to hire or collaborate with me. This project not only highlights my technical proficiency in full-stack development but also reflects my commitment to creating clean, scalable code and engaging user interfaces. Through this portfolio, I aim to demostrate my capabilities and passion for web development and UI/UX designing providing visitors with insights into my professional journey and achievements.
                </div>
            <div className="description">
                
              <div className="title">
                <div style={{background: 'brown', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 10px', borderRadius: '15px'}}>HTML</div>
                <div style={{background: 'blue', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 10px', borderRadius: '15px'}}>CSS</div>
                <div style={{background: 'yellow', fontSize: '10px' , color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px 10px', borderRadius: '15px'}}>Javascript</div>
                
                <button className='getCodeBtn'><a href='https://github.com/NivakaranS/nodePortfolio.git'>Get code</a></button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
