import React, { useState } from 'react';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { CgMenuRound, CgCloseO } from 'react-icons/cg';
import UserBox from './UserBox';

function Navbar({ isMobile, setIsCartUpdated, isCartUpdated }) {
  // minimize function for mobile
  const [isMinimize, setIsMinimize] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
        <div className="nav-container">
          {isMinimize ? (
            ''
          ) : (
            <nav className="nav">
              <div id="logo-nav-container">
                <img
                  src="https://raw.githubusercontent.com/DorPlaut/BlackSachbakSite/main/public/BSlogo.png"
                  alt="logo"
                  className="navbar-logo-mobile"
                />

                <div className="user-box-page-mobile">
                  <UserBox
                    setIsCartUpdated={setIsCartUpdated}
                    isCartUpdated={isCartUpdated}
                    isCartOpen={isCartOpen}
                    setIsCartOpen={setIsCartOpen}
                  />
                </div>
                <br />
                <div className="navlinks-mobile">
                  {isCartOpen ? '' : <NavLinks isMobile={isMobile} />}
                </div>
              </div>
              <div id="social-nav-container">
                <SocialLinks />
              </div>
            </nav>
          )}
        </div>
      ) : (
        <nav className="nav">
          <div id="logo-nav-container">
            <a href="#homePage">
              <img
                src="https://raw.githubusercontent.com/DorPlaut/BlackSachbakSite/main/public/BSlogo.png"
                alt="logo"
                className="navbar-logo"
              />
            </a>

            <NavLinks />
          </div>
          <div id="social-nav-container">
            <div className="user-box-page">
              <UserBox
                setIsCartUpdated={setIsCartUpdated}
                isCartUpdated={isCartUpdated}
              />
            </div>
            {/* <SocialLinks /> */}
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
