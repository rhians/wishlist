import React, { Component } from 'react';
import '../styling/AddProduct.css';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { productName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }
  handleUpdate(event) {
    this.setState({ productName: event.target.value });
  }
    addProduct() {
      this.props.addProduct(this.state.productName);
      this.setState({ productName: '' });
    }

    render() {
      return (
        <div className="AddProduct">
          <input
            type="text"
            onChange={this.handleUpdate}
            value={this.state.productName}
          />
          &nbsp;&nbsp;
          <button onClick={this.addProduct}>Search</button>
        </div>
      );
    }
  }


export default AddProduct;
