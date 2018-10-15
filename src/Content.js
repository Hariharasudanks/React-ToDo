import React, { Component } from 'react';
import './style.css';
import Sidenav from './Sidenav.js';

class Content extends Component {
  render() {
    return (
      <div className="contents">
     <Sidenav/>
     </div>
    );
  }
}

export default Content;
