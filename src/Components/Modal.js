import React, { Component } from 'react';
import FormInput from './FormInput';
import './Modal.css';

class Modal extends Component {

	// Handling change of form inputs other than checkbox(addition to the state)
	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	// Handling change of state of checkboxes
	handleCheck = (evt, name) => {
		if (evt.target.checked === true) {
			this.setState((prevState) => {
				if (prevState[name]) {
					return { [name]: [ ...prevState[name], evt.target.name ] };
				} else {
					return { [name]: [ evt.target.name ] };
				}
			});
		} else {
			this.setState((prevState) => ({ [name]: prevState[name].filter((name) => name !== evt.target.name) }));
		}
	};

	// Handling form submission, and alerting back the provided input
	handleSubmit = (evt) => {
		evt.preventDefault();
		let user = this.state;
		this.props.toggleModal();
		let content_user = `---User Details--- \n\n User Name - ${user.name} \n User Email - ${user.email} \n User Contact - ${user.phone} \n Number of leads generated in a month - ${user.leadCount} \n Number of leads in CRM - ${user.leadCRMCount} \n CRM in use - ${user.CRMName
			? user.CRMName
			: 'anonymous'} \n Number of agents - ${user.agentCount} \n Biggest Lead Sources - ${user.leadSources
			? user.leadSources
			: 'anonymous'} \n How did you hear about us? - ${user.source ? user.source : 'anonymous'}`;
		alert(content_user);
	};

	render() {
		return (
			<div className="Modal">
				<div className="Modal-Card">
					<h2 className="Modal-Card-Title">Get Started with SquadVoice</h2>
					<hr />
					<div className="Modal-Card-Plan">
						<span className="Modal-Card-Plan-Text">Plan Selected:</span>
						<span className="Modal-Card-Plan-Selected">{`Qualified ${this.props.plan.qlpm
							? this.props.plan.qlpm
							: '> 80'}`}</span>
					</div>
					<form className="Modal-Card-Form" onSubmit={this.handleSubmit}>
						<FormInput title="Name" type="text" name="name" handleChange={this.handleChange} />
						<FormInput
							title="E-mail Address"
							type="email"
							name="email"
							space="half"
							marginRight
							handleChange={this.handleChange}
						/>
						<FormInput
							title="Phone No."
							type="tel"
							name="phone"
							space="half"
							pattern="[0-9]{10}"
							handleChange={this.handleChange}
						/>
						<FormInput
							title="Number of leads you generate in a month"
							type="number"
							name="leadCount"
							space="half"
							placeholder="-"
							marginRight
							handleChange={this.handleChange}
						/>
						<FormInput
							title="Total leads in your CRM"
							type="number"
							name="leadCRMCount"
							space="half"
							placeholder="-"
							handleChange={this.handleChange}
						/>
						<FormInput
							title="Which CRM do you use?"
							type="select"
							name="CRMName"
							space="half"
							options={[ 'Zoho', 'HubSpot', 'FreshSales', 'Salesforce', 'Zendesk' ]}
							placeholder="-"
							marginRight
							handleChange={this.handleChange}
						/>
						<FormInput
							title="No. of Agents"
							type="number"
							name="agentCount"
							space="half"
							placeholder="-"
							handleChange={this.handleChange}
						/>
						<FormInput
							title="What are your biggest lead sources?"
							type="checkbox"
							name="leadSources"
							options={[ 'Zillow', 'Realtor', 'Ylopo', 'Others' ]}
							handleChange={this.handleCheck}
						/>
						<FormInput
							title="How did you hear about us?"
							type="checkbox"
							name="source"
							options={[ 'Google', 'Facebook', 'Email', 'Friends', 'Real Closers' ]}
							handleChange={this.handleCheck}
						/>
						<button type="submit" className="Modal-Card-Form-Submit">
							Submit
						</button>
					</form>
					<img
						className="Modal-Card-Close"
						src={process.env.PUBLIC_URL + '/close.png'}
						alt="Close"
						onClick={this.props.toggleModal}
					/>
				</div>
			</div>
		);
	}
}

export default Modal;
