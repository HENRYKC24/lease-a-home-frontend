import React from 'react';
import { Provider } from 'react-redux';
import SignupPage from './components/pages/SignupPage';
// import Login from './components/pages/Login';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <SignupPage />
  </Provider>
);

export default App;
