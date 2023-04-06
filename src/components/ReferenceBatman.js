import React, { Component } from "react";

export default class ReferenceBatman extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Maruf",
		};
		this.batmanRef = React.createRef();
		this.SupermanRef = React.createRef();
	}

	colorChange() {
		console.log(this.batmanRef.current);
		this.batmanRef.current.style.color = "red";
	}
	fontChange() {
		console.log(this.SupermanRef.current);
		this.SupermanRef.current.style.fontSize = "35px";
	}
	render() {
		return (
			<div>
				<h1 ref={this.batmanRef}>Batman</h1>
				<button onClick={() => this.colorChange()}>Color change</button>
				<h1 ref={this.SupermanRef}>Superman</h1>
				<button onClick={() => this.fontChange()}>Color change</button>
			</div>
		);
	}
}
