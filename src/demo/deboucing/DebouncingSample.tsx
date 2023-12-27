import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from './debouncing';
import { SetupInterceptors } from '../axiosInteceptors/axiosSetup';

export interface ProductDto {
	ProductID: number;
	ProductName: string;
}

const axiosInstance = axios.create({
	timeout: 1000,
	baseURL: 'https://services.odata.org/northwind/northwind.svc',
	timeoutErrorMessage: 'ProductAPI erişim sağlanılmadı',
});

// Interceptor tanımı
// client HttpClient
const client = SetupInterceptors(axiosInstance);

function DebouncingSample() {
	const [searchText, setSearchText] = useState('ch');
	const [filteredData, setFilteredData] = useState<ProductDto[]>([]);
	const [number, setNumber] = useState<number>(0);

	const loadDataServerSide = async () => {
		// const data = // await axios.get(
		// 	`https://services.odata.org/northwind/northwind.svc/Products?$filter=substringof('${searchText}',ProductName)&$format=json`
		// ).data
		const data = (
			await client.get(
				`Products?$filter=substringof('${searchText}',ProductName)&$format=json`
			)
		).data;

		console.log('data', data.value);

		setFilteredData([...data.value]);
	};

	useEffect(() => {
		loadDataServerSide();
	}, [searchText]);

	// 500ms sonra OnSeacth Tetiklenmiş oluyor.
	const onSearch = (e: any) => {
		console.log('.... onSearch');
		setSearchText(e.target.value);
	};

	const debounceHandler = debounce(onSearch, 500);

	return (
		<div>
			<input onChange={debounceHandler} />
			<hr></hr>
			<ul>
				{filteredData.map((item: ProductDto) => {
					return <li key={item.ProductID}>{item.ProductName}</li>;
				})}
			</ul>
			<hr></hr>

			<p>Number: {number}</p>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}
			>
				Set Number
			</button>
		</div>
	);
}

export default DebouncingSample;
