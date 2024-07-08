import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import List from '@components/list';
import Modal from '@components/modal';
import Header from '@/components/header';

function App() {
	return (
		<Provider store={store}>
			<main className='flex-1'>
				<Header />
				<section className='flex-1'>
					<List />
					<Modal />
				</section>
			</main>
		</Provider>
	);
}

export default App;
