import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Controller, useForm } from 'react-hook-form';
import { fetchRepos } from '@/services/api';
import { AppDispatch, RootState } from '@/store/store';
import { selectRepo } from '@/store/repoSlice';

const List = () => {
	const dispatch = useDispatch<AppDispatch>();
	const repos = useSelector((state: RootState) => state.repos.repos);
	const loading = useSelector((state: RootState) => state.repos.loading);

	const { control, watch } = useForm({
		defaultValues: {
			search: '',
		},
	});

	const handleSearch = useCallback(() => {
		return dispatch(fetchRepos(watch('search')));
	}, [watch('search')]);

	return (
		<div>
			<div className='col-12 row my-2'>
				<Controller
					render={({ field: { name, onChange, value, ref } }) => (
						<input
							ref={ref}
							type='text'
							value={value}
							onChange={onChange}
							name={name}
							placeholder='Buscar Repositorios'
						/>
					)}
					name='search'
					control={control}
				/>
			</div>
			<button onClick={handleSearch}>Search</button>

			{loading && <p>Loading...</p>}

			<ul>
				{repos?.map((repo) => (
					<li key={repo.name}  onClick={() => dispatch(selectRepo(repo))}>
						<h3>{repo.name}</h3>
						<p>{repo.owner.login}</p>
						<p>{repo.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
