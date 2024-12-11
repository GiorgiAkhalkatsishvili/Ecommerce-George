import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import FooterComponent from './components/FooterComponent';



function App() {
  
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
