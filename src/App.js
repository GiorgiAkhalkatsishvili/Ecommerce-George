import './App.css';
import BottomBannerComponent from './components/BottomBannerComponent';
import CenterComponent from './components/CenterComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import TopSellersComponent from './components/TopSellersComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HeroComponent />
      <CenterComponent />
      <BottomBannerComponent />
      <TopSellersComponent />
      <FooterComponent/>
    </div>
  );
}

export default App;


