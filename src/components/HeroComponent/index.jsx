import React, { useRef } from 'react'
import './HeroComponent.css'

const HeroComponent = ({scrollRef}) => {


  const scrollToSection = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='heroComponent'>
      <div className="hero-headings">
        <h1>STYLIST PICKS BEAT THE HEAT</h1>
        <button onClick={scrollToSection}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default HeroComponent;
