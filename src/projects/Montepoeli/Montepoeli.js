// import montepoeliLogo from '../../assets/montepoeli_logo.png';
import montepoeliHome from '../../assets/montepoeli_home.png';
import montepoeliAddGame from '../../assets/montepoeli_add_game.png';
import montepoeliAddGameFilled from '../../assets/montepoeli_add_game_filled.png';
import './Montepoeli.css';

function Montepoeli() {
  return (
    <>
      <div className="montepoeli-content-container" style={{width: '100%', height: '70%'}}>
        <img className="iphone rounded-corners spacer" src={montepoeliHome}></img>
        <img className="iphone rounded-corners spacer" src={montepoeliAddGame}></img>
        <img className="iphone rounded-corners" src={montepoeliAddGameFilled}></img>
        <div className="footer">
          A website build for the chess club. <br/>
          The chess club was founded in Montepulciano, Italy. <br/>
          The website is an attempt to keep the spirit alive from this vacation. <br/>
          It is mainly used as a PWA and is my breeding ground for exploring non functional features. <br/>
          Semantic release, you will always be my favourite piece of software ever. Even if no one else thinks so.
        </div>
      </div>
    </>
  );
}

export default Montepoeli;