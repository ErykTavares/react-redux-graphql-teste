import { fetchRepos } from '@/services/api';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Repository.RepoState = {
	repos: [],
	loading: false,
	error: null,
	selectedRepo: null,
	modalOpen: false,
};

const repoSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		selectRepo: (state, action: PayloadAction<Repository.Repository>) => {
			state.selectedRepo = action.payload;
			state.modalOpen = true;
		},
		closeModal: (state) => {
			state.modalOpen = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepos.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchRepos.fulfilled,
				(state, action: PayloadAction<Repository.Repository[]>) => {
					state.repos = action.payload;
					state.loading = false;
				},
			)
			.addCase(fetchRepos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch repositories';
			});
	},
});

export const { selectRepo, closeModal } = repoSlice.actions;

export default repoSlice.reducer;
