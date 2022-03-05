import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DesktopNavBar = ({ links, logo }) => {
  const user = useSelector((state) => state.user);
  const { loggedIn, name } = user;
  return (
    <nav className="desktop-nav">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="logo" />
      </div>
      {loggedIn === 'in' && (
        <li>
          Hi,
          {' '}
          {name}
          !
        </li>
      )}
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id} className={link.name}>
            <NavLink exact="true" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
        {loggedIn === 'in' ? (
          <li className="logout">
            <NavLink exact="true" to="/logout">
              LOGOUT
            </NavLink>
          </li>
        ) : (
          <li className="sign_in">
            <NavLink exact="true" to="/login">
              LOGIN
            </NavLink>
          </li>
        )}
      </ul>
      <div className="copyright">
        <p>© 2022 ACHT.</p>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
