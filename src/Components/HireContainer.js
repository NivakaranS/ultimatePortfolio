import React, { useState } from "react";
import './HireContainer.css';
import { db } from './firebase';
import { ref, push } from 'firebase/database';

const HireContainer = () => {
    const [hireClick, setHireClick] = useState(false);
    const [submitClick, setSubmitClick] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        const messagesRef = ref(db, 'messages');
        push(messagesRef, {
          name,
          email,
          message
        });
        setName('');
        setEmail('');
        setMessage('');
        console.log(name);
        console.log(email);
        console.log(message)
        setSubmitClick(true)
    };


    
    

    
    return(
        <div className="mainHireContainer" >
            <div className="innerHireContainer">
                <div style={{textAlign: 'center', fontWeight: '500', color: 'white'}}>
                    Got anything in your mind? Let's make something awesome together!
                </div>
                {hireClick
                ?
                <div className="formConditionContainer">
                    {submitClick
                    
                ?<div style={{textAlign: 'center', color: 'black', margin: '10px 0px', fontWeight: '600'}}>
                    Thanks for your message. Will get back to you soon:)
                </div>
                :
                <form className="hireFormContainer" onSubmit={handleSubmit}>
               
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start',  marginLeft: '40px', marginBottom: '5px'}}>Name</div>
                        <input className="hireInput" name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" required/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Email</div>
                        <input className="hireInput" value={email} name="email" type="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Message</div>
                        <textarea className="hireInput" value={message} name="message" onChange={(e) => setMessage(e.target.value)} rows={5} required />
                    </div>
                    <div className="hireComponent">
                        <button type="submit" className="submitBtn" >Submit</button>
                    </div>
                    
                </form>
                }
                </div>
                :
                <div >
                    <button className="hireBtn" onClick={() => {setHireClick(true)}}>
                        Get in touch
                    </button>
                    
                </div>}

            </div>
            

        </div>
        
    )
}

export default HireContainer;