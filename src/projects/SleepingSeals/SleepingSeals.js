import './SleepingSeals.css';
import Description from '../../helpers/Description/Description';
import ContentWithDescriptionContainer from '../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer';

function SleepingTumblrSeals({showSleepingTumblrSeals}) {
  return (
    <ContentWithDescriptionContainer id="sleeping-seals-container">
      { showSleepingTumblrSeals && 
        <iframe 
          id="sleeping-tumblr-seals-iframe"
          title="sleeping-tumblr-seals"
          className="iframe-size" 
          src="https://sleepingsealswithcelebrityquotes.com" 
          frameBorder="0"></iframe>}
      <Description>
        These are memes for sleeping seals. Thanks Jonna for creating this with me and eating way too much candy for one night.
      </Description>
    </ContentWithDescriptionContainer>
  );
}

export default SleepingTumblrSeals;
