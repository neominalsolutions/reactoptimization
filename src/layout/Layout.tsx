import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div style={{ padding: '10px' }}>
			<nav>
				<Link to="/useState">useState</Link>{' '}
				<Link to="/useEffect">useEffect</Link>{' '}
				<Link to="/reactMemo">React Memo</Link>{' '}
				<Link to="/useMemo">Use Memo</Link>{' '}
				<Link to="/useCallback">Use Callback</Link>{' '}
				<Link to="/customHook">Custom Hook</Link>{' '}
				<Link to="/useRef">Use Ref</Link> {'  '}
				<Link to="/useReducer">Use Redecur</Link> {'  '}
				<Link to="/debouncing">Debouncing Sample</Link> {'  '}
				<Link to="/login">Login Sample</Link> {'  '}
				<Link to="/useContext">Use Context Sample</Link> {'  '}
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
