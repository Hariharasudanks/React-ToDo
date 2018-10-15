import React, { Component } from 'react';
import './style.css';

class Sidenav extends Component {
  render() {
    return (
      <div className = "side-nav">
     <ul className="sideLinks">
  <li>
   <a href="#"><button className="fa fa-bars  button-class "></button></a>
</li>
  <li>
   <a href="#"><button className="fa fa-sun-o button-class "></button></a>
   <span className="innerspan">My day</span>
</li>
    <li>
     <a href="#"><button id="star" className="fa fa-star-o button-class" aria-hidden="true"></button></a>
     <span className="innerspan">Important</span>
  </li>

  <li>
    <a  href="#"><button className="fa fa-calendar  button-class"></button></a>
       <span className="innerspan">Planned</span>
</li>
	<li><a href="#"><button className="fa fa-home button-class"></button></a>
    <span className="innerspan">Tasks</span>

</li>
</ul>
<ul className = "inner-ul">
</ul>
</div>
    );
  }
}

export default Sidenav;
