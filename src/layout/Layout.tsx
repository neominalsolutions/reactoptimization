import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div style={{ padding: '10px' }}>
			<nav>
				<Link to="/useState">useState</Link>{' '}
				<Link to="/useEffect">useEffect</Link>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
