import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';

const CenterComponent = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products)
  
  useEffect(() => {
    console.log(products, 'this is products')
  }, [])


  return (
    <div className='centerComponent'>
      <div className="center-main-heading">
        <h1>Discover NEW Arrivals</h1>
      </div>
      <div className="center-info">
        <p>Recently added shirts!</p>
      </div>
      
      <div className="map">
         {products.map((item, index) => (
         <div className="center-products">
           <div className="products-list">
          <div className="product" key={item.id}>
            <img src={item.img} alt="" />
               <h2>{item.title}</h2>
               <p>{item.price}</p>
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
  )
}

export default CenterComponent;
