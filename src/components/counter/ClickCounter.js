import React, { Component } from "react";
import CounterWrapper from "../../utls/counterWrapper";

class ClickCounter extends Component {
	render() {
		return (
			<>
				<h1>Count: {this.props.count}</h1>
				<button onClick={this.props.incrementHandler}>Increment</button>
			</>
		);
	}
}

export default CounterWrapper(ClickCounter, 5);
