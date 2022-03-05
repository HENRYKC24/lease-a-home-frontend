import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import Login from './pages/Login';
import Logout from './pages/Logout';
import store from './redux/configureStore';
import NavBar from './components/navbar/NavBar';
import Apartments from './pages/Apartments';
import LeaseForm from './pages/LeaseForm';
import DeleteLeases from './pages/DeleteLeases';
import MyLeases from './pages/MyLeases';
import MyLeaseDetails from './pages/MyLeaseDetails';
// require('dotenv').config()

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Apartments />} />
      </Routes>
      <Routes>
        <Route exact path="/lease_form" element={<LeaseForm />} />
      </Routes>
      <Routes>
        <Route exact path="/sign_up" element={<SignupPage />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/logout" element={<Logout />} />
      </Routes>
      <Routes>
        <Route exact path="/my_leases" element={<MyLeases />} />
      </Routes>
      <Routes>
        <Route exact path="/my_leases/:lease_id" element={<MyLeaseDetails />} />
      </Routes>
      <Routes>
        <Route exact path="/delete_leases" element={<DeleteLeases />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
