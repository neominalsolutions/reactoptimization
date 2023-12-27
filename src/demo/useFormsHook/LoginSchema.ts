import * as yup from 'yup';

export const loginSchema = yup.object({
	username: yup
		.string()
		.email('E-posta formatında giriniz')
		.required('username boş geçilemez'),
	password: yup
		.string()
		.trim()
		.min(8, 'Minimum 8 karakter')
		.required('Parola boş geçilemez'),
});

export type LoginFormState = yup.InferType<typeof loginSchema>;
