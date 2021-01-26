import './CircleGame.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';

function CircleGame({showCircleGame}) {
  return (
    <SiteWithDescriptionContainer id="circle-game-container" loading={!showCircleGame}>
      <DelayedLoadingFade removeLoader={showCircleGame}>
        <div className="iframe-size loader">
          <Loader />
        </div>
      </DelayedLoadingFade>
      {showCircleGame && <iframe id="circle-game-iframe" className="iframe-size" src="https://circle-ga.me" loading="lazy" frameBorder="0" style={{borderRadius : '10px'}}></iframe>}
      <div id="description">
        The iterations have been endless. Thanks for the helping hand Lotte.
      </div>
    </SiteWithDescriptionContainer>
  );
}

export default CircleGame;
