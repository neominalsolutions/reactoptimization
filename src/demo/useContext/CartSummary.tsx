import React, { useContext } from 'react';
import { CartContext, CartContextType, CartItem } from './CartProvider';

function CartSummary() {
	const { cart, removeFromCart } = useContext(CartContext) as CartContextType;

	return (
		<>
			{cart && (
				<div>
					<h1>Sepetteki Ürünler</h1>
					{cart.items.map((item: CartItem) => {
						return (
							<div key={item.id}>
								<hr></hr>
								<div>Ürün: {item.productName}</div>
								<div>Fiyat: {item.listPrice}</div>
								<div>Adet: {item.quantity}</div>
								<div
									style={{
										backgroundColor: 'red',
										color: 'white',
										textAlign: 'center',
										padding: '5px',
									}}
									onClick={() => {
										removeFromCart(item.id);
									}}
								>
									Sil
								</div>
								<hr></hr>
							</div>
						);
					})}
					<div>Toplam Sepet Tutar: {cart.totalPrice}</div>
				</div>
			)}
		</>
	);
}

export default CartSummary;
