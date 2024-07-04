declare namespace Repository {
	interface Repository {
		name: string;
		owner: {
			login: string;
		};
		description: string | null;
	}

	interface Owner {
		login: string;
	}

	interface Repo {
		name: string;
		owner: Owner;
		description: string | null;
	}

	interface Edge {
		node: Repo;
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
