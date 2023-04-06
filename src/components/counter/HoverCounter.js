import React, { Component } from "react";
import CounterWrapper from "../../utls/counterWrapper";

class HoverCounter extends Component {
	render() {
		return (
			<>
				<h1>Count: {this.props.count}</h1>
				<button onMouseOver={this.props.incrementHandler}>Increment</button>
			</>
		);
	}
}

export default CounterWrapper(HoverCounter);
