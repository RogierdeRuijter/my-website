// import montepoeliLogo from '../../assets/montepoeli_logo.png';
import montepoeliHome from '../../assets/montepoeli_home.png';
import montepoeliAddGame from '../../assets/montepoeli_add_game.png';
import montepoeliAddGameFilled from '../../assets/montepoeli_add_game_filled.png';
import './Montepoeli.css';

function Montepoeli() {
  return (
    <>
      <div className="content-container" style={{width: '100%', height: '70%'}}>
        <img className="iphone rounded-corners spacer" src={montepoeliHome}></img>
        <img className="iphone rounded-corners spacer" src={montepoeliAddGame}></img>
        <img className="iphone rounded-corners" src={montepoeliAddGameFilled}></img>
        <div className="footer">A minimalistic mobile first chess club website with too many non-functional features</div>
      </div>
    </>
  );
}

export default Montepoeli;
