import React from 'react';
import { NavLink } from 'react-router-dom';

const DesktopNavBar = ({ links, logo }) => (
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

export default DesktopNavBar;
