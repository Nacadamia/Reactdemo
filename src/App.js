import React, { Component } from 'react';
import logo from './logo.svg';
import welcomeClass from "./welcomeClass";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GELBER</h1>
        </header>
        <welcomeClass name={"Herr Meier!"}></welcomeClass>
      </div>
    );
  }
}

export default App;










