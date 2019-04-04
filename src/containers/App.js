import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render = () => {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Componentes</h2>
          <div className="components">
          





          </div>
        </header>
      </div>
    ); 
  }
}