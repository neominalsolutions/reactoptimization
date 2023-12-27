import React from 'react';
import ProductList from './ProductList';
import UseNetwork from '../customHook/UseNetwork';
import { Link } from 'react-router-dom';

function UseContextSample() {
	const response = UseNetwork(
		'Products?$format=json',
		0,
		'https://services.odata.org/northwind/northwind.svc'
	);

	if (response.loading) return <>Yükleniyor</>;

	if (response.data) {
		return (
			<div style={{ padding: '10px' }}>
				<Link to="/cartSummary">Sepete Git</Link>
				<hr></hr>
				<ProductList items={response.data.data.value} />
			</div>
		);
	}

	return <></>;
}

export default UseContextSample;
