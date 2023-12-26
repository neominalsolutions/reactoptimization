import React, { useEffect, useState } from 'react';

function useEffectSample() {
	const [random, setRandom] = useState<number | undefined>();

	useEffect(() => {
		// componentdidmount => componentin doma ilk basıldığı an
		// ilk load aşamasında componente veri çekme işlemleri burada yapılır
		console.log('useEffect Load');
		console.log('guncel state rdm', random);
	}, []); // [] herhangi bir state takio etmiyorum. sadece ilk açılışta çalışırım

	useEffect(() => {
		if (random !== undefined) {
			// 2.kullanım durumu state takibi
			console.log('random state değişimin yakalarız');
			// state değişimi sonrasında veri çekmek amaçlı kullanılabilir.
		}
	}, [random]); // [state] // random değişiminde tatiklenirim.

	return (
		<div>
			<p>Random : {random}</p>
			<button
				onClick={() => {
					const rdm = Math.random() * 100;
					setRandom(rdm);
				}}
			>
				Random
			</button>
		</div>
	);
}

export default useEffectSample;
