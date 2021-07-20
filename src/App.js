import React, { Component } from 'react';

import PriceTabs from './Components/PriceTabs';
import PlanContainer from './Components/PlanContainer';
import Modal from './Components/Modal';
import Offline from './Components/Offline';

import './App.css';

class App extends Component {
	state = {
		isOnline: true,
		isOpen: false,
		priceTab: '$300K - $400K'
	};

	componentDidMount = () => {
		// Checking if the user is offline or online
		window.addEventListener('online', this.handleOnline);
		window.addEventListener('offline', this.handleOffline);

		// Accessing the price tab from local storage if present already
		let prevPage = localStorage.getItem('priceTab');
		if (prevPage !== null) {
			this.setState({ priceTab: prevPage });
		}
	};

	// Unmounting the event listeners
	componentWillUnmount = () => {
		window.removeEventListener('online');
		window.removeEventListener('offline');
	};

	// Handing Online and Offline Conditions
	handleOffline = () => {
		if (this.state.isOnline === true) {
			this.setState({ isOnline: false });
		}
	};

	handleOnline = () => {
		if (this.state.isOnline !== true) {
			this.setState({ isOnline: true });
		}
	};

	// Handling Modal State
	toggleModal = () => {
		this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
	};

	// Handing Price Tab Change
	changePriceTab = (priceTab) => {
		this.setState({ priceTab: priceTab });
	};

	// Handling Plan Change
	changePlan = (plan) => {
		this.setState({ plan });
		this.toggleModal();
	};

	render() {
		return this.state.isOnline ? (
			<div className="App">
				<PriceTabs changePriceTab={this.changePriceTab} priceTab={this.state.priceTab} />
				<PlanContainer priceTab={this.state.priceTab} changePlan={this.changePlan} />
				{this.state.isOpen ? <Modal toggleModal={this.toggleModal} plan={this.state.plan} /> : null}
			</div>
		) : (
			<Offline />
		);
	}
}

export default App;
