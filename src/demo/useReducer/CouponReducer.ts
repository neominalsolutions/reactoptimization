// Bütün State yönetimi Componenten ayrıştırılmış şekilde bu function içerisinde gerçekleşiyor

import React from 'react';

export type CouponItem = {
	id: number;
	text: string; // FB-GS
	ratio: number; // 3.25
	type: string; // Mac Sonucu
};

export type CouponState = {
	items: CouponItem[]; // coupon detay
	times: number; // misli
	couponQuantity: number; // kupon adet
	totalPrice: number; // toplam fiyat
};

type CouponActionType =
	| 'ADD_ITEM'
	| 'CHANGE_TIMES'
	| 'CHANGE_COUPON_QUANTITY'
	| 'REMOVE_ITEM';

type CouponAction = {
	type: CouponActionType; // ADD_ITEM, CHANGE_TIMES, CHANGE_COUPON_QUANTITY, REMOVE_ITEM
	payload:
		| CouponItem
		| { quantity: number }
		| { id: number }
		| { times: number }; // state güncelleyecek olan nesneler
};

function calculteTotal(state: CouponState): number {
	let total = 1;
	state.items.forEach((item) => {
		total *= item.ratio * state.couponQuantity * state.times;
	});

	if (total === 1) {
		total = 0;
	}

	return parseFloat(total.toFixed(2));
}

// state elimizdeki güncel state
// action state uygulanacak olan aksiyonlar. state içinde değerleri güncelleyen aksiyonlar
function CouponReducer(state: CouponState, action: CouponAction) {
	if (action.type === 'ADD_ITEM') {
		// state.items.push(action.payload as CouponItem);
		state.items = [...state.items, action.payload as CouponItem];

		const total = calculteTotal(state);
		state.totalPrice = total;

		return { ...state }; // güncel state
	} else if (action.type === 'REMOVE_ITEM') {
		const data = action.payload as any;
		const notRemovedItems = state.items.filter((x) => x.id !== data.id);
		state.items = [...notRemovedItems];

		const total = calculteTotal(state);

		if (total === 0) {
			state.times = 1;
			state.couponQuantity = 1;
		}

		state.totalPrice = total;

		return { ...state };
	} else if (action.type === 'CHANGE_TIMES') {
		const data = action.payload as any;
		state.times = data.times;

		const total = calculteTotal(state);
		state.totalPrice = total;

		return { ...state };
	} else if (action.type === 'CHANGE_COUPON_QUANTITY') {
		const data = action.payload as any;
		state.couponQuantity = data.quantity;

		const total = calculteTotal(state);
		state.totalPrice = total;

		return { ...state };
	} else {
		return state;
	}
}

export default CouponReducer;
