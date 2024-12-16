import React from 'react'
import './BottomBannerComponent.css'

const BottomBannerComponent = ({scrollRef}) => {
  const scrollToSection = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className='bottomBanner'>
      <div className="container-one">
        <div className="inner-texts">
            <div className="banner-heading">
        <h1>PEACE OF MIND</h1>
      </div>
      <div className="banner-paragraph">
        <p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
      </div>
      <div className="banner-btn">
        <button onClick={scrollToSection}>BUY NOW</button>
      </div>
       </div>
    </div>
      <div className="container-two">
        <div className="inner-texts">
           <div className="banner-heading">
        <h1>BUY 2 GET 1 FREE</h1>
      </div>
      <div className="banner-paragraph">
        <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
      </div>
      <div className="banner-btn">
        <button onClick={scrollToSection}>BUY NOW</button>
      </div>
        </div>
    </div>
    </div>
  )
}

export default BottomBannerComponent
