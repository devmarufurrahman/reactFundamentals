import React from "react";
import Comp4 from "./Comp4";
import { UserConsumer } from "../../context/userContext";

const Comp3 = () => {
	return (
		<div>
			<UserConsumer>
				{(user) => {
					return <h1>Hello! {user}</h1>;
				}}
			</UserConsumer>
			<Comp4 />
		</div>
	);
};

export default Comp3;
