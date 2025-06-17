import React from 'react';
import './App.css';
import HobbyClass from './HobbyClass';
import HobbyFunction from './HobbyFunction';

function App() {
  return (
    <div className="App">
      <div className="content-box">
        <HobbyClass />
        <hr />
        <HobbyFunction />
      </div>
    </div>
  );
}

export default App;
