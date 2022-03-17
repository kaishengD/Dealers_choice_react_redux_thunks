import React from 'react'
import ReactDOM from 'react-dom'
import App from "../client/component/main";
import store from "../client/component/store";
import { Provider } from 'react-redux';
const root = document.querySelector('#root');
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, root)
 