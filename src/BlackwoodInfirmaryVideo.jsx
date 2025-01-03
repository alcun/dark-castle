import React, { useState, useRef } from 'react';
import './VideoStyles.css';

const DarkCastleVideo = () => {
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
          <div className="start-button rust">
            Enter the Blackwood Infirmary
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        className="fullscreen-video"
        playsInline
        loop
      >
        <source src="blackwood-infirmary.mp4" type="video/mp4" />
      </video>

      <audio
        ref={audioRef}
        loop
      >
        <source src="blackwood-infirmary.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default DarkCastleVideo;