import React, { Component } from 'react';
import './PlanTab.css';

class PlanTab extends Component {


	// Handling selection of plan by the user (Checking if the selected plan is for enterprise or not)
	handlePlanChange = () => {
		if(this.props.plan) {
			this.props.changePlan(this.props.plan);
		} else {
			this.props.changePlan({})
		}
		
	};

	render() {
		return (
			<div className="PlanTab">
				<div className={`PlanTab-Popular ${this.props.isPopular ? 'Visible' : ''}`}>Most Popular!</div>
				<div className="PlanTab-Details">
					<div className="PlanTab-Details-Title">
						{this.props.isEnterprise ? 'Enterprise' : `Qualified ${this.props.plan.qlpm}`}
					</div>
					<div className={`PlanTab-Details-More ${this.props.isPopular || this.props.isEnterprise ? "Highlighted" : ""}`}>
						{this.props.isEnterprise ? "Want more than 80 qualified leads each month?" : 
						<React.Fragment>
						<div className="PlanTab-Details-More-PricePerLead">
							<div className="PlanTab-Details-More-PricePerLead-Price"> {`$${this.props.plan.pplt}`}</div>
							<div className="PlanTab-Details-More-PricePerLead-Text">Per Qualified lead</div>
						</div>
						<div className="PlanTab-Details-More-LeadsPerMonth">
							<div className="PlanTab-Details-More-LeadsPerMonth-Text">Qualified Leads Per Month</div>
							<div className="PlanTab-Details-More-LeadsPerMonth-Price"> {`${this.props.plan.qlpm}`}</div>
						</div>
						<div className="PlanTab-Details-More-PlatformFees">
							<div className="PlanTab-Details-More-PlatformFees-Text">Platform Fee Per Month</div>
							<div className="PlanTab-Details-More-PlatformFees-Price"> {`$${this.props.plan.tpp}`}</div>
						</div>
						<div className="PlanTab-Details-TotalPrice">{`$${(this.props.plan.qlpm * this.props.plan.pplt +
							this.props.plan.tpp)
							.toString()
							.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/mo`}
						</div>
						</React.Fragment>
						}
					</div>
					<button
						className={`PlanTab-Details-Trial ${this.props.isPopular ? 'Popular' : ''}`}
						onClick={this.handlePlanChange}
					>
						{this.props.isEnterprise ? "Get in Touch" : "Start Your Trial"}
					</button>
				</div>
			</div>
		);
	}
}

export default PlanTab;
