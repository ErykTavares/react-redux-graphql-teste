import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import List from '@components/list';
import Header from '@/components/header';

function App() {
	return (
		<Provider store={store}>
			<main className='w-full h-screen'>
				<Header />
				<section className='w-full h-[100%]'>
					<List />
				</section>
			</main>
		</Provider>
	);
}

export default App;
