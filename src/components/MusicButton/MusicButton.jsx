import React from "react";
import "./MusicButton.css";
const fadeDuration = 8000;

const MusicButton = () => {
  const [musicPlaying, setMusicPlaying] = React.useState(false);

  function fadeIn(audioTag) {
    let volume = 0;
    audioTag.volume = volume;
    audioTag.play();

    const fadeInterval = setInterval(() => {
      if (volume < 0.99) {
        volume += 0.01;
        audioTag.volume = volume;
      } else {
        clearInterval(fadeInterval);
      }
    }, fadeDuration / 100);
  }

  const handleMusicButtonClick = () => {
    const audio = document.querySelector(".musicAudio");
    if (audio.paused) {
      audio.volume = 0;
      fadeIn(audio);
      setMusicPlaying(true);
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  return (
    <>
      <button
        className={`musicButton ${musicPlaying && "active"}`}
        type="button"
        onClick={handleMusicButtonClick}
      >
        <ion-icon name="musical-note"></ion-icon>
      </button>
      <audio className="musicAudio" src="/backgroundAudio.mp3" autoPlay loop />
    </>
  );
};

export default MusicButton;
