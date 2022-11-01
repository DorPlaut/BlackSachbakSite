import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainPage from './components/MainPage';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import ShopPage from './components/Shop/ShopPage';

import Footer from './components/Footer';
// useEffect(() => {
//   isNavbarVisible();
// }, []);

function App() {
  // navbar visability
  const [isVisible, setIsVisible] = useState(false);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight - 20) {
      setIsVisible(true);
    } else if (window.scrollY < window.innerHeight + 20) {
      setIsVisible(false);
    }
  });
  // end navbar visability
  // mobile feauters
  const [isMobile, setIsMobile] = useState(false);
  const checkIfMobile = () => {
    if (window.innerWidth < 800) {
      setIsMobile(true);
    } else if (window.innerWidth >= 800) {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkIfMobile();
  }, []);
  window.addEventListener('resize', () => {
    checkIfMobile();
  });
  // end of mobile feauters

  return (
    <>
      <div className="section-container">
        {isVisible ? <Navbar isMobile={isMobile} /> : ''}
        <section className="section" id="homePage">
          <Home isMobile={isMobile} />
        </section>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Shop" element={<ShopPage />} />
        </Routes>
        <div id="gallery">
          <Gallery />
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
