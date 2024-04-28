import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FavoriteBorder,SkipNext,SkipPrevious,Pause,PlayArrow } from '@mui/icons-material';

import './MainPage.css';


const MainPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(300); // Example duration of 5 minutes (300 seconds)
  const [currentSong, setCurrentSong] = useState("Song Name"); // Add state for current song name

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    // Logic for skipping forward
  };

  const handleSkipBackward = () => {
    // Logic for skipping backward
  };

  const handleLike = () => {
    // Logic for liking the current track
  };

  const handleChangeTime = (event) => {
    setCurrentTime(event.target.value);
    // Logic for seeking to a specific time in the track
  };

  return (
    <div className="centered-container">
      <div className="song-info">
        <h2>{currentSong}</h2> {/* Display current song name */}
        <button onClick={handleLike} className="button-icon" ><FavoriteBorder/></button> {/* Like button */}
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleChangeTime}
        />
      </div>
      <div className="controls">
        <button onClick={handleSkipBackward} className="button-icon"><SkipPrevious/></button> {/* Skip backward button */}
        <button onClick={togglePlay} className="button-icon">
          {isPlaying ? <Pause /> : <PlayArrow />}
        </button>
        <button onClick={handleSkipForward} className="button-icon"><SkipNext/></button> {/* Skip forward button */}
      </div>
    </div>
  );
};

export default MainPage;