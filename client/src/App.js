import React, { Component } from 'react';
import WishList from './components/WishList.js';
import ProductList from './components/ProductList.js';
//import apitest from './apitest.js'; not sure my apitest file is correct - I followed a few tutorials on fetching API's and
//I used postman to check the JSON info, but I think i'm possibly not calling the API correctly, o rnot rendering it properly, i'm a bit lost!
//import logo from './ss.png';
//import Headercontent from './headercontent.js';

//trying to just add another component into the main app page and it doesn't render -
//not sure if it should be a little separate component here, or as part of const App below where I added in<headercontent />
//class Headercontent extends Component {
//  render() {
//    return(
  //<img src="{logo}" className="logo" alt="logo" />
//);}}

class App extends Component {
  state = {
    response: ''
  };

  

render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    )
}
};

export default App;
