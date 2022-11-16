import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import Login from '../components/UserSystem/Login';
import Profile from '../components/UserSystem/Profile';

function UserBox({
  isMobile,
  setIsCartUpdated,
  isCartUpdated,
  isCartOpen,
  setIsCartOpen,
}) {
  const { user, isAuthenticated, isLoading, handleRedirectCallback } =
    useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      handleRedirectCallback()
        .then((res) => {
          console.log('logd in successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  // fetch Auth

  return (
    <>
      <div className="user-box">
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            {isAuthenticated ? (
              <div>
                <Profile
                  isMobile={isMobile}
                  setIsCartUpdated={setIsCartUpdated}
                  isCartUpdated={isCartUpdated}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                />
              </div>
            ) : (
              <Login />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default UserBox;
