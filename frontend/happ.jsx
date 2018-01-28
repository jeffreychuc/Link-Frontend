import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import style from '../stylesheets/application.scss';

document.addEventListener("DOMContentLoaded", () => {
	let store = configureStore();
	// window.dispatch = store.dispatch;
	// window.getState = store.getState;
	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);
});
