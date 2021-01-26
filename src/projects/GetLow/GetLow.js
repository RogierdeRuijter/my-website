import './GetLow.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';

function GetLow({showGetLow}) {
  return (
    <SiteWithDescriptionContainer id="get-low-container" loading={!showGetLow}>
      <DelayedLoadingFade removeLoader={showGetLow}>
        <div className="iframe-size loader">
          <Loader />
        </div>
      </DelayedLoadingFade> 
      { showGetLow && 
        <iframe 
          id="get-low-iframe"
          className="iframe-size" 
          src="https://rogierderuijter.github.io/get-low/" 
          loading="lazy" 
          frameBorder="0" 
          style={{borderRadius : '10px'}}></iframe>}
      <div id="description">
        Dedication to the performance that makes me believe I can do anything. © Kanye West - All day [Brit Awards]
      </div>
    </SiteWithDescriptionContainer>
  );
}

export default GetLow;
