import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import App from './App.js';

// Install redux with:
// $ npm i --save redux
// Install react-redux with:
// $ npm i --save react-redux

const lawsonsStore = createStore(rootReducer);
// debugger
// Get state:
// > lawsonsStore.getState()
// Update state:
// > lawsonsStore.dispatch({ type: 'INCREMENT_COUNT', amount: 3 })
// > lawsonsStore.dispatch({ type: 'DECREMENT_COUNT', amount: 4 })
// > lawsonsStore.getState()
// -1

// > lawsonsStore.dispatch({ type: 'UPDATE_COUNT', amount: 87 })
// > lawsonsStore.getState()
// 87

ReactDOM.render(
  <Provider store={lawsonsStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));