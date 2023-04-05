import React from "react";

const Memo = ({ firstName }) => {
	console.log("Memo");
	return (
		<div>
			<h1>{firstName}</h1>
		</div>
	);
};

export default React.memo(Memo);
