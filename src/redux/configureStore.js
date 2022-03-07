import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './user/user';
import fetchApartments, { apartmentReducer } from './apartment/apartment';
import { leaseReducer } from './lease/lease';

const rootReducer = combineReducers({
  user: userReducer,
  leaseReducer,
  apartment: apartmentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchApartments());

export default store;
