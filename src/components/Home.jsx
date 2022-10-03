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
        <img src="./public/BSlogo.png" alt="logo" id="HomePageLogo" />
        <div id="homeNav">
          <NavLinks isMobile={isMobile} />
        </div>
      </div>
    </>
  );
}

export default Home;
