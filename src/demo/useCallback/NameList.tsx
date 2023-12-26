import React, { memo } from 'react';

type NameListProps = {
	names: string[];
	text?: string;
	onDelete: (index: number) => void; // action props
};

// Not: bir component action props değerine sahip ise reactMemo yamamız bir işe yaramıyor.

// <Parent><Child names={[]} onDelete={() => {}} /> </Parent>

function NameList(props: NameListProps) {
	console.log('child rendering....');
	return (
		<div>
			<div>
				{props.names.map((name: string, index: number) => {
					return (
						<div key={index}>
							{name}{' '}
							<button
								onClick={() => {
									props.onDelete(index);
								}}
							>
								Sil
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default memo(NameList);
