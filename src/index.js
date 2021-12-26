import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux';

import App from './App';
import { rootReducer } from './redux/rootReducer';


import './index.css';
import { spamFilter } from './redux/midleware';



const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ), 
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f 
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
