import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Home from './components/Home';
import MainPage from './components/MainPage';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Chackout from './components/Shop/Chackout';

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
  // get cart to updated at any action related
  const [isCartUpdated, setIsCartUpdated] = useState(false);

  return (
    <>
      <div className="section-container">
        {isVisible ? (
          <Navbar
            isMobile={isMobile}
            setIsCartUpdated={setIsCartUpdated}
            isCartUpdated={isCartUpdated}
          />
        ) : (
          ''
        )}
        <section className="section" id="home-page">
          <Home
            isMobile={isMobile}
            setIsCartUpdated={setIsCartUpdated}
            isCartUpdated={isCartUpdated}
          />
        </section>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/Shop"
            element={
              <Shop
                setIsCartUpdated={setIsCartUpdated}
                isCartUpdated={isCartUpdated}
              />
            }
          />
          <Route
            path="/chackout"
            element={
              <Chackout
                setIsCartUpdated={setIsCartUpdated}
                isCartUpdated={isCartUpdated}
              />
            }
          />
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
