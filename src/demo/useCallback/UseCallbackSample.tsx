import React, { useCallback, useState } from 'react';
import NameList from './NameList';
import UseNetwork from '../customHook/UseNetwork';
import UseLocalStorage from '../customHook/UseLocalStorage';

// Parent Child component ilişkisinde child componente ait action propsların memoisation edilmesi ile ilgili bir teknik.

function UseCallbackSample() {
	// js de function and array referance type olarak ramde tutulur.

	//const [data] = UseNetwork('https://jsonplaceholder.typicode.com/todos');
	const [value] = UseLocalStorage('access_token'); // local storage key value pair olarak tutulan bir değerin okunması için bir hook tanımı yaptık.
	const [value2] = UseLocalStorage('access_token'); // useMemo kullandığımzdan dolayı access_token memoization, memoisation yapılmış olarka gelir.
	const postResult = UseNetwork('https://jsonplaceholder.typicode.com/posts');

	console.log('value', value, value2);

	console.log('response', postResult.data);
	console.log('isError', postResult.isError);

	const [names, setNames] = useState<string[]>([
		'ali',
		'canan',
		'hakan',
		'mustafa',
	]);
	const [number, setNumber] = useState<number>(0);

	// parent component child componentin action propslarını dinlerken useCallback kullanırsak bu durumda gereksiz yere child componentin render alınmasının önüne geçtik.

	return (
		<div>
			<h1>Parent Component</h1>
			<NameList
				names={names}
				onDelete={useCallback((index: number) => {
					console.log('silinecek item', index);
				}, [])}
			/>
			<hr></hr>
			<button
				onClick={() => {
					setNumber(number - 1);
				}}
			>
				Set Number
			</button>
			<hr></hr>
			<button
				onClick={() => {
					names.push('jale');
					// setNames(names); // dizinin referans değeri değişmediğin virtual dom tetilklenmiyor.
					// const newNames = names.splice(0, names.length); // array splice ile var olan dizinin referans tekrar alınır
					// setNames(newNames);
					setNames([...names]); // 2.yöntem daha kolay bir yöntem olan spread operatoru buda dizi ve nesne referanslarının koparılmasını sağlar. referance type değerlerde state set ederken spread operatörü kullanılım.
					// SetObject({... obj}); // object referance type spread operator kullanımı
				}}
			>
				Add Name
			</button>
		</div>
	);
}

export default UseCallbackSample;
