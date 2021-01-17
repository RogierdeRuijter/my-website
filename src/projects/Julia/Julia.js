import './Julia.css';

function Julia() {
  return (
    <div style={{width: '100%', height: '100%'}}>
      <iframe 
        id="julia-container" 
        src="https://rogierderuijter.github.io/julia/" 
        frameBorder="0">
      </iframe>
    </div>
  );
}

export default Julia;
