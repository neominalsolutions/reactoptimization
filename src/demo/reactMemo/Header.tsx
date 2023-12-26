import { memo } from 'react';

type HeaderProps = {
	title: string;
};

// memoisation component içindeki props değeri değişene kadar tekrar render almaz.
function Header({ title }: HeaderProps) {
	console.log('...child rendering');

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
	// 		console.log('data', data);
	// 	});
	// });

	return <>{title}</>;
}

export default memo(Header);
