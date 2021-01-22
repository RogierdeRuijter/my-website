import './CircleGame.css';

function CircleGame({showWebsite}) {
  return (
    <div id="circle-game-container">
      {/* {!showWebsite && <div style={{backgroundColor: 'gray', width: '100%', height: '100%'}}></div>} */}
      <iframe src="https://circle-ga.me" loading="lazy" frameBorder="0" style={{borderRadius : '10px'}}></iframe>
      {/* showWebsite */}
      <div id="description">
        The iterations have been endless. Thanks for the helping hand Lotte.
      </div>
    </div>
  );
}

export default CircleGame;
