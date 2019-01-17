import React, { Component } from 'react';
import logo from './logo.svg';
import WelcomeClass from "./welcomeClass";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <WelcomeClass name={"Hoang"} />
        </header>

      </div>
    );
  }
}

export default App;










