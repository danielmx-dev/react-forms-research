import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore = () =>
  applyMiddleware(
    thunk,
    logger
  )(createStore)(reducer);
