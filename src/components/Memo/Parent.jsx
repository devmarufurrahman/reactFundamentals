import React, { Component } from "react";
import Memo from "./Memo";

export default class Parent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: "Maruf",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				firstName: "Noman",
			});
		}, 1000);
	}
	render() {
		console.log("Parent");
		return (
			<div>
				<Memo firstName={this.state.firstName} />
			</div>
		);
	}
}
