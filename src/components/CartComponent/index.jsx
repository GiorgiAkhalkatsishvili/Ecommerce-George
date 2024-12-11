import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './CartComponent.css'
import { removeProductFromCart } from '../../redux/productsSlice';


const CartComponent = () => {
  const [count, setCount] = useState(0);

  const cartItems = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(removeProductFromCart(id))
  }

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () => {
    const lowerCount = count - 1; 
    setCount(lowerCount);
  }


  return (
    <div>
      <div className="cartItems">
        <div className="main-cart-heading">
          <h1><span>YOUR</span> CART ──</h1>
        </div>
        {cartItems.map((item, index) => (
           <div className="products-list">
          <div className="cart-product">
            <img src={item.img} alt="" />
              <div className="cart-item-texts">
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                <p>{item.price}</p>
                </div>
                <div className="increase-descrease">
                  <div className="inner">
                  <p>{count}</p>
                    <div className="arrows">
                    <span onClick={increaseCount}>▲</span>
                      <span onClick={() => {
                         if (count > 0) {
                          decreaseCount()
                        }
                    }}>▼</span>
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
      </div>
    </div>
  )
}

export default CartComponent;
