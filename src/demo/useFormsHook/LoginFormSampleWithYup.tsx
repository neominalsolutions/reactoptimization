import axios from 'axios';
import React, { useEffect } from 'react';
import { SetupInterceptors } from '../axiosInteceptors/axiosSetup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { LoginFormState, loginSchema } from './LoginSchema';

// type LoginFormState = {
// 	username: string;
// 	password: string;
// };

type LoginProps = {
	formData?: LoginFormState;
};

function LoginFormSampleWithYup(props: LoginProps) {
	console.log('props', props);

	const client = SetupInterceptors(
		axios.create({
			baseURL: 'https://reqres.in/api/',
		})
	);

	const {
		handleSubmit,
		register,
		formState: { errors, isValid, isSubmitted },
	} = useForm<LoginFormState>({
		defaultValues: {
			username: 'eve.holt@reqres.in', // senkron olarak propstan geçen değerleri forma işlerken burayı kullanım
			password: 'cityslicka',
		},
		resolver: yupResolver(loginSchema),
	});

	const onFormSubmit = async (formData: LoginFormState) => {
		console.log('formData', formData);
		await client.post('login', formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<input {...register('username')} />
				<span>{errors.username?.message}</span>
				<br></br>
				<input {...register('password')} />
				<br></br>
				<span>{errors.password?.message}</span>
				<br></br>
				<input
					disabled={!isValid && isSubmitted}
					type="submit"
					value="Oturum Aç"
				/>
			</form>
		</div>
	);
}

export default LoginFormSampleWithYup;
