import React from "react";

const HelloProps = ({ name, birthYear }) => {
	return (
		<div>
			<h1>
				HELLO {name}, Age: {new Date().getFullYear() - birthYear}
			</h1>
		</div>
	);
};

export default HelloProps;
