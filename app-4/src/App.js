import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import Image from './Components/Image/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
        <Image placeholder= { "https://placeholder.com" }/>
      </div>
    );
  }
}

export default App;
