import React, { Component } from "react";

export default class Welcome extends Component {
	constructor(props) {
		super(props);

		this.state = {
			place: "playground....",
		};
	}

	placeChangingHandler() {
		this.setState({
			place: "home....",
		});
	}
	render() {
		return (
			<div>
				<h1>Welcome to our {this.state.place}</h1>
				<button onClick={() => this.placeChangingHandler()}>Go to home</button>
			</div>
		);
	}
}
