//I feel this should work and I don't quite see why it doesn't as this worked in a couple of other things I made 

import React, { component } from 'react';
import logo from './ss.png';
import './styling/Headercontent.css';

class Headercontent extends Component {
  render() {
    return (
      <div className="Headercontent">
        <header className="Headercontent-header">
          <img src={logo} className="logo" alt="logo" />
            <h1>adidas wishlist</h1>
          </header>
          <p className="Headercontent-intro">Please work</p>
      </div>
    );
  }
}

export default Headercontent;
