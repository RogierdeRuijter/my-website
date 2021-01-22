import './Welcome.css';

function Welcome() {
  return (
    <div id="welcome-container">
      <div style={{fontSize: '5vw'}}>
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
