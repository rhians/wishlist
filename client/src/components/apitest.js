import React, { component } from 'react';
import apitest from './styling/apitest.css';

class Home extends React.Component {

constructor(){
  super();
  this.state = {};
}

componentWillMount(){
  // Called the first time the component is loaded right before the component is added to the page
  var url = "https://www.adidas.co.uk/api/suggestions/${query}";
  //i added in the JSX query - I think I need to define this somewhere else first though?
  Request.get(url).then((response) => {
    this.setState({
      products: response
    });
  });
}

componentDidMount(){
  // Called after the component has been rendered into the page
}

componentWillReceiveProps(nextProps){
  // Called when the props provided to the component are changed
}

componentWillUpdate(nextProps, nextState){
  // Called when the props and/or state change
}

componentWillUnmount(){
  // Called when the component is removed
}

updateSearch(){
  this.search(this.refs.query.value);
}

render(){
  var products = _.map(this.state.products, (products) => {
    return <li>{products}</li>;
  });
  return <div>
    <input ref="query" onChange={ (e) => { this.updateSearch(); } } type="text" />
    <ul>{products}</ul>
  </div>;
}

search(query = "stan smith"){
  var url = `https://www.adidas.co.uk/api/suggestions/Stans%20Smith`;
  Request.get(url).then((response) => {
    this.setState({
      products: response.body.Search,
      total: response.body.totalResults
    });
  });
}

}

export { Home as default };
