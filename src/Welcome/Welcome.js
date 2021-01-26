import './Welcome.css';
import { useEffect } from 'react';

function Welcome({welcomeTextRef}) {
  useEffect(() => {
    console.log('welcomeUseEffect')
    console.log(welcomeTextRef);
  })
  return (
    <div id="welcome-container">
      <div ref={welcomeTextRef} style={{fontSize: '5vw'}}>
        Welcome
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
