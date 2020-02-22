import React from 'react';
import RoadieComm from './assets/Software-Box-Mock-Up.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header"></div>
        <div className="info">
          <img className="roadie-image" src={RoadieComm} alt="Roadie Communicator"/>
          <div className="roadie-info">
            <div className="tile">ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE</div>
            <div className="subtitle">by Roadie</div>
            <div className="description">Lorem ipsum dolor sit amet, eam at tempor constituam. Volumus eleifend repudiandae ad mel.</div>
          </div>
        </div>
        <div className="reviews-container">Chao</div>
      </div>
    </div>
  );
}

export default App;
