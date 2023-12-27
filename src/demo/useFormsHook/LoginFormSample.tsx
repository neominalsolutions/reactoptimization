import axios from 'axios';
import React from 'react';
import { SetupInterceptors } from '../axiosInteceptors/axiosSetup';

function LoginFormSample() {
	const client = SetupInterceptors(
		axios.create({
			baseURL: 'https://reqres.in/api/',
		})
	);

	return (
		<div>
			<button
				onClick={async () => {
					await client.post('login', {
						email: 'eve.holt@reqres.in',
						password: 'cityslicka',
					});
				}}
			>
				Oturum Aç
			</button>
		</div>
	);
}

export default LoginFormSample;
