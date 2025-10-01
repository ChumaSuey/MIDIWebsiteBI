import React, { useState, useRef } from 'react';

const MidiPlayer = ({ midiFiles }) => {
  const [currentMidi, setCurrentMidi] = useState(midiFiles[0] || '');
  const audioRef = useRef(null);

  const handleMidiChange = (event) => {
    setCurrentMidi(event.target.value);
    if (audioRef.current) {
      audioRef.current.load();
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <div>
      <select value={currentMidi} onChange={handleMidiChange}>
        {midiFiles.map((midiFile, index) => (
          <option key={index} value={midiFile}>{midiFile}</option>
        ))}
      </select>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <audio ref={audioRef} src={currentMidi} controls style={{ display: 'none' }} />
    </div>
  );
};

export default MidiPlayer;