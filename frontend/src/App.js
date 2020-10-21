import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../src/pages/LoginPage'


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
