import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BsFillCartFill } from 'react-icons/bs';

import Logout from './Logout';

const Profile = ({ isMobile }) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="user-profile">
        <div className="user-profile-details">
          <p>
            welcome <strong>{user.name}</strong>
          </p>

          {/* <label>{user.email}</label> */}
          <div className="user-profile-links ">
            <Logout />
            <a className="logout-link nav-link ">
              <BsFillCartFill /> Cart
            </a>
          </div>
        </div>
        {isMobile ? (
          ''
        ) : (
          <div>
            <img className="profile-pic" src={user.picture} alt={user.name} />
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
