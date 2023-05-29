import React from 'react';

import './Navbar.css';
import images from '../../constants/images';
import MenuItemNoIcons from '../MenuItemNoIcons/MenuItemNoIcons';
import MenuItemWithIcons from '../MenuItemWithIcons/MenuItemWithIcons';

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

      <div className="app__navbar-smallscreen">
        <button
          className="app__navbar-smallscreen-btn app__navbar-smallscreen-btn__open"
          onClick={() => setToggleMenu(true)}
        >
          <img src={images.menu_icon} alt="menu button" />
        </button>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <div className="app__navbar-smallscreen_slide">
              <button
                className="app__navbar-smallscreen-btn app__navbar-smallscreen-btn__close"
                onClick={() => setToggleMenu(false)}
              >
                <img src={images.close_menu} alt="close menu button" />
              </button>

              <ul className="app__navbar-smallscreen_links">
                <li>
                  <MenuItemWithIcons />
                </li>

                <li>
                  <MenuItemNoIcons />
                </li>
                <li>Careers</li>
                <li>About</li>
              </ul>

              <div className="app__navbar-smallscreen_auth_buttons">
                <a href="#" className="app__navbar__auth_buttons-login">
                  Login
                </a>
                <a href="#" className="app__navbar__auth_buttons-register">
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
