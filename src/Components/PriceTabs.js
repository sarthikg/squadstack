import React, { Component } from 'react';
import prices from '../prices';
import './PriceTabs.css';

class PriceTabs extends Component {

	// Fetching all the unique price categories
	fetchCategories = () => {
		let uniquePrices = [];
		for (let i = 0; i < prices.length; i++) {
			if (!uniquePrices.includes(prices[i]['ahpp'])) {
				uniquePrices.push(prices[i]['ahpp']);
			}
		}
		return uniquePrices;
	} 

	// Handing change of a price category
	handleClick = (evt) => {
		localStorage.setItem('priceTab', evt.target.id);
		this.props.changePriceTab(evt.target.id)
	};

	render() {
		return (
			<div className="PriceTabs" onClick={this.handleClick}>
				{this.fetchCategories().map((price, index) => (
					<div
						key={index}
						id={price}
						className={`PriceTabs-Tab ${price === this.props.priceTab ? 'Active' : ''}`}
					>
						{price}
					</div>
				))}
			</div>
		);
	}
}

export default PriceTabs;
