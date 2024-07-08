import { createAsyncThunk } from '@reduxjs/toolkit';
import request, { gql } from 'graphql-request';

const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_GITHUB_TOKEN;

console.log(apiUrl);
console.log(token);

export const fetchRepos = createAsyncThunk('repos/fetchRepos', async (repoName: string) => {
	const headers = {
		Authorization: `Bearer ${token}`,
	};

	const query = gql`
		query ($repoName: String!) {
			search(query: $repoName, type: REPOSITORY, first: 100) {
				edges {
					node {
						... on Repository {
							name
							owner {
								login
							}
							description
							stargazerCount
							forkCount
							issues(states: OPEN) {
								totalCount
							}
							pullRequests(states: OPEN) {
								totalCount
							}
							defaultBranchRef {
								target {
									... on Commit {
										history {
											totalCount
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`;
	const variables = { repoName };
	const res = await request<Repository.SearchResponse>(apiUrl, query, variables, headers);
	return res.search.edges?.map((edge: any) => edge.node) as Repository.Repository[];
});
