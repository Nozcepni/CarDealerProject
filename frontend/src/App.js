import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
