import React, { useEffect, useMemo, useState } from 'react';

function UseMemoSample() {
	const [number, setNumber] = useState<number>(5);
	const [random, setRandom] = useState<number>(10);
	// const [value, setValue] = useState<number>(0);

	// useMemo hesaplanmış değerlerin memoisation işlemi için kullanılan bir tekniktir.
	const factorielCalculation = (num: number) => {
		console.log('...calculation');
		let result = 1;

		for (let index = 2; index <= num; index++) {
			console.log('...for');
			result *= index;
		}
		return result;
	};
	// let result = 0;

	// useEffect(() => {
	// 	setValue(factorielCalculation(number));
	// }, [number]);

	// sadece number state değişiminde factorielCalculation hesaplayacaksın.
	const result = useMemo(() => factorielCalculation(number), [number]);

	return (
		<div>
			{/* <p>Faktoriel: {value}</p> */}
			<p>Faktoriel: {result}</p>
			<br></br>
			<input
				onChange={(e: any) => {
					setNumber(Number(e.target.value));
				}}
			/>
			<br></br>
			<p>random: {random}</p>
			<button
				onClick={() => {
					setRandom(Math.random() * 100);
				}}
			>
				Random State
			</button>
		</div>
	);
}

export default UseMemoSample;
