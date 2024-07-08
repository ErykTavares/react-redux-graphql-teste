import { closeModal } from '@/store/repoSlice';
import { RootState } from '@/store/store';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
	const modalRef = useRef<HTMLDialogElement>(null);
	const dispatch = useDispatch();
	const selectedRepo = useSelector((state: RootState) => state.repos.selectedRepo);
	const modalOpen = useSelector((state: RootState) => state.repos.modalOpen);

	const handleCloseModal = () => {
		dispatch(closeModal());
	};

	useEffect(() => {
		if (!modalRef.current) {
			return;
		}
		modalOpen ? modalRef.current.showModal() : modalRef.current.close();
	}, [modalOpen]);

	if (!modalOpen || !selectedRepo) return null;

	return (
		<dialog ref={modalRef} id='my_modal_1' className='modal '>
			<div className='modal-box w-full flex flex-col items-start justify-start'>
				<button
					className='self-end w-[25px] min-h-[25px] h-[25px] flex items-center  justify-center rounded-full btn btn-outline btn-error p-0 close'
					onClick={handleCloseModal}>
					<h5 className='text-[15px] text-center'>&times;</h5>
				</button>
				<h2 className='w-full text-[25px] font-semibold text-justify truncate mb-1'>
					{selectedRepo?.name}
				</h2>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Proprietário:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo?.owner?.login}
					</p>
				</div>
				<div className='w-full flex flex-col items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Descrição:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo?.description}
					</p>
				</div>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Estrelas:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo.stargazerCount}
					</p>
				</div>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Forks:</h4>
					<p className='text-justify text-base font-normal'>{selectedRepo.forkCount}</p>
				</div>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Issues abertas:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo.issues.totalCount}
					</p>
				</div>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Pull requests abertos:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo.pullRequests.totalCount}
					</p>
				</div>
				<div className='w-full flex flex-row items-start justify-start mb-1'>
					<h4 className='text-[18px] font-medium mr-1'>Total de commits:</h4>
					<p className='text-justify text-base font-normal'>
						{selectedRepo.defaultBranchRef.target.history.totalCount}
					</p>
				</div>
			</div>
			<form method='dialog' className='modal-backdrop cursor-pointer'>
				<button onClick={handleCloseModal}>close</button>
			</form>
		</dialog>
	);
};

export default Modal;
