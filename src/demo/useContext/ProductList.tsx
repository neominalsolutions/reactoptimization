import React, { useContext } from 'react';
import { ProductDto } from '../deboucing/DebouncingSample';
import { CartContext, CartContextType, CartItem } from './CartProvider';

type ProductListProps = {
	items: ProductDto[];
};

function ProductList(props: ProductListProps) {
	//Global State olan CartContext üzerinden sürecin yönetilmesini sağlıyor.
	const { addToCart } = useContext(CartContext) as CartContextType;
	// spete ekleme için kullanılan action

	return (
		<div>
			{props.items.map((item: ProductDto) => {
				return (
					<div key={item.ProductID}>
						{item.ProductName} x {Number(item.UnitPrice)}{' '}
						<button
							onClick={() =>
								addToCart({
									id: item.ProductID,
									productName: item.ProductName,
									listPrice: item.UnitPrice,
									quantity: 1,
								} as CartItem)
							}
						>
							Sepete Ekle
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default ProductList;
