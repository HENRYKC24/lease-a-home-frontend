import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/user';
import fetchApartments, { apartmentReducer } from './apartment/apartment';

const rootReducer = combineReducers({ user: userReducer, apartment: apartmentReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchApartments());

export default store;
