import './Julia.css';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';

const Julia = ({showJulia}) => {
  return (
    <>
    <SiteWithDescriptionContainer id="julia-container" noFixedHeight={true}>
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
