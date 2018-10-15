import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import Topnav from './Topnav.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Topnav/>
	<Content/>
      </div>
    );
  }
}

export default App;
