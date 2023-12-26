import React, { useMemo, useState } from 'react';

// burada localstorage senkron okuma yazma yapılabilen bir yapı olması sebebi ile localstorage değer okumak için state yapısı kullanmaya gerek yok. bu durumda değer localstorage key olarak tanımlı ise value almayı ganrati eder.
function UseLocalStorage(key: string) {
	// const [value, setValue] = useState<string | undefined>();

	// key değişene kadar memoisation yap.
	const value = useMemo(() => {
		console.log('useLocalStorage');
		// const _value = localStorage.getItem(key);
		// if (_value) {
		// 	setValue(_value);
		// }
		return localStorage.getItem(key);
	}, [key]);

	return [value];
}

export default UseLocalStorage;
