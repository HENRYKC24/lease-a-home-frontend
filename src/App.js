import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/pages/SignupPage';
import Login from './components/pages/Login';
import store from './redux/configureStore';
import NavBar from './components/navbar/NavBar';
import LeaseForm from './pages/LeaseForm';
import MyLeases from './pages/MyLeases';
import DeleteLeases from './pages/DeleteLeases';
import Home from './components/home/homepage';
import Detail from './components/singleHome/singleHome';
// require('dotenv').config()

const App = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/:id" element={<Detail />} />
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
        <Route exact path="/my_leases" element={<MyLeases />} />
      </Routes>
      <Routes>
        <Route exact path="/delete_leases" element={<DeleteLeases />} />
      </Routes>
    </Provider>
  </Router>
);

export default App;
