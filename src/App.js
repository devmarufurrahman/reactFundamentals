import Counter from "./components/Counter";
import Football from "./components/Football";
import Hello from "./components/Hello";
import HelloAgain from "./components/HelloAgain";
import HelloProps from "./components/HelloProps";

function App() {
	return (
		<div>
			<HelloProps name="Maruf" birthYear="2002" />
			<HelloProps name="Noman" birthYear="2001" />
			<HelloProps name="Masud" birthYear="1989" />
			<HelloProps name="Alamin" birthYear="2003" />
			{/* <Counter /> */}
			{/* <Hello />
			<HelloAgain /> */}
			{/* <Football /> */}
		</div>
	);
}

export default App;
