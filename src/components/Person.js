import React from "react";
const Persons = [
	{
		id: 1,
		name: "Noman",
		age: 22,
		skill: "vue",
	},
	{
		id: 2,
		name: "Maruf",
		age: 21,
		skill: "react",
	},
	{
		id: 3,
		name: "Alamin",
		age: 20,
		skill: "Vanila",
	},
	{
		id: 4,
		name: "Rohan",
		age: 23,
		skill: "Angular",
	},
];

const Person = () => {
	return (
		<div>
			{Persons.map((person, index) => (
				<h1 key={Math.random()}>
					I am {person.name}. Age: {person.age}. I am expert in {person.skill}
				</h1>
			))}
		</div>
	);
};

export default Person;
