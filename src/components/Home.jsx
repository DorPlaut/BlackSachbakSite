import React from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';

function Home({ isMobile }) {
  return (
    <>
      <div id="home">
        <div id="social-links-home">
          <SocialLinks />
        </div>
        <div className="homeLogoContainer">
          <img src="./BSlogo.png" alt="logo" id="HomePageLogo" />
        </div>
        <div id="homeNav">
          <NavLinks isMobile={isMobile} />
        </div>
      </div>
    </>
  );
}

export default Home;
