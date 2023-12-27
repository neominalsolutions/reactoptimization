import { createContext, useState } from 'react';

export type CartItem = {
	quantity: number;
	productName: string; //
	listPrice: number;
	id: number;
};

// sepet bilgilerini tutacak olan state
export type Cart = {
	items: CartItem[];
	totalPrice: number;
};

export type CartContextType = {
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: number) => void;
	cart: Cart;
};

export const CartContext = createContext<CartContextType | null>(null); // UseContext hook ile bağlanıp güncel state değerleri erişmeye veya action methodlarına erişmek için kullanıyoruz.

const calculateTotalPrice = (cartState: Cart) => {
	let total = 0;
	cartState.items.forEach((item) => (total += item.listPrice * item.quantity));
	return total;
};

// Reducer yapısına benzer stateleri güncel olarak tutuğumuz yapı
const CartProvider = ({ children }: any) => {
	const initialCart: Cart = { totalPrice: 0, items: [] };
	const [cart, setCart] = useState<Cart>(initialCart);

	// actions addToCart
	// payload item:CartItem
	const addToCart = (item: CartItem): void => {
		item.listPrice = Number(item.listPrice);
		// aynısı varsa quantity güncellemesi yap
		const itemExist = cart.items.find((x) => x.id === item.id);
		if (itemExist) {
			itemExist.quantity += 1;
		} else {
			cart.items = [...cart.items, item];
		}

		cart.totalPrice = calculateTotalPrice(cart);

		setCart({ ...cart }); // state güncelemesi
	};

	// payload action id: number
	const removeFromCart = (id: number): void => {
		const filteredItems = cart.items.filter((x) => x.id !== id);
		cart.items = [...filteredItems];

		cart.totalPrice = calculateTotalPrice(cart);

		setCart({ ...cart });
	};

	// value={{ cart, addToCart, removeFromCart }} ile güncel state değeri ve state componnete üzerinden action çağırarak güncelleyeceğimiz yapılar.

	return (
		<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
