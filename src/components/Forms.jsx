import React, { Component } from "react";

export default class Forms extends Component {
	state = {
		name: "",
		country: "",
		bio: "",
		birthDay: "",
		gender: "",
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};
	render() {
		const { name, country, bio, birthDay } = this.state;
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "30%",
					gap: "10px",
				}}>
				<h1>Forms</h1>
				<input
					type="text"
					name="name"
					placeholder="Enter your name"
					value={name}
					onChange={this.handleChange}
				/>
				<select name="country" value={country} onChange={this.handleChange}>
					<option>Select Country</option>
					<option value="Bangladesh">Bangladesh</option>
					<option value="India">India</option>
					<option value="Pakistan">Pakistan</option>
					<option value="China">China</option>
				</select>
				<div>
					<input
						type="radio"
						name="gender"
						value={"Male"}
						onChange={this.handleChange}
					/>
					Male
					<input
						type="radio"
						name="gender"
						value={"Female"}
						onChange={this.handleChange}
					/>
					Female
					<input
						type="radio"
						name="gender"
						value={"Others"}
						onChange={this.handleChange}
					/>
					others
				</div>
				<textarea
					name="bio"
					placeholder="about your self"
					value={bio}
					onChange={this.handleChange}></textarea>
				<input
					type="date"
					name="birthDay"
					value={birthDay}
					onChange={this.handleChange}
				/>

				<button onClick={() => console.log(this.state)}>Show Data</button>
			</div>
		);
	}
}
