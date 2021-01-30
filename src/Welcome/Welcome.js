import './Welcome.css';

function Welcome({welcomeTextRef}) {
  return (
    <div id="welcome-container">
      <div ref={welcomeTextRef} style={{fontSize: '10vw'}}>❤️</div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
