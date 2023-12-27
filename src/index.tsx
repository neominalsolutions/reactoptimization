import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import CartProvider from './demo/useContext/CartProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<CartProvider>
			{/* global olarak state yönetimi için React Context API özelliğini kullanarak state tüm uygulama geneline sarmalladık. */}
			{/* asenkron bir yükleme varsa bu durumda sesupense ile bu componentin doma yüklenişini yakalayıp hata durumuda fallback ile bir hata görüntüsü sağlayabiliriz. */}
			<Suspense fallback={<>Error Content Loading</>}>
				{/* 1.yöntem */}
				{/* <Routes>
			<Route
				path="/"
				element={
					<>
						<nav>
							<a href="about">About Page</a>
						</nav>
						<main>
							<Outlet />
						</main>
					</>
				}
			>
				<Route
					path="/about"
					element={
						<>
							<h1>About Page</h1>
						</>
					}
				></Route>
			</Route>
		</Routes> */}

				<App />
			</Suspense>
			{/* 2.yöntem routing işlemlerini app Component üzerinden useRoutes hook ile yönetmek */}
		</CartProvider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
