import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/user';

const rootReducer = combineReducers({ user: userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
