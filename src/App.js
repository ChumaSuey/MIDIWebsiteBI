import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MIDILibrary from './components/MIDILibrary';
import MIDIPlayer from './components/MIDIPlayer';

const midiFiles = [
  '/midi-files/blood-instinct.mid',
  '/midi-files/another-midi-file.mid',
  // Add more MIDI files here
];

function App() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-4 mb-4">
        <img src="/band-logo.jpg" alt="Band Logo" width={100} height={100} className="mb-2" />
        <h1>Blood Instinct MIDI Library</h1>
        <nav>
          <ul className="nav justify-content-center">
            <li className="nav-item"><a className="nav-link text-white" href="#desc">Description</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#music">Music</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#contact">Platforms</a></li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <section id="desc" className="mb-5">
          <h2>Description</h2>
          <p>All the MIDIs produced by my band are available for download here.</p>
        </section>
        <section id="music" className="mb-5">
          <h2>Music</h2>
          <p>Check out my MIDI music library below:</p>
          <MIDILibrary />
          <div className="mt-4">
            <MIDIPlayer midiFiles={midiFiles} />
          </div>
        </section>
        <section id="contact" className="mb-5">
          <h2>Platforms</h2>
          <a href="https://blood-instinct.bandcamp.com" className="btn btn-outline-primary m-1">Bandcamp</a>
          <a href="https://soundcloud.com/blood-instinct-72" className="btn btn-outline-info m-1">SoundCloud</a>
        </section>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>- Chuma</p>
      </footer>
    </div>
  );
}

export default App;
