import React from 'react';

interface ListCardProps {
	data: Repository.Repository;
	setRepository: (repository: Repository.Repository) => {
		payload: Repository.Repository;
		type: 'repos/selectRepo';
	};
}

const ListCard = ({ data, setRepository }: ListCardProps) => {
	const { name, owner, description } = data;
	const handleOnClick = () => {
		setRepository(data);
	};

	return (
		<button
			className='card  min-h-[150px] bg-base-100 w-96 shadow-xl pointer-events-auto my-2'
			onClick={handleOnClick}>
			<div className='card-body w-full flex items-start justify-start'>
				<h2 className='card-title w-full text-justify truncate'>{name}</h2>
				<p className='w-full text-justify text-base font-normal line-clamp-2'>
					{description}
				</p>
				<h6 className='text-[12px] text-gray-400'>{owner?.login}</h6>
			</div>
		</button>
	);
};

export default ListCard;
