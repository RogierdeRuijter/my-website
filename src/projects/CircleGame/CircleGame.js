import "./CircleGame.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import Description from "../../helpers/Description/Description";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";

function CircleGame({ showCircleGame }) {
  return (
    <ContentWithDescriptionContainer
      id="circle-game-container"
      loading={!showCircleGame}
    >
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showCircleGame}>
          <Loader />
        </DelayedLoadingFade>
      </div>
      {showCircleGame && (
        <iframe
          id="circle-game-iframe"
          title="circle-game"
          className="iframe-size"
          src="https://circle-ga.me"
          loading="lazy"
          frameBorder="0"
          style={{ borderRadius: "10px" }}
        ></iframe>
      )}
      <Description>
        The iterations have been endless. Thanks for the helping hand Lotte.
      </Description>
    </ContentWithDescriptionContainer>
  );
}

export default CircleGame;
