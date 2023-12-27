import {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

const onRequest = (config: InternalAxiosRequestConfig) => {
	// her request de buraya düşecek
	console.log('onRequest', config);
	// config.headers['Authorization']
	return config;
};

const onRequestError = (error: AxiosError) => {
	console.log('onRequestError', error);
	return Promise.reject(error);
};

const onResponse = (response: AxiosResponse) => {
	console.log('onResponse', response);
	return response;
};

const onResponseError = (error: AxiosError) => {
	console.log('onResponseError', error);
	return Promise.reject(error);
};

// axios.create({
//     baseURL:'www.a.com',
//     timeout:1000,
//     timeoutErrorMessage:'Timeout'
// })

export function SetupInterceptors(axiosInstance: AxiosInstance) {
	console.log('axios instance', axiosInstance);
	axiosInstance.interceptors.request.use(onRequest, onRequestError);
	axiosInstance.interceptors.response.use(onResponse, onResponseError);

	return axiosInstance;
}
