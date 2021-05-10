import "./FishRace.css";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import ScrollingText from "../../ScrollingText/ScrollingText";

function FishRace({ showFishRace }) {
  return (
    <ContentWithDescriptionContainer id="fish-race-container">
      {showFishRace && (
        <iframe
          id="fish-race-iframe"
          title="fish-race"
          className="iframe-size"
          src="https://itisafishrace.xyz"
          loading="lazy"
          frameBorder="0"
        ></iframe>
      )}
      <div>
        <ScrollingText project="fish-race" />
      </div>
    </ContentWithDescriptionContainer>
  );
}

export default FishRace;
