import React, { useState } from 'react';
import './HeaderComponent.css';
import userImage from '../../assets/images/user.jpg';
import cartImage from '../../assets/images/shopping-bag.png';
import menuImage from '../../assets/images/menu.png';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='headerComponent'>
      <div className="header-texts">
        <div className="headings-links">
          <div className="main-heading">
            <h1>NorthStar</h1>
          </div>
          <div className="header-list">
            <ul>
              <li id='home'>HOME</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>

        <div className="main-images-list">
          <div className="img-one header-img">
            <img src={userImage} alt="User" />
          </div>
          <div className="img-two header-img">
            <img src={cartImage} alt="Cart" />
          </div>
          <div className="img-three header-img" onClick={toggleMenu}>
            <img src={menuImage} alt="Menu" />
          </div>
        </div>
      </div>

      {
        isMenuOpen ? (
        <div className="dropdown-menu">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      ): ''}
    </div>
  );
}

export default HeaderComponent;
