import './CircleGame.css';

function CircleGame({showWebsite}) {
  return (
    <div style={{width: '100%', height: '80%', paddingTop: '20px'}}>
      {showWebsite && <iframe src="https://circle-ga.me" loading="lazy" frameBorder="0" style={{borderRadius : '10px'}}></iframe>}
      <div id="description">
        The iterations have been endless. Thanks for the helping hand Lotte.
      </div>
    </div>
  );
}

export default CircleGame;
