import './GetLow.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import Description from '../../Helpers/Description/Description';
import ContentWithDescriptionContainer from '../../Helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer';

function GetLow({showGetLow}) {
  return (
    <ContentWithDescriptionContainer id="get-low-container" loading={!showGetLow}>
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showGetLow}>
            <Loader />
        </DelayedLoadingFade> 
      </div>
      { showGetLow && 
        <iframe 
          id="get-low-iframe"
          className="iframe-size" 
          src="https://rogierderuijter.github.io/get-low/" 
          loading="lazy" 
          frameBorder="0" 
          style={{borderRadius : '10px'}}></iframe>}
      <Description>
        Dedication to the performance that makes me believe I can do anything. © Kanye West - All day [Brit Awards]
      </Description>
    </ContentWithDescriptionContainer>
  );
}

export default GetLow;
