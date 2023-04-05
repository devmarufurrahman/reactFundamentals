import React from "react";

const StoreChild = ({ handleGrabFruit }) => {
	return (
		<div>
			<button onClick={() => handleGrabFruit("apple")}>Grab fruit</button>
		</div>
	);
};

export default StoreChild;
