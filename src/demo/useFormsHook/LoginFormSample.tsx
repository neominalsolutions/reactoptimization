import axios from 'axios';
import React, { useEffect } from 'react';
import { SetupInterceptors } from '../axiosInteceptors/axiosSetup';
import { useForm } from 'react-hook-form';

type LoginFormState = {
	username: string;
	password: string;
};

type LoginProps = {
	formData?: LoginFormState;
};

function LoginFormSample(props: LoginProps) {
	console.log('props', props);

	const client = SetupInterceptors(
		axios.create({
			baseURL: 'https://reqres.in/api/',
		})
	);

	const {
		handleSubmit,
		register,
		watch,
		setValue,
		getValues,
		reset,
		formState: { errors, isDirty, isValid, isSubmitted },
	} = useForm<LoginFormState>({
		defaultValues: {
			username: props.formData?.username, // senkron olarak propstan geçen değerleri forma işlerken burayı kullanım
			password: props.formData?.password,
		},
	});

	const onFormSubmit = (formData: LoginFormState) => {
		console.log('formData', formData);
	};

	const username = watch('username');
	console.log('username', username); // form state takibi

	console.log('errors', errors);

	useEffect(() => {
		setValue('username', 'ali');
		// asenkron formda veri set etme işlemlerinde burayı kullanılalım.
	}, []);

	return (
		<div>
			FormDirty : {isDirty ? 'Formda Bir işlem Yapıldı' : 'İşlem Yapılmadı'}
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<input
					{...register('username', {
						required: { value: true, message: 'username boş geçilemez' },
						minLength: { value: 8, message: 'hata' },
					})}
				/>
				<span>{errors.username?.message}</span>
				<br></br>
				<input
					{...register('password', {
						maxLength: { value: 8, message: '8 karakterdan az girilemez' },
					})}
					// {...register('password', {
					// 	required: { value: true, message: 'Parola boş geçilemez' },
					// })}
				/>
				<br></br>
				<span>{errors.password?.message}</span>
				<br></br>
				<input
					disabled={!isValid && isSubmitted}
					type="submit"
					value="Oturum Aç"
				/>
				<button onClick={() => reset()}>Reset</button>
				<button
					onClick={() => {
						const username = getValues('username');
						console.log('username', username);
					}}
				>
					Get Value
				</button>
			</form>
			{/* <button
				onClick={async () => {
					await client.post('login', {
						email: 'eve.holt@reqres.in',
						password: 'cityslicka',
					});
				}}
			>
				Oturum Aç
			</button> */}
		</div>
	);
}

export default LoginFormSample;
