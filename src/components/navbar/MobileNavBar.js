import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';

const MobileNavBar = ({ links, logo }) => {
  const state = useSelector((state) => (state));
  const { loggedIn } = state.user;

  return (
    <nav className="mobile navbar navbar-light fixed-top" data-testid="mobile-navbar">
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
          <div className="offcanvas-body text-center">
            <ul className="navLinks">
              {links.map((link) => (
                <li key={link.id} className={link.name} data-bs-toggle="offcanvas">
                  <NavLink exact="true" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
              {loggedIn === 'in' ? (
                <>
                  <li className="my_leases" data-bs-toggle="offcanvas">
                    <NavLink exact="true" to="/my_leases">
                      MY LEASES
                    </NavLink>
                  </li>
                  <li className="logout" data-bs-toggle="offcanvas">
                    <NavLink exact="true" to="/logout">
                      LOGOUT
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="sign_in" data-bs-toggle="offcanvas">
                    <NavLink exact="true" to="/login">
                      LOGIN
                    </NavLink>
                  </li>
                  <li className="sign_up" data-bs-toggle="offcanvas">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
