import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/user';
import { leaseReducer } from './lease/lease';

const rootReducer = combineReducers({
  user: userReducer,
  leaseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
