import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useRoutes } from 'react-router-dom';
import Layout from './layout/Layout';
import useStateSample from './demo/useState/useStateSample';
import useEffectSample from './demo/useEffect/useEffectSample';

function App() {
	return useRoutes([
		{
			path: '/',
			Component: Layout,
			children: [
				{
					path: 'useState',
					Component: useStateSample,
				},
				{
					path: 'useEffect',
					Component: useEffectSample,
				},
			],
		},
	]);

	// return useRoutes([
	// 	{
	// 		path: '/',
	// 		element: (
	// 			<div style={{ padding: '10px' }}>
	// 				<nav>
	// 					<a href="/about">Hakkımızda</a>{' '}
	// 					{/* uygulama içi linklerde Link yapısını tercih ediyoruz. */}
	// 					<Link to="/about">Hakkımızda Link</Link>
	// 				</nav>
	// 				<main>
	// 					<Outlet />
	// 				</main>
	// 			</div>
	// 		),
	// 		children: [
	// 			{
	// 				path: 'about',
	// 				element: (
	// 					<>
	// 						<h1>About Page</h1>
	// 					</>
	// 				),
	// 			},
	// 		],
	// 	},
	// 	{
	// 		path: '/login',
	// 		element: <div style={{ padding: '10px' }}>Login Page</div>,
	// 	},
	// 	{
	// 		path: '/ik',
	// 		element: (
	// 			<div style={{ backgroundColor: 'GrayText' }}>
	// 				<h1>IK Home</h1>
	// 				<Outlet />
	// 			</div>
	// 		),
	// 		children: [
	// 			{
	// 				path: 'employees',
	// 				element: (
	// 					<>
	// 						<h1>Çalışanlarımız</h1>
	// 					</>
	// 				),
	// 			},
	// 		],
	// 	},
	// ]);
}

export default App;
