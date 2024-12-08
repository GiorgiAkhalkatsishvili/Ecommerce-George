import React from 'react';
import './TopSellersComponent.css'
import firstSeller from '../../assets/images/seller1.png'
import secondSeller from '../../assets/images/seller2.png'
import thirdSeller from '../../assets/images/seller3.png'
import fourthSeller from '../../assets/images/seller4.png'

const TopSellersComponent = () => {
  return (
    <div className='topSellersComponent'>
      <div className="sellers-inner-texts">
         <div className="main-heading">
        <h1>Top Sellers</h1>
      </div>
      <div className="main-paragraph">
        <p>Browse our top-selling products</p>
      </div>
      </div>
      <div className="sellers-list">
        <div className="seller-one">
          <div className="seller-img">
            <img src={firstSeller} alt="" />
          </div>
          <div className="seller-title">
            <h2>Gray Polo Shirt</h2>
          </div>
          <div className="seller-price">
            <p>$49.00</p>
          </div>
        </div>
        <div className="seller-one">
          <div className="seller-img">
            <img src={secondSeller} alt="" />
          </div>
          <div className="seller-title">
            <h2>Red Shirt</h2>
          </div>
          <div className="seller-price">
            <p>$69.00</p>
          </div>
        </div>
        <div className="seller-one">
          <div className="seller-img">
            <img src={thirdSeller} alt="" />
          </div>
          <div className="seller-title">
            <h2>Polo White Shirt</h2>
          </div>
          <div className="seller-price">
            <p>$29.00</p>
          </div>
        </div>
        <div className="seller-one">
          <div className="seller-img">
            <img src={fourthSeller} alt="" />
          </div>
          <div className="seller-title">
            <h2>Pink Casual Shirt</h2>
          </div>
          <div className="seller-price">
            <p>$39.00</p>
          </div>
        </div>
      </div>

      <div className="sellers-button">
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default TopSellersComponent
