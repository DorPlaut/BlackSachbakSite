import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavLinks({ isMobile }) {
  const [isShop, setIsShop] = useState(false);
  return (
    <ul className="navLinksContainer">
      <li>
        <HashLink
          onClick={() => {
            setIsShop(false);
          }}
          className="nav-link"
          smooth
          to="/#home-page"
        >
          Home
        </HashLink>
      </li>
      {isMobile ? <br /> : <li>|</li>}
      <li>
        <HashLink
          onClick={() => {
            setIsShop(false);
          }}
          className="nav-link"
          smooth
          to="/#music"
        >
          Music
        </HashLink>
      </li>
      {isMobile ? <br /> : <li>|</li>}
      <li>
        <HashLink
          onClick={() => {
            setIsShop(false);
          }}
          className="nav-link"
          smooth
          to="/#tours"
        >
          Tours
        </HashLink>
      </li>
      {isMobile ? <br /> : <li>|</li>}
      <li>
        <HashLink
          onClick={() => {
            setIsShop(true);
          }}
          className="nav-link"
          smooth
          to="/shop#shop"
        >
          Shop
        </HashLink>
      </li>
    </ul>
  );
}

export default NavLinks;
