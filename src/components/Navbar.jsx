import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';

function Navbar({ isMobile }) {
  // minimize function for mobile
  const [isMinimize, setIsMinimize] = useState(true);

  return (
    <>
      {isMobile ? (
        <div className="minimize-btn-container">
          <button
            className="minimize-btn"
            onClick={() => {
              setIsMinimize(!isMinimize);
            }}
          >
            {isMinimize ? <CgMenuRound /> : <CgCloseO />}
          </button>
        </div>
      ) : (
        ''
      )}

      {isMobile ? (
        <div
          className={
            isMinimize
              ? 'nav-container nav-container-minimize'
              : 'nav-container'
          }
        >
          <nav className="nav">
            <div id="logo-nav-container">
              <img
                src="https://raw.githubusercontent.com/DorPlaut/BlackSachbakSite/main/public/BSlogo.png"
                alt="logo"
                id="navbarLogo"
              />

              <NavLinks isMobile={isMobile} />
            </div>
            <div id="social-nav-container">
              <SocialLinks />
            </div>
          </nav>
        </div>
      ) : (
        <nav className="nav">
          <div id="logo-nav-container">
            <a href="#homePage">
              <img
                src="https://raw.githubusercontent.com/DorPlaut/BlackSachbakSite/main/public/BSlogo.png"
                alt="logo"
                id="navbarLogo"
              />
            </a>

            <NavLinks />
          </div>
          <div id="social-nav-container">
            <SocialLinks />
          </div>
        </nav>
      )}
      <div id="backUpBtnContainer">
        <a href="#homePage" id="backUpBtn">
          <BsFillArrowUpCircleFill />
        </a>
      </div>
    </>
  );
}

export default Navbar;
