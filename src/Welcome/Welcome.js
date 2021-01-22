import './Welcome.css';

function Welcome() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <div style={{fontSize: '20px'}}>
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
