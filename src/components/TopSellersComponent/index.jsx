import React from 'react';
import './TopSellersComponent.css'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItems } from '../../redux/productsSlice';


const TopSellersComponent = () => {
  const SecondProductsArray = useSelector((state) => state.products.SecondProductsArray);

  const addProductsToCart = (index, post) => {
      dispatch(addCartItems(post));
  }
  const dispatch = useDispatch();

 const handleShopNowClick = () => {
      // Scroll to the 'sellers-list' section smoothly
      const sellersListSection = document.querySelector('.topSellersComponent');
      if (sellersListSection) {
        sellersListSection.scrollIntoView({ behavior: 'smooth' });
      }
  }

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
        {SecondProductsArray.map((post, index) => (
         <div className="center-products">
           <div className="products-list">
          <div className="seller" onClick={()=>addProductsToCart(index, post)} key={post.id}>
            <img src={post.img} alt="" />
               <h2>{post.title}</h2>
               <p>${post.price}</p>
          </div>
          </div>
      </div>
      ))}
      </div>

      <div className="sellers-button">
        <button onClick={handleShopNowClick}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default TopSellersComponent
