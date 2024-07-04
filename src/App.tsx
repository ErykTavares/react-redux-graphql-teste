import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import List from '@components/list';
import Modal from '@components/modal';

function App() {
	return (
		<Provider store={store}>
			<section className='flex-1'>
				<List />
				<Modal />
			</section>
		</Provider>
	);
}

export default App;
