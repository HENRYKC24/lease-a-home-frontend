import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DesktopNavBar = ({ links, logo }) => {
  const state = useSelector((state) => (state));
  const { loggedIn } = state.user;

  return (
    <nav className="desktop-nav" data-testid="desktop-navbar">
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
        {loggedIn === 'in' ? (
          <>
            <li className="my_leases">
              <NavLink exact="true" to="/my_leases">
                MY LEASES
              </NavLink>
            </li>
            <li className="logout">
              <NavLink exact="true" to="/logout">
                LOGOUT
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="sign_in">
              <NavLink exact="true" to="/login">
                LOGIN
              </NavLink>
            </li>
            <li className="sign_up">
              <NavLink exact="true" to="sign_up">
                SIGN UP
              </NavLink>
            </li>
          </>

        )}
      </ul>
      <div className="copyright">
        <p>© 2022 ACHT.</p>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
