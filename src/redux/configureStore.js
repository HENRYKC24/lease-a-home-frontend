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

const userInitialState = {
  name: '',
  email: '',
  loggedIn: 'out',
  userId: '',
  signedUp: false,
};
const userInfoFromStorage = localStorage.getItem('leaseAHomeUser')
  ? JSON.parse(localStorage.getItem('leaseAHomeUser'))
  : userInitialState;

const initialState = {
  user: userInfoFromStorage,
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

store.dispatch(fetchApartments());

export default store;
