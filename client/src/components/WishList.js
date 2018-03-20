///this one also works fine! :)

import React, {Component} from 'react';
import '../styling/WishList.css';

class WishList extends Component {

	constructor(props) {
		super(props);
		this.state = { product: 'Hello'};
		this.addme = this.addme.bind(this);
		this.removeProduct = this.removeProduct.bind(this);
	}

	addme() {
		this.setState({ product: 'Yes please: ' })
		}

	removeProduct() {
		this.props.removeProduct(this.props.name);
	}

	render() {
		return (
			<div className="WishList">
			{this.state.product} {this.props.name}!
		<br/>
		<button className="addme" onClick={this.addme}>Add me to wishlist</button>
		<br />
		<button className="remove" onClick={this.removeProduct}>Remove Me!</button>
		</div>);


	}
}

export default WishList;
