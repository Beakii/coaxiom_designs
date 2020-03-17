import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homepage/homepage';
import Footer from './components/footer/footer';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Homepage/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
