import React from 'react';
import UseNetwork from './UseNetwork';

function customHookSample() {
	const { data, loading, error, isError } = UseNetwork(
		'https://jsonplaceholder.typicode.com/posts',
		3000
	);

	if (isError) return <>Hata oluştu</>;

	if (loading) return <>... loading</>;

	// loading false ise
	return <div>Çekilen Veri Adeti : {data.length}</div>;
}

export default customHookSample;
