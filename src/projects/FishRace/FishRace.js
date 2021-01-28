import './FishRace.css';
import Description from '../../helpers/Description/Description';
import ContentWithDescriptionContainer from '../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer';

function FishRace({showFishRace}) {
  return (
    <ContentWithDescriptionContainer id="fish-race-container">
      { showFishRace && 
        <iframe 
          id="fish-race-iframe"
          title="fish-race"
          className="iframe-size" 
          src="https://itisafishrace.xyz" 
          loading="lazy" 
          frameBorder="0"></iframe> }
      <Description>
        Created during a night filled with drinks by Daniel and me. 
        Later refined by the people mentioned before and Joost. <br/>
        Thank you guys for having many discussions on the soul of the fish race. 
      </Description>
    </ContentWithDescriptionContainer>
  );
}

export default FishRace;
