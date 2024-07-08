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
                    Contact
                </div>
                
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/mail.png" alt="mail"/>

                    nivakaran@hotmail.com
                </div>
            </div>
            <div style={{margin: '4px 0px'}}>
                <a href='https://www.linkedin.com/in/nivakaran/'><img src={LinkedIn} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
                <a href='https://github.com/NivakaranS'><img src={Git} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
                <a href='https://www.instagram.com/nivakarans/'><img src={Instagram} style={{height: '25px', cursor: 'pointer', margin: '0px 8px'}}/></a>
            </div>
            <hr style={{width: '95%'}}/>
            <div style={{marginTop: '5px', textAlign: 'center'}}>
            &copy; 2024 Nivakaran Shanmugabavan - All Rights Reserved
            </div>
            

        </div>
    )
}

export default Footer;