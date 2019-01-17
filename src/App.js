import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeClass from "./welcomeClass";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GELBER</h1>
        </header>
        <WelcomeClass name={"Herr Meier!"} />
      </div>
    );
  }
}

export default App;










