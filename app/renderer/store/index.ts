import logger from 'redux-logger';
import RcReduxModal from 'rc-redux-model';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import globalModel from './globalModel';

const reduxModel = new RcReduxModal([globalModel]);
const reducerList = combineReducers(reduxModel.reducers);
export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));