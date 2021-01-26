import './SleepingSeals.css';
import ContentContainer from '../../Helpers/ContentContainer/ContentContainer';
import Description from '../../Helpers/Description/Description';

function SleepingTumblrSeals({showSleepingTumblrSeals}) {
  return (
    <ContentContainer id="sleeping-seals-container">
      { showSleepingTumblrSeals && 
        <iframe 
          id="sleeping-tumblr-seals-iframe"
          className="iframe-size" 
          src="https://sleepingsealswithcelebrityquotes.com" 
          frameBorder="0"></iframe>}
      <Description>
        These are memes for sleeping seals. Thanks Jonna for creating this with me and eating way too much candy for one night.
      </Description>
    </ContentContainer>
  );
}

export default SleepingTumblrSeals;
