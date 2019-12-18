import React from 'react';
import './App.css';

// Pages
import FillUpForm from './pages/fill-up-form';

function App(props) {
  return (
    <div className="App">
      <span id="forkongithub"><a target="_blank" href="https://github.com/jaidepala/ubiquitous-enigma">Fork me on GitHub</a></span>
      <FillUpForm />
    </div>
  );
}

export default App;
