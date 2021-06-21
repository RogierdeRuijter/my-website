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
    <>
      <a style={{ display: "inline-block" }} onClick={toggleAudio}>
        {playing ? "Pause" : "Play"}
      </a>
      <div id="waveform"></div>
    </>
  );
};

export default Waveform;
