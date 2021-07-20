import React, { Component } from 'react';
import PlanTab from './PlanTab';
import prices from '../prices';

import './PlanContainer.css';

class PlanContainer extends Component {
	// Fetching plans that match the current price range
	fetchPlans = () => {
		let plans = prices.filter((plan) => plan['ahpp'] === this.props.priceTab);
		return plans;
	};

	render() {
		return (
			<div className="PlanContainer">
				{/* Rendering PlanCards for all the available plans in the selected price range, and also one for 80+ qualified leads per month */}
				{this.fetchPlans().map((plan, index) => (
					<PlanTab key={index} plan={plan} changePlan={this.props.changePlan} isPopular={index === 1} />
				))}
				<PlanTab key={4} isEnterprise changePlan={this.props.changePlan} />
			</div>
		);
	}
}

export default PlanContainer;
