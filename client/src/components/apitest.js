//https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

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
    let image = data.results.map((suggestion) => {
      return(
        <div key={pic.results}>
        <img src={pic.results.medium} />
        </div>
      )
    })
    this.setState({suggestion: suggestion});
    console.log("state", this.state.suggestion);
  })
}

render() {
  return (
    <ul>
    //create containers
    <div classname="container1">
    <div className="container2">
    {this.state.suggestion}
    </div>
    </div>
    </ul>
  )
}

export default apidata;
