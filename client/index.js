import React from 'react';
import ReactDOM from 'react-dom';
// import MainComponent from './main-component';
import Home from './home';
import store from './store';
import {Provider} from 'react-redux';

document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(<Provider store={store}>
		<Home />
	</Provider>, document.getElementById('app'))
);
