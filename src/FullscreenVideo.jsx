// FullscreenVideo.jsx
import React, { useState, useRef } from 'react';
import './FullscreenVideo.css';

const FullscreenVideo = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const startPlayback = async () => {
    try {
      await videoRef.current.play();
      await audioRef.current.play();
      setHasStarted(true);
    } catch (error) {
      console.error('Playback error:', error);
    }
  };

  return (
    <div className="video-container">
      {!hasStarted && (
        <div className="start-screen" onClick={startPlayback}>
          <div className="start-button">
            Click to Start
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="fullscreen-video"
        playsInline
        loop
      >
        <source src="background.mp4" type="video/mp4" />
      </video>

      <audio
        ref={audioRef}
        loop
      >
        <source src="music.wav" type="audio/wav" />
      </audio>
    </div>
  );
};

export default FullscreenVideo;