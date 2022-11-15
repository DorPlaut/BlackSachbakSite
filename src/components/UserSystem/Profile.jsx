import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BsFillCartFill } from 'react-icons/bs';

import Logout from './Logout';
import Cart from '../Shop/Cart';

const Profile = ({ isMobile, setIsCartUpdated, isCartUpdated }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  let isCheckingOut = false;

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  return (
    <div className="user-profile">
      <div className="user-profile-details">
        <p>
          welcome <strong>{user.name}</strong>
        </p>

        <div className="user-profile-links ">
          <Logout />
          <button
            onClick={() => {
              setIsCartOpen(!isCartOpen);
            }}
            className="logout-link nav-link"
          >
            <BsFillCartFill /> Cart
          </button>
        </div>
      </div>
      {isMobile ? (
        ''
      ) : (
        <div>
          <img
            className="profile-pic"
            src={user.picture}
            alt={user.name}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      {isCartOpen ? (
        <div
          className={isMobile ? 'cart-container-home-mobile' : 'cart-container'}
        >
          <Cart
            setIsCartUpdated={setIsCartUpdated}
            isCartUpdated={isCartUpdated}
            isCheckingOut={isCheckingOut}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Profile;
