import React, { useEffect, useState } from "react";
import './BasicContainer.css';
import Potrait from './images/portrait.png';
import Arrow from './images/right-arrow.png';
import { Link } from "react-scroll";

const BasicContainer = () => {
    const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const myTitles = ['Java Developer', 'Full stack developer', 'Graphic designer'];

  useEffect(() => {
    const wordInterval = setTimeout(() => {
      if (wordIndex < myTitles.length) {
        const currentWord = myTitles[wordIndex];
        
        if (letterIndex < currentWord.length) {
          // Typing the word letter by letter
          setDisplayText(currentWord.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
        } else if (letterIndex >= currentWord.length && letterIndex < currentWord.length * 2) {
          // Deleting the word letter by letter
          setDisplayText(currentWord.slice(0, currentWord.length - (letterIndex - currentWord.length)));
          setLetterIndex(letterIndex + 1);
        } else {
          // Reset and move to the next word
          setDisplayText('');
          setLetterIndex(0);
          setWordIndex((wordIndex + 1) % myTitles.length);
        }
      } else {
        // Once all words have been typed and deleted, reset or do something else
        setDisplayText('outerElse');
        setWordIndex((wordIndex + 1) % myTitles.length);
      }
    }, 200); // Typing speed (milliseconds per character)

    return () => clearTimeout(wordInterval);
  }, [displayText, letterIndex, wordIndex, myTitles]);


    return(
        <div className="mainBasicContainer">
            <div className="basicLeftContainer">
                <img className="basicPotrait" src={Potrait}/>
            </div>
            <div className="basicRightContainer">
                <div className="innerBasicRightContainer">
                    <p className="firstText">Hello there!</p>
                    <p className="secondText">This is Nivakaran</p>
                    <p className="thirdText">I am a <span className="titleText">{displayText}</span></p>
                    <div className="buttonContainer">
                    <Link to="about" smooth={true} duration={500} offset={-85} style={{color: 'white'}}>
                    <button className="basicKnowBtn">Know more<img className="arrowIcon" src={Arrow} /></button>
                    
                    </Link>
                    </div>
                
                </div>
                

            </div>
        </div>
    )
}

export default BasicContainer;