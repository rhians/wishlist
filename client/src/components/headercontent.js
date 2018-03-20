///I feel this should work and I don't quite see why it doesn't, the same code (I checked this like 100 times)
//worked in a coupl eof other things I made *screaming ghost face*

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
