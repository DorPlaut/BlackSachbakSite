import React from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import UserBox from './UserBox';

function Home({ isMobile, setIsCartUpdated, isCartUpdated }) {
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
          />
        </div>
        <div className="home-logo-container">
          <img src="./BSlogo.png" alt="logo" id="Home-page-logo" />
        </div>
        <div id="homeNav">
          <NavLinks isMobile={isMobile} />
        </div>
      </div>
    </>
  );
}

export default Home;
