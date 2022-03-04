import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DesktopNavBar = ({ links, logo }) => {
  const state = useSelector((state) => (state));
  const { loggedIn } = state.user;

  return (
    <nav className="desktop-nav">
      <div className="logo-container">
        <img src={logo} alt="App logo" className="logo" />
      </div>
      <ul className="navLinks">
        {
          loggedIn === 'in' ? links.filter((link) => link.id < 6).map((userlinks) => (
            <li key={userlinks.id > 5} className={userlinks.name}>
              <NavLink exact="true" to={userlinks.path}>
                {userlinks.text}
              </NavLink>
            </li>
          ))
            : links.map((link) => (
              <li key={link.id > 5} className={link.name}>
                <NavLink exact="true" to={link.path}>
                  {link.text}
                </NavLink>
              </li>
            ))
        }
      </ul>
      <div className="copyright">
        <p>© 2022 ACHT.</p>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
