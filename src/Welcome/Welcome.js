import './Welcome.css';
import film from '../assets/Film.mp4';
import preloadFilm from '../assets/poster_Film.png';

function Welcome({welcomeTextRef}) {
  return (
    <div id="welcome-container">
      <div ref={welcomeTextRef} style={{fontSize: '4vw'}}>
        <div id="video">
          <video autoPlay muted width="640" height="480" poster={preloadFilm}>
            <source src={film} type="video/mp4" />
          </video>
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
