import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SetupInterceptors } from '../axiosInteceptors/axiosSetup';

interface NetworkState {
	isError: boolean;
	error?: any;
	loading: boolean;
	data?: any;
}

// bu custom Hook asenkton programa modeli ile çalıştığı için datanın component içinde undefined olarak gelmemesini garanti etmez.
// 2000ms default timeout
function UseNetwork(url: string, timeOut: number = 2000) {
	const client = SetupInterceptors(
		axios.create({
			baseURL: 'https://jsonplaceholder.typicode.com/',
		})
	);

	const [state, setState] = useState<NetworkState>({
		isError: false,
		loading: true,
	});
	// const [data, setData] = useState<any[] | any | undefined>();
	// const [loading, setLoading] = useState<boolean>(true);
	// const [error, setError] = useState<any>();
	// const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		// kullancağım data üzerinde async bir işlem varsa
		// useEffect içerisinde bu state tanımı halletmeliyiz

		setTimeout(() => {
			client
				.get(url)
				.then((_data) => {
					state.loading = false;
					state.data = _data as any;
					setState({ ...state }); // tek state tetikledi.
				})
				.catch((err: any) => {
					console.log('error', err);
					state.loading = false;
					state.isError = true;
					state.error = err;
					setState({ ...state });
					// setLoading(false);
					// setError(err);
					// setIsError(true);
				});
		}, timeOut);
	}, []);

	return {
		data: state.data,
		loading: state.loading,
		error: state.error,
		isError: state.isError,
	}; // data asenktron olarak componente yansır.

	// return [state.data,state.data,state.loading,state.error,state.isError];
}

export default UseNetwork;
