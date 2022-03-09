import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from './user/user';
import { leaseDetailsReducer, leaseReducer, myLeasesReducer } from './lease/lease';
import fetchApartments, { apartmentReducer } from './apartment/apartment';

const rootReducer = combineReducers({
  user: userReducer,
  leaseReducer,
  myLeases: myLeasesReducer,
  leaseDetails: leaseDetailsReducer,
  apartment: apartmentReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

store.dispatch(fetchApartments());

export default store;
