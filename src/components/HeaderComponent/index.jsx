import React, { useState } from 'react';
import './HeaderComponent.css';
import userImage from '../../assets/images/user.jpg';
import cartImage from '../../assets/images/shopping-bag.png';
import menuImage from '../../assets/images/menu.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartItems = useSelector((state) => state.products.cartItems);

  return (
    <div className='headerComponent'>
      <div className="header-texts">
        <div className="headings-links">
          <div className="main-heading">
            <h1><Link to='/'>NorthStar</Link></h1>
          </div>
          <div className="header-list">
            <ul>
              <li><Link id='home' to="/">HOME</Link></li>
              <li><Link to='/about'>ABOUT</Link></li>
              <li><Link to='/contact'>CONTACT US</Link></li>
            </ul>
          </div>
        </div>

        <div className="main-images-list">
          <div className="img-one header-img">
            <img src={userImage} alt="User" />
          </div>
          <div className="img-two header-img">
            <Link to='/cart'>
              <img src={cartImage} alt="Cart" />
            </Link>
            <p>{cartItems?.length}</p>
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
            <li><Link id='home' to="/">HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT US</Link></li>
          </ul>
        </div>
      ): ''}
    </div>
  );
}

export default HeaderComponent;
