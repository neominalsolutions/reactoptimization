import React, { useEffect, useRef, useState } from 'react';

// global değişken tanımı spa uygulama olduğundan dolayı tarayıcı refleshlene kadar değerini korur.uygulama genelinde bir global değişken haline gelir.
// bu davranış sebebi ile spa uygulamalarda verilen merkezi olarak global değişken olarak tutulduğu mekanizmalar ortaya çıktı (Context API, Redux)
// let renderCountVariable: number = 0; // normal değişken

function UseRefSample() {
	// her bir render alındığında componentin kaç adet render altığını tutan değişkenimiz
	// render sonrası değişken değerleri sıfılanacağı için bu değişken değerlerini memoize etmek.
	// useRef render tetiklemez ve aynı zamanda senkron ifadelerin render sürecinde kaybolmaması için performans amaçlı tercih edilir.
	const renderCount = useRef<number>(0);
	const [input, setInput] = useState<string>('');
	const inputOld = useRef<string>('');
	console.log('...rendering');
	const inputElementRef = useRef<HTMLInputElement>(null);
	// local olarak function içine tanımladığı takdirde ise her renderda sıfırlanır.
	// ozaman her render durumunda değerini koruyan componentten ayrılınca ise sıfırlanan bir değişken tanımı yapmam gerekirse useRef yardımıma koşuyor.

	let renderCountVariable: number = 0;

	useEffect(() => {
		renderCount.current = renderCount.current + 1;
		renderCountVariable++;
		console.log('renderCount', renderCount);
		console.log('renderCountVariable', renderCountVariable);
	}, [input]);

	return (
		<div>
			Render Count: {renderCount.current}
			<br></br>
			Render Count Variable: {renderCountVariable}
			<p>New Value :{input}</p>
			<p>Old Value: {inputOld.current}</p>
			<hr></hr>
			<input
				ref={inputElementRef}
				value={input}
				onChange={(e: any) => {
					inputOld.current = input; // old value
					setInput(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setInput('');
				}}
			>
				Clear With State
			</button>
			<button
				onClick={() => {
					// document.getElementById() gerçek domdan elementi yakalıyıp value temizledik.
					// bu sebeple virtual dom üzerinde bir müdehale etmediğimizden render tetiklenmedi.
					if (inputElementRef.current) {
						inputElementRef.current.value = '';
						inputElementRef.current.focus();
						inputElementRef.current.style.backgroundColor = 'blue';
						inputElementRef.current.style.color = 'white'; // repaint, reflow işlemine tabi tutmadan elementin real domdaki referansını güncelledik.
						// inputElementRef.current.value = '15';
					}
				}}
			>
				Clear With UseRef
			</button>
		</div>
	);
}

export default UseRefSample;
