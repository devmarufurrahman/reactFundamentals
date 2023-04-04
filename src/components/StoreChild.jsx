import React from "react";

const StoreChild = ({ handleGrabFruit }) => {
	return (
		<div>
			<button onClick={handleGrabFruit}>Grab fruit</button>
		</div>
	);
};

export default StoreChild;
