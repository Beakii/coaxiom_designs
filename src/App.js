import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import DesignOne from './components/designOne/designOne';


function App() {
  return (
    <div className="App">
      <div className="design-switcher">
        <i class="fas fa-random"></i>
      </div>
      <Router>
        <DesignOne/>
      </Router>
    </div>
  );
}

export default App;
