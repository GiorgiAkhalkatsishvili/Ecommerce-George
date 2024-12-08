import React from 'react'
import './CenterComponent.css'
import person1 from '../../assets/images/person1.png'
import person2 from '../../assets/images/person2.png'
import person3 from '../../assets/images/person3.png'
import person4 from '../../assets/images/person4.png'
import person5 from '../../assets/images/person5.png'
import person6 from '../../assets/images/person6.png'
import person7 from '../../assets/images/person7.png'
import person8 from '../../assets/images/person8.png'
import truckIcon from '../../assets/images/truck-icon.png'
import circleIcon from '../../assets/images/circle-icon.png'
import rotationIcon from '../../assets/images/rotation-icon.png';
import fingerIcon from '../../assets/images/finger-icon.png'

const CenterComponent = () => {
  return (
    <div className='centerComponent'>
      <div className="center-main-heading">
        <h1>Discover NEW Arrivals</h1>
      </div>
      <div className="center-info">
        <p>Recently added shirts!</p>
      </div>
      <div className="center-products">
          <div className="products-list">
        <div className="product-one product">
          <img src={person1} alt="" />
          <div className="description">
            <h2>Plain White Shirt</h2>
            <p>$29.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person2} alt="" />
          <div className="description">
            <h2>Denim Jacket </h2>
            <p>$69.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person3} alt="" />
          <div className="description">
            <h2>Black Polo Shirt</h2>
            <p>$49.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person4} alt="" />
          <div className="description">
            <h2>Blue Sweatshirt</h2>
            <p>$79.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person5} alt="" />
          <div className="description">
            <h2>Blue Plain Shirt</h2>
            <p>$49.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person6} alt="" />
          <div className="description">
            <h2>Dark Blue Shirt</h2>
            <p>$89.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person7} alt="" />
          <div className="description">
            <h2>Outcast T Shirt</h2>
            <p>$19.00</p>
          </div>
        </div>
        <div className="product-one product">
          <img src={person8} alt="" />
          <div className="description">
            <h2>Polo Plain Shirt</h2>
            <p>$29.00</p>
          </div>
        </div>
      </div>
      </div>
      
      <div className="center-footer">
        <div className="descr-one">
          <div className="descr-img">
             <img src={truckIcon} alt="" />
         </div>
          <div className="paragraph">
            <h3>FREE SHIPPING</h3>
            <p>Enjoy free shipping on all orders above $100</p>
          </div>
        </div>
        <div className="descr-one">
          <div className="descr-img">
             <img src={circleIcon} alt="" />
         </div>
          <div className="paragraph">
            <h3>SUPPORT 24/7</h3>
            <p>Our support team is there to help you for queries</p>
          </div>
        </div>
        <div className="descr-one">
          <div className="descr-img">
             <img src={rotationIcon} alt="" />
         </div>
          <div className="paragraph">
            <h3>30 DAYS RETURN</h3>
            <p>Simply return it within 30 days for an exchange.</p>
          </div>
        </div>
        <div className="descr-one">
          <div className="descr-img">
             <img src={fingerIcon} alt="" />
         </div>
          <div className="paragraph">
            <h3>100% PAYMENT SECURE</h3>
            <p>Our payments are secured with 256 bit encryption</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenterComponent;
