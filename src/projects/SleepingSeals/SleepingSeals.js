import './SleepingSeals.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';
import Description from '../../Helpers/Description/Description';

function SleepingTumblrSeals({showSleepingTumblrSeals}) {
  return (
    <SiteWithDescriptionContainer id="sleeping-seals-container">
      <DelayedLoadingFade removeLoader={showSleepingTumblrSeals}>
        <div className="iframe-size loader">
          <Loader color={'gray'}/>
        </div>
      </DelayedLoadingFade>
      { showSleepingTumblrSeals && 
        <iframe 
          id="sleeping-tumblr-seals-iframe"
          className="iframe-size" 
          src="https://sleepingsealswithcelebrityquotes.com" 
          frameBorder="0"></iframe>}
      <Description>
        These are memes for sleeping seals. Thanks Jonna for creating this with me and eating way too much candy for one night.
      </Description>
    </SiteWithDescriptionContainer>
  );
}

export default SleepingTumblrSeals;
