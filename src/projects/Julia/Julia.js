import './Julia.css';
import ContentContainer from '../../Helpers/ContentContainer/ContentContainer';

const Julia = ({showJulia}) => {
  return (
    <>
    <ContentContainer id="julia-container" noFixedHeight={true}>
        {showJulia && 
          <iframe
            id="julia-iframe"
            className="iframe-size"
            src="https://rogierderuijter.github.io/julia/" 
            frameBorder="0">
          </iframe> }
      </ContentContainer>
    </>
  );
}

export default Julia;
