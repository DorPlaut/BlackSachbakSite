import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import UserBox from './UserBox';

function Home({ isMobile, setIsCartUpdated, isCartUpdated }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div id="home">
        <div id="social-links-home">
          <SocialLinks />
        </div>
        <div className="user-box-home">
          <UserBox
            isMobile={isMobile}
            setIsCartUpdated={setIsCartUpdated}
            isCartUpdated={isCartUpdated}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
          />
        </div>
        <div className="home-logo-container">
          <img src="./BSlogo.png" alt="logo" id="Home-page-logo" />
        </div>
        <div id="home-nav">
          <NavLinks isMobile={isMobile} />
        </div>
      </div>
    </>
  );
}

export default Home;
