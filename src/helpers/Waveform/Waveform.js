import WaveSurfer from "wavesurfer.js";
import fishRaceAudio from "../../assets/comment-fish-race.mp3";
import { useEffect, useState } from "react";

const Waveform = () => {
  const [wavesurfer, setWavesurfer] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setWavesurfer(
      WaveSurfer.create({
        container: "#waveform",
        barHeight: 5,
      })
    );
  }, [WaveSurfer, setWavesurfer]);

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.load(fishRaceAudio);
    }
  }, [wavesurfer]);

  const toggleAudio = () => {
    setPlaying(!playing);
    wavesurfer.playPause();
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a style={{ width: "50px", cursor: "pointer" }} onClick={toggleAudio}>
        {playing ? "Pause" : "Play"}
      </a>
      <div id="waveform" style={{ width: "80%", marginLeft: "10px" }}></div>
    </div>
  );
};

export default Waveform;
