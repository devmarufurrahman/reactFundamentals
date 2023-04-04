import React, { Component } from "react";

export default class Events extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goals: 0,
		};

		// this.makeGoalHandler = this.makeGoalHandler.bind(this);
	}

	makeGoalHandler = () => {
		this.setState({
			goals: this.state.goals + 1,
		});
	};
	render() {
		return (
			<div>
				<h1>Goals: {this.state.goals}</h1>
				{/* <button onClick={this.makeGoalHandler.bind(this)}>
					Make Goal bind
				</button>
				<button onClick={() => this.makeGoalHandler()}>
					Make Goal inline arrow
				</button> */}
				<button onClick={this.makeGoalHandler}>
					Make Goal bind in arrow fn
				</button>
			</div>
		);
	}
}
