import React, { useReducer } from 'react';
import CouponReducer, { CouponState, CouponItem } from './CouponReducer';

function UseReducerSample() {
	const initialState: CouponState = {
		couponQuantity: 1,
		items: [],
		times: 1,
		totalPrice: 0,
	};

	// action fırlatma yöntemi
	// state couponState
	const [state, dispatch] = useReducer(CouponReducer, initialState);

	// seçilecek itemlar
	const data: any[] = [
		{
			id: 1,
			text: 'GS-FB',
			type: 'MS',
			ratio: [3.5, 2.5, 4.5], // 1- 0- 2
		},
		{
			id: 2,
			text: 'BJK-TS',
			type: 'Alt Üstü',
			ratio: [2.5, 3.5, 3.1], // 1 - 0 - 2
		},
		{
			id: 3,
			text: 'BJK-TS',
			type: 'Karşılıklı Gol',
			ratio: [1.5, 2.3], // Var Yok
		},
	];

	const addItem = (data: CouponItem) => {
		console.log('eklenecek', data);
		dispatch({ type: 'ADD_ITEM', payload: data });
	};

	const removeItem = (id: number) => {
		dispatch({ type: 'REMOVE_ITEM', payload: { id: id } });
	};

	return (
		<div>
			{data.map((item: any) => {
				return (
					<div key={item.id}>
						{item.text}
						<br></br>
						{item.ratio.map((ratio: any, index: number) => {
							return (
								<span
									title="Kupona Ekle"
									style={{
										cursor: 'pointer',
										padding: '3px',
										fontWeight: 'bold',
									}}
									onClick={() => {
										const couponItem: CouponItem = {
											id: item.id,
											text: item.text,
											ratio: ratio,
											type: item.type,
										};
										addItem(couponItem);
									}}
									key={index}
								>
									{ratio}
								</span>
							);
						})}
					</div>
				);
			})}
			<hr></hr>

			<ul>
				{state.items.map((item: CouponItem) => {
					return (
						<li key={item.id}>
							{item.text} - {item.type} - {item.ratio}{' '}
							<button
								style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
								onClick={() => removeItem(item.id)}
							>
								(x)
							</button>
						</li>
					);
				})}
			</ul>
			{/* <span>Kupon Adet: {state.couponQuantity}</span> */}
			<span style={{ fontWeight: 'bold' }}>Kupon Adet:</span>
			<input
				readOnly={state.items.length === 0 ? true : false}
				type="numeric"
				value={state.couponQuantity}
				onChange={(e: any) => {
					dispatch({
						type: 'CHANGE_COUPON_QUANTITY',
						payload: { quantity: Number(e.target.value) },
					});
				}}
			/>
			<br></br>
			{/* <span>Kupon Misli : {state.times}</span> */}
			<span style={{ fontWeight: 'bold' }}>Kupon Misli:</span>
			<input
				readOnly={state.items.length === 0 ? true : false}
				type="numeric"
				value={state.times}
				onChange={(e: any) => {
					dispatch({
						type: 'CHANGE_TIMES',
						payload: { times: Number(e.target.value) },
					});
				}}
			/>
			<br></br>
			<span style={{ fontWeight: 'bold' }}>
				Kupon Tutar: {state.totalPrice}
			</span>
		</div>
	);
}

export default UseReducerSample;
