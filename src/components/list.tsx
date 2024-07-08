import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Controller, useForm } from 'react-hook-form';
import { fetchRepos } from '@/services/api';
import { AppDispatch, RootState } from '@/store/store';
import { selectRepo } from '@/store/repoSlice';
import useDebounce from '@/hooks/useDebounce';
import ListCard from '@/components/listCard';
import Modal from './modal';

const List = () => {
	const dispatch = useDispatch<AppDispatch>();
	const repos = useSelector((state: RootState) => state.repos.repos);
	const loading = useSelector((state: RootState) => state.repos.loading);

	const { control, watch } = useForm({
		defaultValues: {
			search: '',
		},
	});
	const debounce = useDebounce(watch('search'), 500);

	const handleSetRepository = useCallback(
		(repository: Repository.Repository) => {
			return dispatch(selectRepo(repository));
		},
		[dispatch],
	);

	const getReposList = useCallback(() => {
		return dispatch(fetchRepos(debounce));
	}, [debounce, dispatch]);

	useEffect(() => {
		getReposList();
	}, [getReposList]);

	return (
		<section className='w-full h-auto p-5'>
			<div className='w-full'>
				<Controller
					render={({ field: { name, onChange, value, ref } }) => (
						<label className='input input-bordered flex items-center gap-2'>
							<input
								ref={ref}
								className='grow'
								type='text'
								value={value}
								onChange={onChange}
								name={name}
								placeholder='Buscar Repositorios'
							/>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='currentColor'
								className='h-4 w-4 opacity-70'>
								<path
									fillRule='evenodd'
									d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
									clipRule='evenodd'
								/>
							</svg>
						</label>
					)}
					name='search'
					control={control}
				/>
			</div>
			{loading ? (
				<div className='w-full flex items-center justify-center my-2'>
					<span className='loading loading-spinner loading-lg text-info'></span>
				</div>
			) : null}

			<div className='w-full flex flex-col items-center justify-center p-2'>
				{repos?.map((repo) => (
					<ListCard
						key={`${repo.name} ${repo.description}`}
						data={repo}
						setRepository={handleSetRepository}
					/>
				))}
			</div>
			<Modal />
		</section>
	);
};

export default List;
