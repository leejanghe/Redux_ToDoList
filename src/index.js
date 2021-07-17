import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import todoReducer from './redux/reducer';
import { createStore } from "redux";
import {Provider} from "react-redux";

const store = createStore(todoReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
