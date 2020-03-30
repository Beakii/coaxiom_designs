import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import DesignOne from './components/designOne/designOne';
import DesignTwo from './components/designTwo/designTwo';

let pageIndex = 0;

function incrementIndex(){
  pageIndex++;
}

function getPageRoute(){
  if(pageIndex % 2 === 0){
    return "/";
  }
  else{
    return "/different";
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={getPageRoute}>
          <div className="design-switcher" onClick={incrementIndex}>
            <i class="fas fa-random"></i>
          </div>
        </Link>

        <Switch>
          <Route exact path="/" component={DesignOne}/>
          <Route path ="/different" component={DesignTwo}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
