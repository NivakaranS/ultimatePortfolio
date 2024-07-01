import React, { useState } from "react";
import './HireContainer.css';

const HireContainer = () => {
    const [hireClick, setHireClick] = useState(false);


    return(
        <div className="mainHireContainer">
            <div className="innerHireContainer">
                <div style={{textAlign: 'center', fontWeight: '500', color: 'white'}}>
                    Got anything in your mind? Let's make something awesome together!
                </div>
                {hireClick
                ?<div className="hireFormContainer">
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start',  marginLeft: '40px', marginBottom: '5px'}}>Name</div>
                        <input className="hireInput" type="text"/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Email</div>
                        <input className="hireInput" type="text"/>
                    </div>
                    <div className="hireComponent">
                        <div style={{alignSelf: 'flex-start', marginLeft: '40px', marginBottom: '5px'}}>Message</div>
                        <textarea className="hireInput" rows={5} />
                    </div>
                    <div className="hireComponent">
                        <button className="submitBtn" onClick={() => {setHireClick(false)}}>Submit</button>
                    </div>
                </div>
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