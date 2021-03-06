import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from "react-redux";
import { store } from "_redux/Store";

import App from './components/App/App'

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);