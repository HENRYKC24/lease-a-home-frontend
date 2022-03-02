import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const DesktopNavBar = () => {
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
    <nav className="desktop-nav">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="logo" />
      </div>
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id} className={link.name}>
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
    </nav>
  );
};

export default DesktopNavBar;
