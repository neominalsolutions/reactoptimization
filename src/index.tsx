import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
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
		{/* 2.yöntem routing işlemlerini app Component üzerinden useRoutes hook ile yönetmek */}
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
