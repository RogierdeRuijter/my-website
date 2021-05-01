import { useState, useEffect, useLayoutEffect } from 'react';
import { useInterval } from '../helpers/use-interval/use-interval';
import './ScrollingText.css';

// const texts = [
//   'Thank you', 
//   'Welcome', 
//   'New', 
//   'More'
// ];

const fishRaceDescriptions = [
  'Gemaakt in een avond vol met drank door Daniel en mij',
  'Later verfijnd door de mensen die hiervoor genoemd zijn en Joost',
  'Bedankt jongens voor de eindeloze discussies over de essentie van de Fish race' 
];

const fishRaceDelays = [
  2000,
  4000,
  5000
];

function ScrollingText({project}) {
  const [ previousTest, setPreviousText ] = useState('');

  // TODO: rename to descriptions
  const [ texts, setTexts ] = useState();
  const [ delays, setDelays ] = useState();
  const [ activeText, setActiveText ] = useState();
  const [ nextText, setNextText ] = useState();

  const [ currentIndex, setCurrentIndex ] = useState(0);
  const [ currentDelay, setCurrentDelay ] = useState();
  
  // TODO: find a better name for this state variable
  const [ isRunning, setIsRunning ] = useState(false);

  useInterval(() => {
    setPreviousText(texts[currentIndex])
    setActiveText(texts[currentIndex + 1]);      
    setNextText(texts[currentIndex + 2]);

    setCurrentIndex(index => index + 1);
    setCurrentDelay(delays[currentIndex + 1]);
  }, isRunning ? currentDelay : null);

  useEffect(() => {
    if (texts && currentIndex >= texts.length) {
      setIsRunning(false);
    } 
  }, [currentIndex, texts]);

  useLayoutEffect(() => {
    let descriptions;
    let currentDelays;
    
    if (project === 'fish-race') {
      descriptions = fishRaceDescriptions;
      currentDelays = fishRaceDelays;
    } else {
      throw new Error('Project not defined')
    }

    setCurrentDelay(currentDelays[0]);

    setNextText(descriptions[0]);

    setTexts(descriptions);
    setDelays(currentDelays);
  }, [project]);

  return (
    <>
      <button onClick={() => {
        setIsRunning(true);
        
        setActiveText(texts[0]);
        setNextText(texts[1]);
        }}>Start</button>
      <p className="previous-text">{previousTest}</p>
      <p className="active-text">{activeText}</p>
      <p className="next-text">{nextText}</p>
    </>
  );
}

export default ScrollingText;
