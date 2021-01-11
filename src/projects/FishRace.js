import githubLogo from '../GitHub-Mark-64px.png';

function FishRace() {
  return (
    <div style={{width: '90%', height: '70%'}}>
      <iframe src="https://itisafishrace.xyz"></iframe>
      <div style={{display: "flex", justifyContent: "flex-end"}}>
        <img src={githubLogo} width={'20px'} height={'20px'}/>
      </div>
    </div>
  );
}

export default FishRace;
