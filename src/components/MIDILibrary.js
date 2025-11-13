import React from 'react';

const midiFiles = [
  'Queen awakening - Blood Instinct.mid',
  'Partial Heaven - Blood Instinct.mid',
  'Hopeful Sunlight - Blood Instinct.mid',
  'Helium Blaster - Blood Instinct.mid',
  'Monster Machinery - Blood Instinct.mid',
  'Blue moon - Blood Instinct.mid',
  'Solis Orientis - Blood Instinct.mid',
  'Berserker Barrage - Blood Instinct.mid',
  'Lightning Complex - Blood Instinct.mid',
  // the midi file names here (without order as long file name matches).
];

const MIDILibrary = () => (
  <div>
    <h2>Music Library</h2>
    <ul>
      {midiFiles.map((file) => {
        const displayName = file
          .replace(/\.mid$/i, '')         // remove extension
          .replace(/ ?- ?/g, ' - ');      // normalize and keep " - " separators
        return (
          <li key={file}>
            <a href={`${process.env.PUBLIC_URL}/midi-files/${file}`} download>
              {displayName}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default MIDILibrary;