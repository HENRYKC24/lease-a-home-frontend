import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user/user';
import myLeasesReducer from './lease/lease';

const rootReducer = combineReducers({ user: userReducer, myLeases: myLeasesReducer });

const initialState = {
  myLeases: [],
};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
