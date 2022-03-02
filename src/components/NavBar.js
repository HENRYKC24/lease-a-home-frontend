import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Apartments',
      name: 'apartments',
    },
    {
      id: 2,
      path: '/lease_form',
      text: 'Lease Form',
      name: 'lease_form',
    },
    {
      id: 3,
      path: '/my_leases',
      text: 'My Leases',
      name: 'my_leases',
    },
    {
      id: 4,
      path: '/delete_leases',
      text: 'Delete Leases',
      name: 'delete_leases',
    },
    {
      id: 5,
      path: '/sign_out',
      text: 'Sign Out',
      name: 'sign_out',
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
            <NavLink exact="true" to={link.path} activeClassName="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
