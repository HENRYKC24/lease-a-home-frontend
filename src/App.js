import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import store from './redux/configureStore';
import NavBar from './components/navbar/NavBar';
import LeaseForm from './pages/LeaseForm';
import DeleteLeases from './pages/DeleteLeases';
import MyLeases from './pages/MyLeases';
import MyLeaseDetails from './pages/MyLeaseDetails';
import Home from './pages/homepage';
import Detail from './components/singleHome/singleHome';
// require('dotenv').config()

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details" element={<Detail />} />
        <Route exact path="/lease_form" element={<LeaseForm />} />
        <Route exact path="/my_leases" element={<MyLeases />} />
        <Route exact path="/my_leases/:lease_id" element={<MyLeaseDetails />} />
        <Route exact path="/delete_leases" element={<DeleteLeases />} />
        <Route exact path="/sign_up" element={<SignupPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
