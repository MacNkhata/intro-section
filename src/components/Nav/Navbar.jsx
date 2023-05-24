import React from 'react';

import images from '../../constants/images';
import './Navbar.css';
import MenuItemWithIcons from '../MenuItemWithIcons/MenuItemWithIcons';
import MenuItemNoIcons from '../MenuItemNoIcons/MenuItemNoIcons';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo-links">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="app logo" />
        </div>
        <ul className="app__navbar-links">
          <li>
            <MenuItemWithIcons />
          </li>

          <li>
            <MenuItemNoIcons />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="app__navbar-auth_buttons">
        <a href="#" className="app__navbar__auth_buttons-login">
          Login
        </a>
        <a href="#" className="app__navbar__auth_buttons-register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
