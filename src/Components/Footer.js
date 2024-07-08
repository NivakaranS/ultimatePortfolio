import './Footer.css';
import React from 'react';
import Git from './images/github.png';
import LinkedIn from './images/linkedin.png';
import Instagram from './images/instagram.png';

const Footer = () => {
    return(
        <div className='mainFooterContainer'>
            <div >
                <div style={{textAlign: 'center', color: 'yellow', fontSize: '20px', marginBottom: '10px'}}>
                    Let's connect
                </div>
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img width="24" height="24" style={{marginRight: '5px'}} src="https://img.icons8.com/material-rounded/24/mail.png" alt="mail"/>

                    nivakaran@hotmail.com
                </div>
            </div>
            <div style={{margin: '4px 0px'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className='contactOptions'>
                <a href='https://www.linkedin.com/in/nivakaran/'><img src={LinkedIn} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
                </div>
                <div className='contactOptions'>
                <a href='https://github.com/NivakaranS'><img src={Git} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
                </div>
                <div className='contactOptions'>
                <a href='https://www.instagram.com/nivakarans/'><img src={Instagram} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
                </div>

                </div>
                
                
            </div>
            <hr style={{width: '95%'}}/>
            <div style={{marginTop: '5px', textAlign: 'center'}}>
            &copy; 2024 Nivakaran Shanmugabavan - All Rights Reserved
            </div>
            

        </div>
    )
}

export default Footer;