import './Julia.css';
import Loader from '../../Loader/Loader';
import DelayedLoadingFade from '../../Helpers/DelayedLoadingFade/DelayedLoadingFade';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';

const Julia = ({showJulia}) => {
  return (
    <>
    <SiteWithDescriptionContainer id="julia-container" noFixedHeight={true}>
        {/* <DelayedLoadingFade removeLoader={showJulia}>
          <div className="iframe-size loader" >
            <Loader />
          </div>
        </DelayedLoadingFade> */}
        {showJulia && 
          <iframe
            id="julia-iframe"
            className="iframe-size"
            src="https://rogierderuijter.github.io/julia/" 
            frameBorder="0">
          </iframe> }
      </SiteWithDescriptionContainer>
    </>
  );
}

export default Julia;
