import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Home extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="Todo_App">
              <h1>Landing Page</h1>
            </div>
          </div >
        </div>
    );
  }
}
export {Home};
