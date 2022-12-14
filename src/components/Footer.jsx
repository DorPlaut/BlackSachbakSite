import React from 'react';
import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-text">
          <div>
            <p>cheack us out on social media:</p>
            <SocialLinks />
            contact us on the Email: <br />
            <a href="mailto: Blacksachbak@gmail.com"> BlackSachbak@Gmail.com</a>
          </div>
          <div>
            <ul>
              <li>
                <HashLink
                  onClick={() => {
                    setIsShop(false);
                  }}
                  to="/#home-page"
                >
                  Go back to home page
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setIsShop(false);
                  }}
                  to="/#music-page"
                >
                  Listen to some music
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setIsShop(false);
                  }}
                  to="/#tours-page"
                >
                  Catch us on tour
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={() => {
                    setIsShop(true);
                  }}
                  to="/shop#shop-page"
                >
                  Shop for some merch
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
        <p id="rights">
          &copy; 2022 Black Sachbak. build by{' '}
          <a href="https://dorplaut.netlify.app/" target="blank">
            Dor Plaut
          </a>
          . All Rights Reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
