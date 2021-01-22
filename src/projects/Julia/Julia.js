import './Julia.css';
import { useEffect, useState } from 'react';

const Julia = () => {
  const [ trueHeightIframe, setTrueHeightIframe ] = useState(null);
  
  useEffect(() => {
      setTimeout(() => {
        const juliaIframe = document.getElementById('julia-iframe');
        // juliaIframe.style.height = 'auto';
        // console.log("juliaIframe.contentWindow.document: ", juliaIframe.contentWindow);
        setTrueHeightIframe(juliaIframe.offsetHeight);
      }, 2000)
      
  }, []);
  return (
    <div id="julia-container">
      <iframe
        id="julia-iframe"
        src="https://rogierderuijter.github.io/julia/" 
        frameBorder="0">
      </iframe>
    </div>
  );
}

export default Julia;
