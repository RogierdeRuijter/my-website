import './Welcome.css';

function Welcome({welcomeTextRef}) {
  return (
    <div id="welcome-container">
      <div ref={welcomeTextRef} style={{fontSize: '4vw'}}>
        <div style={{textAlign: 'center'}}>
          <div>"Ik verdien mijn geld met letters"</div> 
          <div>Otto<sup>✝</sup> en Rogier de Ruijter</div>
        </div>
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
