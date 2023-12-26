//rfce

import { Component, useState } from 'react';

// import React, { useState } from 'react';

// import React, { Component } from 'react';

type PropsSample = {
	counter?: number;
};

type CounterState = {
	counter: number;
};

// export default class useStateSample extends Component<
// 	PropsSample,
// 	CounterState
// > {
// 	state: CounterState = { counter: 0 };

// 	constructor(props: PropsSample) {
// 		super(props);
// 		this.state.counter = props.counter || 1;
// 		this.increase = this.increase.bind(this);
// 	}
// 	// method;
// 	increase() {
// 		this.setState({ counter: this.state.counter + 1 }, () => {
// 			console.log('state güncellendiği an');
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				{this.state.counter}

// 				<button onClick={this.increase}>(+)</button>
// 			</div>
// 		);
// 	}
// }

interface Person {
	firstName: string; // required
	lastName: string;
	address?: Address; // optional
	friends: Friend[];
}

interface Address {
	city: string;
	country: string;
}

interface Friend {
	fullName: string;
	age: number;
}

function useStateSample() {
	const [counter, setCounter] = useState<number>(0); // value type state
	const [person, setPerson] = useState<Person>(); // ref type state
	// const [friends2, setFriends2] = useState<Friend[]>([]);
	const [friends, setFriends] = useState<Person['friends']>([]);
	const [address, setAddress] = useState<Person['address']>({
		city: 'Ankara',
		country: 'TR',
	});

	const increase = () => {
		setCounter(counter + 1);
	};

	// arrow function
	const onChangePerson = () => {
		setPerson({
			firstName: 'ali',
			lastName: 'can',
			friends: [{ fullName: 'can', age: 21 }],
		});

		setFriends([
			{
				fullName: 'hakan',
				age: 45,
			},
			{ fullName: 'mustafa', age: 34 },
		]);

		setAddress({ city: 'istanbul', country: 'TR' });
	};

	return (
		<div>
			<p>Sayac: {counter}</p>
			<button onClick={increase}>(+)</button>
			<p>
				{person?.firstName} {person?.lastName}
			</p>
			<button onClick={onChangePerson}>Change Person</button>
		</div>
	);
}

export default useStateSample;
