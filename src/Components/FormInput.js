import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
	// Handling the change in checkbox events
	handleCheck = (evt) => {
		this.props.handleChange(evt, this.props.name);
	};

	// Rendering input type select along with the provided options
	generateSelect = () => {
		return (
			<select
				name={this.props.name}
				onChange={this.props.handleChange}
				className={`FormInput-Box`}
				placeholder={this.props.placeholder}
				required
			>
				<option disabled selected>
					{this.props.placeholder}
				</option>
				{this.props.options.map((option, index) => (
					<option key={index} value={option.toLowerCase()}>
						{option}
					</option>
				))}
			</select>
		);
	};

	// Rendering input type checkbox along with the provided options
	generateCheckBox = () => {
		return (
			<div className="FormInput-Checkboxes">
				{this.props.options.map((option, index) => {
					return (
						<span className="Form-Input-Checkboxes-Check" key={index}>
							<input
								type="checkbox"
								name={option}
								value={option}
								key={index}
								onClick={this.handleCheck}
							/>
							<label className="Form-Input-Checkboxes-Check-Label" htmlFor={option}>
								{option}
							</label>
						</span>
					);
				})}
			</div>
		);
	};

	// Rendering other input types including text, email, number
	generateGeneric = () => {
		return (
			<input
				name={this.props.name}
				type={this.props.type}
				pattern={this.props.pattern}
				onChange={this.props.handleChange}
				className={`FormInput-Box`}
				placeholder={this.props.placeholder}
				required
			/>
		);
	};

	render() {
		return (
			<div
				className={`FormInput ${this.props.space ? this.props.space : ''} ${this.props.marginRight
					? 'Spaced'
					: ''} `}
			>
				<div className="FormInput-Title">{this.props.title}</div>
				{this.props.type === 'select' ? (
					this.generateSelect()
				) : this.props.type === 'checkbox' ? (
					this.generateCheckBox()
				) : (
					this.generateGeneric()
				)}
			</div>
		);
	}
}

export default FormInput;
