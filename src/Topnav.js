import React, { Component } from 'react';
import './style.css';

class Topnav extends Component {
  render() {
    return (
      <nav className = "top-nav">
<div className ="top-text">
  To-Do
</div>
<div className ="search">
<i className ="search-icon fa fa-search"></i>
  <input className = "search-text" placeholder="Search "/>
</div>
</nav>
    );
  }
}

export default Topnav;
