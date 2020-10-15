import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Let me give you a pop</p>


        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

      </header>
      <body>salope</body>
    </div>
  );
}

export default App;
