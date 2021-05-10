import './Welcome.css';

function Welcome({welcomeTextRef, children}) {
  return (
    <div id="welcome-container">
      <div ref={welcomeTextRef} style={{fontSize: '4vw'}}>
        { children }
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
