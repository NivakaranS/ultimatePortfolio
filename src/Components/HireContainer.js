import React, { useState } from "react";
import './HireContainer.css';

const HireContainer = () => {
    const [hireClick, setHireClick] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');
    const [submitClick, setSubmitClick] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onHandleSubmit = () => {
        submitClick(true);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if(response.ok){
                setResponseMessage('Message submitted successfully!');
            } else {
                setResponseMessage(`Error: ${result.error}`);
            }
        } catch(error) {
            setResponseMessage('Error submitting message');
            console.error('Error:', error);
        }
    };

    
    return(
        <div className="mainHireContainer">
            <div className="innerHireContainer">
                <div style={{textAlign: 'center', fontWeight: '500', color: 'white'}}>
                    Got anything in your mind? Let's make something awesome together!
                </div>
                {hireClick
                ?
                <form className="hireFormContainer" onSubmit={handleSubmit}>
               
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start',  marginLeft: '40px', marginBottom: '5px'}}>Name</div>
                        <input className="hireInput" name="name" value={formData.name} onChange={handleChange} type="text" required/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Email</div>
                        <input className="hireInput" name="email" type="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Message</div>
                        <textarea className="hireInput" name="message" value={formData.message} onChange={handleChange} rows={5} required />
                    </div>
                    <div className="hireComponent">
                        <button type="submit" className="submitBtn" onClick={() => {setHireClick(false)}}>Submit</button>
                    </div>
                    
                </form>
                :
                <div >
                    <button className="hireBtn" onClick={() => {setHireClick(true)}}>
                        Hire me
                    </button>
                    
                </div>}

            </div>
            

        </div>
        
    )
}

export default HireContainer;