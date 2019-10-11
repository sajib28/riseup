import React from 'react';
import src1 from './intechnic.mp4';
import poster from './intechnic.jpg';
import './index.scss';
function App() {
  return (
    <div className="App">
      <div className="background-cover">
        <video autoPlay muted loop playsInline preload="none" poster={poster}>
          <source src={src1} type="video/mp4" />
        </video>
      </div>
      <div className="inroText">
        <h1>Sajib Kumar Biswas</h1>
        <p>I am a web developer</p>
      </div>
    </div>
  );
}

export default App;
