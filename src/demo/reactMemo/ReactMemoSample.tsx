import { useState } from 'react';
import Header from './Header';

// Memoisation kavramı virtual dom ile çalışlan sistemlerde gereksiz render ortadan kaldırmak için kullanılan bir optimizasyon tekniğidir.

function ReactMemoSample() {
	const [counter, setCounter] = useState<number>(0);
	console.log('...parent rendering');
	const [title, setTitle] = useState<string>('Header Component');

	return (
		<div>
			<p>Sayac : {counter}</p>
			<Header title={title} />
			<br></br>
			<button
				onClick={() => {
					setCounter(counter + 1);
				}}
			>
				(+)
			</button>
			<button
				onClick={() => {
					const _title = window.prompt('Title Ne olsun') as string;
					setTitle(_title);
				}}
			>
				Title
			</button>
		</div>
	);
}

export default ReactMemoSample;
