import './CircleGame.css';

function CircleGame() {
  return (
    <div style={{width: '100%', height: '80%', paddingTop: '20px'}}>
      <iframe src="https://circle-ga.me" frameBorder="0" style={{borderRadius : '10px'}}></iframe>
      <div style={{marginTop: '50px', paddingBottom: '20px', fontStyle: 'italic', textAlign: 'right'}}>
        The iterations have been endless. Thanks for the helping hand Lotte.
      </div>
    </div>
  );
}

export default CircleGame;
