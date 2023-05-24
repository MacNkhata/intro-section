import React from 'react';

import images from '../../constants/images';

const MenuItemWithIcons = () => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

  const handleDropDownOpen = () => {
    setIsDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    setIsDropDownOpen(false);
  };

  return (
    <div
      className={`dropdown ${isDropDownOpen ? 'open' : ''}`}
      onMouseEnter={handleDropDownOpen}
      onMouseLeave={handleDropDownClose}
    >
      <a href="#">
        Features
        <img
          src={isDropDownOpen ? images.arrow_up : images.arrow_down}
          alt=""
        />
      </a>
      {isDropDownOpen && (
        <ul className="app__navbar__links-features">
          <li>
            <img src={images.todo_icon} alt="todo icon" /> Todo List
          </li>
          <li>
            <img src={images.calendar} alt="calender icon" /> Calender
          </li>
          <li>
            <img src={images.reminders_icon} alt="reminders icon" /> Reminders
          </li>
          <li>
            <img src={images.planning_icon} alt="planning icon" /> Planning
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuItemWithIcons;
