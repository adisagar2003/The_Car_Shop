import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import reducer, { initialState } from "./Component/reducer/reducer";
import { createStore } from 'redux'
import reportWebVitals from './reportWebVitals';
import cartReducer from './Component/reducer/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(cartReducer)
console.log(store.getState(),'ourPLACE MAN')
root.render(
    <Provider store={store}>
    <App />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
