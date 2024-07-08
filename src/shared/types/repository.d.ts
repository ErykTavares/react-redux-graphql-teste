declare namespace Repository {
	interface Repository {
		name: string;
		owner: Owner;
		description: string | null;
		stargazerCount: number;
		forkCount: number;
		issues: {
			totalCount: number;
		};
		pullRequests: {
			totalCount: number;
		};
		defaultBranchRef: {
			target: {
				history: {
					totalCount: number;
				};
			};
		};
	}

	interface Owner {
		login: string;
	}

	interface Edge {
		node: Repository;
	}

	interface SearchResponse {
		search: {
			edges: Edge[];
		};
	}

	interface RepoState {
		repos: Repository[];
		loading: boolean;
		error: string | null;
		selectedRepo: Repository | null;
		modalOpen: boolean;
	}
}
