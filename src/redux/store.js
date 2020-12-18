import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer.js';

const middleWares = [window.REDUX_DEVTOOLS_EXTENSION()];

const store = createStore(rootReducer,applyMiddleware(...middleWares))

export default store;
