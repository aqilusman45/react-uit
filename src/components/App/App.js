import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from '../Todo_App';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Todo_App">
        <TodoApp/>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
