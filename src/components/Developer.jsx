import React from "react";

const Developer = () => {
	const isDeveloper = false;
	return (
		<div>
			{/* {isDeveloper ? (
				<h1>He is a Software Developer</h1>
			) : (
				<h1>He is a Data Scientist</h1>
			)} */}

			{/* <h1>
				{isDeveloper ? "He is a Software Developer" : "He is not a Developer"}
			</h1> */}

			<h1>He is {isDeveloper ? "" : "not"} a Developer.</h1>
		</div>
	);
};

export default Developer;
