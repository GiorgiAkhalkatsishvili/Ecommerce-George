import React, { forwardRef, useEffect, useRef, useState } from 'react'
import './CenterComponent.css'
import truckIcon from '../../assets/images/truck-icon.png'
import circleIcon from '../../assets/images/circle-icon.png'
import rotationIcon from '../../assets/images/rotation-icon.png';
import fingerIcon from '../../assets/images/finger-icon.png'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '../../redux/productsSlice';

const CenterComponent = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.products.cartItems);


  const addProductsToCart = (index, post) => {
    dispatch(addCartItems(post));
  };

  return (
    <div ref={ref} className='centerComponent'>
      <div className="center-main-heading">
        <h1>Discover NEW Arrivals</h1>
      </div>
      <div className="center-info">
        <p>Recently added shirts!</p>
      </div>
      
      <div className="map">
        {products.map((post, index) => (
          <div className="center-products">
            <div className="products-list">
              <div className="product" onClick={() => addProductsToCart(index, post)} key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <p>${post.price}</p>
              </div>
            </div>
          </div>
        ))}
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
  );
});

export default CenterComponent;
