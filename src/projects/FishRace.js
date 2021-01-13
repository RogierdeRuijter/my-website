import githubLogo from '../GitHub-Mark-64px.png';

function FishRace() {
  return (
    <div style={{width: '100%', height: '90%'}}>
      <iframe src="https://itisafishrace.xyz" frameBorder="0"></iframe>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <img src={githubLogo} width={'20px'} height={'20px'}/>
      </div>
    </div>
  );
}

export default FishRace;
