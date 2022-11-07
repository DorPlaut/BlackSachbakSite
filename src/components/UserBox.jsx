import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import Login from '../components/UserSystem/Login';
import Profile from '../components/UserSystem/Profile';

function UserBox({ isMobile }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // fetch Auth

  return (
    <>
      <div className="user-box">
        {isAuthenticated ? (
          <div>
            <Profile isMobile={isMobile} />
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default UserBox;
