import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';

const MobileNavBar = ({ links, logo }) => {
  const state = useSelector((state) => (state));
  const { loggedIn } = state.user;

  return (
    <nav className="mobile navbar navbar-light fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <HiMenuAlt4 className="menu4" />
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <div className="logo-container">
              <img src={logo} alt="App logo" className="logo" />
            </div>
            <button type="button" className="btn-close text-reset close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body align-self-center text-center">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
