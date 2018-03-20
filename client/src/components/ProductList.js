///this one works fine!

import React, { Component } from 'react';
import '../styling/ProductList.css';
import AddProduct from './AddProduct.js';
import WishList from './WishList.js';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: []};
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }


  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/stansmith');
    const body = await response.json();
    console.log('Api replied')

    console.log(body)
    console.log(typeof(body))

    // var array = Object.values(body)
    // console.log(array)

    const test = ['Boost', 'Stan Smith']

    if (response.status !== 200) throw Error(body.message);
      this.setState( {
        products : test
      })
      // return body;
  };


  renderProducts() {
    return this.state.products.map(name => (
      <WishList
        key={name}
        name={name}
        removeProduct={this.removeProduct}

      />

    ))
  }

  addProduct(newName) {
    this.setState({ products: [...this.state.products, newName] });
  }
  removeProduct(removeName) {
    const filteredProducts = this.state.products.filter(name => {
      return name !== removeName;
    });
    this.setState({ products: filteredProducts });
  }
  render() {
    return (
      <div className="ProductList">
        <AddProduct addProduct={this.addProduct} />
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
