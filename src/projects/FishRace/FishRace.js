import "./FishRace.css";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
// import ScrollingText from "../../ScrollingText/ScrollingText";
import Waveform from "../../helpers/Waveform/Waveform";

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
      {/* <div><ScrollingText project="fish-race" /></div> */}
      <div>
        <Waveform />
      </div>
    </ContentWithDescriptionContainer>
  );
}

export default FishRace;
