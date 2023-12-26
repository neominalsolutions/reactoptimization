import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, useRoutes } from 'react-router-dom';
// import Layout from './layout/Layout';

const Layout = React.lazy(() => import('./layout/Layout'));

// import useStateSample from './demo/useState/useStateSample';
// import useEffectSample from './demo/useEffect/useEffectSample';
// Suspense ve lazy sayesinde component / ile çağırılırken doma yükenir. böylelikle ilk yüklemedeki dosya boyutunu azaltmış oluruz. uygulama daha hızlı açılır. lazy loading tembel yükleme tekniği ismini veriyoruz.
// Aynı zamanda bu tekniğe code-splitting ismini veriyoruz.

const useEffectSample = React.lazy(
	() => import('./demo/useEffect/useEffectSample')
);
const useStateSample = React.lazy(
	() => import('./demo/useState/useStateSample')
);

function App() {
	// uygulamadaki bütün jsler bundle.js dosyası altında yüklenmiş oluyor. default davranış bu.

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
