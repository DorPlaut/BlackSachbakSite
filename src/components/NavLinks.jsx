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
          to="/#homePage"
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
          to="/#musicPage"
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
          to="/#toursPage"
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
          to="/shop#shopPage"
        >
          Shop
        </HashLink>
      </li>
    </ul>
  );
}

export default NavLinks;
