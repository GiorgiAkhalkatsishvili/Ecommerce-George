import React from 'react';
import './FooterComponent.css'
import arrowImg from '../../assets/images/arrow.png'
import visaImgOne from '../../assets/images/visa.png'
import visaImg from '../../assets/images/visa-two.png'
import cardImg from '../../assets/images/card.png'
import paypalImg from '../../assets/images/paypal.png'

const FooterComponent = () => {
  return (
    <div className='footerComponent'>
      <div className="footer-lists">
        <div className="list-one">
          <div className="list-heading">
            <h3>COMPANY INFO</h3>
          </div>
          <div className="inner-list">
            <ul>
              <li>About Us</li>
              <li>Latest Posts</li>
              <li>Contact Us</li>
              <li>Shop</li>
            </ul>
          </div>
        </div>
        <div className="list-one">
          <div className="list-heading">
            <h3>HELP LINKS</h3>
          </div>
          <div className="inner-list">
            <ul>
              <li>Tracking</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="list-one">
          <div className="list-heading">
            <h3>USEFUL LINKS</h3>
          </div>
          <div className="inner-list">
            <ul>
              <li>Special Offers</li>
              <li>Gift Cards</li>
              <li>Advetising</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        <div className="list-one list">
          <div className="list-heading">
            <h3>GET IN THE KNOW</h3>
          </div>
          <div className="footer-input">
            <input type="text" placeholder='Enter email' />
            <div className="arrow-img">
              <img src={arrowImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="final-info">
        <hr />
        <div className="footer-final-texts">
           <div className="small-texts">
          <p>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="final-logos">
          <div className="image-one">
            <img src={visaImgOne} alt="" />
          </div>
          <div className="image-two">
            <img src={cardImg} alt="" />
          </div>
          <div className="image-two">
            <img src={paypalImg} alt="" />
          </div>
          <div className="image-two">
            <img src={visaImg} alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default FooterComponent;
