import React, { Component } from 'react';
import ReduxApp from './ReduxApp';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Form Validation Strategies</h1>
        </header>
        <main className="App-content">
          <ReduxApp />
        </main>
      </div>
    );
  }
}

export default App;
