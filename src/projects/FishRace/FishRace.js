import './FishRace.css';
import ContentContainer from '../../Helpers/ContentContainer/ContentContainer';
import Description from '../../Helpers/Description/Description';

function FishRace({showFishRace}) {
  return (
    <ContentContainer id="fish-race-container">
      { showFishRace && 
        <iframe 
          id="fish-race-iframe" 
          className="iframe-size" 
          src="https://itisafishrace.xyz" 
          loading="lazy" 
          frameBorder="0"></iframe> }
      <Description>
        Created during a night filled with drinks by Daniel and me. 
        Later refined by the people mentioned before and Joost. <br/>
        Thank you guys for having many discussions on the soul of the fish race. 
      </Description>
    </ContentContainer>
  );
}

export default FishRace;
