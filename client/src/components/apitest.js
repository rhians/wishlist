import React, { component } from 'react';
import apitest from '../styling/apitest.css';

class apidata extends React.Component {

constructor(props) {
  super(props);
  this.state = { suggestion: [],
  };
}

componentWillMount(){
  fetch('https://www.adidas.co.uk/api/suggestions/Stans%20Smith')
  .then(results => {
    return results.json();
  }).then(data => {
    let product = data.results.map((product) => {
      return(
        <div key={product.product}>
        </div>
      )
    })
    this.setState({product: product});
    console.log("state", this.state.product);
  })
}

render() {
  return (
    <ul>
    //create containers
    <div classname="container1">
    <div className="container2">
    {this.state.product}
    </div>
    </div>
    </ul>
  )}
}

export default apidata;
