import React, { Component } from "react";
import StoreChild from "./StoreChild";

export default class Store extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fruits: 25,
		};
	}

	handleGrabFruit = () => {
		this.setState({
			fruits: this.state.fruits - 1,
		});
	};
	render() {
		return (
			<div>
				<h1>Total fruits: {this.state.fruits}</h1>
				<StoreChild handleGrabFruit={this.handleGrabFruit} />
			</div>
		);
	}
}
