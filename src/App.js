import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import SignupPage from './components/pages/SignupPage';
// import Login from './components/pages/Login';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <SignupPage />
  </Provider>
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Apartments from './pages/Apartments';
import LeaseForm from './pages/LeaseForm';
import MyLeases from './pages/MyLeases';
import DeleteLeases from './pages/DeleteLeases';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Apartments />} />
    </Routes>
    <Routes>
      <Route exact path="/lease_form" element={<LeaseForm />} />
    </Routes>
    <Routes>
      <Route exact path="/my_leases" element={<MyLeases />} />
    </Routes>
    <Routes>
      <Route exact path="/delete_leases" element={<DeleteLeases />} />
    </Routes>
  </Router>
>>>>>>> 9def4c50988b25143e4fbaff54c68ead1f8357f8
);

export default App;
