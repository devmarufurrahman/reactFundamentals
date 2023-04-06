import React from "react";
import Comp2 from "./Comp2";
import { UserProvider } from "../../context/userContext";

const Comp1 = () => {
	const userName = "Masud";
	return (
		<div>
			<UserProvider value={userName}>
				<Comp2 />
			</UserProvider>
		</div>
	);
};

export default Comp1;
