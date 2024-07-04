import { closeModal } from '@/store/repoSlice';
import { RootState } from '@/store/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Modal: React.FC = () => {
	const dispatch = useDispatch();
	const selectedRepo = useSelector((state: RootState) => state.repos.selectedRepo);
	const modalOpen = useSelector((state: RootState) => state.repos.modalOpen);

	if (!modalOpen || !selectedRepo) return null;

	return (
		<div className='modal'>
			<div className='modal-content'>
				<span className='close' onClick={() => dispatch(closeModal())}>
					&times;
				</span>
				<h2>{selectedRepo.name}</h2>
				<p>Owner: {selectedRepo.owner.login}</p>
				<p>{selectedRepo.description}</p>
				{/* Adicione mais detalhes conforme necessário */}
			</div>
		</div>
	);
};

export default Modal;
