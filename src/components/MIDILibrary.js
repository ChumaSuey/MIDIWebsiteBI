import React from 'react';

const midiFiles = [
  'Queen awakening - Blood Instinct.mid',
  'Partial Heaven - Blood Instinct.mid',
  'Hopeful Sunlight - Blood Instinct.mid',
  'Helium Blaster - Blood Instinct.mid',
  'Monster Machinery - Blood Instinct.mid',
  'Blue moon - Blood Instinct.mid',
  'Solis Orientis - Blood Instinct.mid',
  // the midi file names here (without order as long file name matches)
];

const MIDILibrary = () => (
  <div>
    <h2>Music Library</h2>
    <ul>
      {midiFiles.map((file) => (
        <li key={file}>
          <a href={`/midi-files/${file}`} download>
            {file.replace('.mid', '').replace(/-/g, ' ')}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default MIDILibrary;