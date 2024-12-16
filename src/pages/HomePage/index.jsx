import React, { useRef } from 'react'
import HeroComponent from '../../components/HeroComponent';
import CenterComponent from '../../components/CenterComponent';
import BottomBannerComponent from '../../components/BottomBannerComponent';
import TopSellersComponent from '../../components/TopSellersComponent';


const HomePage = () => {
  const sectionRef = useRef(null);


  return (
    <div>
     <HeroComponent scrollRef={sectionRef}/>
      <CenterComponent ref={sectionRef}/>
      <BottomBannerComponent scrollRef={sectionRef}/>
      <TopSellersComponent />
    </div>
  )
}

export default HomePage
