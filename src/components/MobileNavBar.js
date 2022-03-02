/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const MobileNavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'APARTMENTS',
      name: 'apartments',
    },
    {
      id: 2,
      path: '/lease_form',
      text: 'LEASE FORM',
      name: 'lease_form',
    },
    {
      id: 3,
      path: '/my_leases',
      text: 'MY LEASES',
      name: 'my_leases',
    },
    {
      id: 4,
      path: '/delete_leases',
      text: 'DELETE LEASES',
      name: 'delete_leases',
    },
  ];

  return (
    <nav className="mobile navbar navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <div className="logo-container">
              <img src={logo} alt="App logo" className="logo" />
            </div>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <ul className="navLinks">
              {links.map((link) => (
                <li key={link.id} className={link.name} data-bs-toggle="offcanvas">
                  <NavLink exact="true" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <button type="button" className="sign-out">SIGN OUT</button>
            </ul>
            <div className="copyright">
              <p>© 2022 ACHT.</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
