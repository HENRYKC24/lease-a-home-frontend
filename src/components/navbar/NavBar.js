import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import links from '../../helpers/links';
import logo from '../../images/logo.png';

const NavBar = () => (
  <>
    <DesktopNavBar links={links} logo={logo} />
    <MobileNavBar links={links} logo={logo} />
  </>
);

export default NavBar;
