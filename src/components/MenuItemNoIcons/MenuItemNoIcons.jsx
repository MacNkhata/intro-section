import React from 'react';

import images from '../../constants/images';

const MenuItemNoIcons = () => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  const handleDropDownOpen = () => {
    setIsDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    setIsDropDownOpen(false);
  };
  return (
    <div>
      <a
        href="#"
        onMouseEnter={handleDropDownOpen}
        onMouseLeave={handleDropDownClose}
      >
        Company
        <img
          src={isDropDownOpen ? images.arrow_up : images.arrow_down}
          alt=""
        />
      </a>
      {isDropDownOpen && (
        <ul className="app__navbar__links-company">
          <li>History</li>
          <li>Our Team</li>
          <li>Blog</li>
        </ul>
      )}
    </div>
  );
};

export default MenuItemNoIcons;
