import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './CartComponent.css'
import { removeProductFromCart } from '../../redux/productsSlice';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartComponent = () => {
  const [itemCounts, setItemCounts] = useState({});
  const [message, setMessage] = useState("");

  const cartItems = useSelector((state) => state.products.cartItems);
  const products = useSelector((state)=> state.products.products)
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeProductFromCart(id))
  }

 const increaseCount = (id) => {
  setItemCounts((prevCounts) => ({
    ...prevCounts,
    [id]: (prevCounts[id] || 0) + 1,
  }));
};

const decreaseCount = (id) => {
  setItemCounts((prevCounts) => ({
    ...prevCounts,
    [id]: Math.max((prevCounts[id] || 0) - 1, 0), 
  }));
};
 const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price;
 }, 0);
  
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100;


 const checkoutFunc = () => {
    if (totalPrice) {
      setMessage(
        <div id='successful-message' className='success'  style={{width: '280px', display: 'flex', gap: '10px', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faCircleCheck}  style={{ fontSize: '25px', color: 'green'  }}/>
            {' '}<p>Check out proceeded successfuly!</p>
            </div>
            );
    } else {
     setMessage('')
   }
   setTimeout(() => {
    setMessage('')
  },5000)
  };


  return (
    <div>
      <div className="cartItems">
        <div className="main-cart-heading">
          <h1><span>YOUR</span> CART ──</h1>
        </div>
        {cartItems.map((item, index) =>(
           <div className="products-list">
          <div className="cart-product">
            <img src={item.img} alt="" />
              <div className="cart-item-texts">
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                <p>${item.price}</p>
                </div>
                <div className="increase-descrease">
                  <div className="inner">
                    <p>{itemCounts[item.id] || 0}</p> 
                    <div className="arrows">
                      <span onClick={() => increaseCount(item.id)}>▲</span>
                      <span onClick={() => decreaseCount(item.id)}>▼</span>
                    </div>
                  </div>
                </div>
                <div className="cart-btn">
                  <button onClick={()=> removeItem(item.id)}>remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className='checkout-box'>
          <div className="checkout-inner">
            <div className="checkout-heading">
            <h1><span>CART</span> TOTALS ──</h1>
          </div>
          <div className="checkout-info">
              <div className="total">
                 <p>Items</p>
              </div>
              <div className="length">
                <p>{cartItems.length}</p>
              </div>
            </div>
          <div className="checkout-info">
              <div className="price">
                 <p>Price</p>
              </div>
              <div className="price-number">
                <p>${roundedTotalPrice}</p>
              </div>
            </div>
            <div className="checkout-btn">
            <button onClick={checkoutFunc}>Proceed Checkout</button>
            </div>
            {
              message?(
             <div className="success-notification">
             {message}
                </div>
              ) :
              ('')
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartComponent;
