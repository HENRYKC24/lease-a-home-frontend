import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/pages/SignupPage';
import Login from './components/pages/Login';
import store from './redux/configureStore';
import NavBar from './components/navbar/NavBar';
import Apartments from './pages/Apartments';
import LeaseForm from './pages/LeaseForm';
import MyLeases from './pages/MyLeases';
import DeleteLeases from './pages/DeleteLeases';
// require('dotenv').config()

const App = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Apartments />} />
        <Route exact path="/lease_form" element={<LeaseForm />} />
        <Route exact path="/sign_up" element={<SignupPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/my_leases" element={<MyLeases />} />
        <Route exact path="/delete_leases" element={<DeleteLeases />} />
      </Routes>
    </Provider>
  </Router>
);

export default App;
