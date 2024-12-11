import React from 'react'
import HeroComponent from '../../components/HeroComponent';
import CenterComponent from '../../components/CenterComponent';
import BottomBannerComponent from '../../components/BottomBannerComponent';
import TopSellersComponent from '../../components/TopSellersComponent';


const HomePage = () => {
  return (
    <div>
<HeroComponent/>
      <CenterComponent />
      <BottomBannerComponent />
      <TopSellersComponent />
    </div>
  )
}

export default HomePage
