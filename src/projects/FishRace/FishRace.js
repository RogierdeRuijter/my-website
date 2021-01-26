import './FishRace.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';
import Description from '../../Helpers/Description/Description';

function FishRace({showFishRace}) {
  return (
    <SiteWithDescriptionContainer id="fish-race-container">
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
    </SiteWithDescriptionContainer>
  );
}

export default FishRace;
