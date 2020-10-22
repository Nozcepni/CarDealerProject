import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../src/pages/LoginPage'
import SignupPage from '../src/pages/SignupPage'


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
