// FullscreenVideo.jsx
import React, { useEffect, useRef } from 'react';
import './FullscreenVideo.css';

const FullscreenVideo = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && audioRef.current) {
      const playMedia = async () => {
        try {
          await videoRef.current.play();
          await audioRef.current.play();
        } catch (error) {
          console.error('Error playing media:', error);
        }
      };
      playMedia();
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        className="fullscreen-video"
        loop
        muted
        playsInline
      >
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <audio
        ref={audioRef}
        loop
      >
        <source src="music.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      <button className="audio-control" onClick={toggleAudio}>
        {audioRef.current?.paused ? 'Play' : 'Pause'} Music
      </button>
    </div>
  );
};

export default FullscreenVideo;