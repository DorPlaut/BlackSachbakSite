import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function UserBox() {
  // fetch Auth
  const [user, setUser] = useState('');
  const baseURL = 'http://localhost:3000/api/V1/auth';
  const loginURL = baseURL + '/login';
  const logoutURL = baseURL + '/logout';
  const fetchUserAuth = async () => {
    try {
      axios.get(baseURL).then((response) => {
        setUser(response);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const login = async () => {
  //   try {
  //     axios.get(loginURL).then((response) => {
  //       setUser(response.data);
  //       console.log(user);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchUserAuth();
  }, []);

  // console.log(user);
  return (
    <div>
      <h1>hello guest</h1>
      <h3>
        <a href="http://localhost:3000/api/V1/auth/login">login/signup</a>
      </h3>
    </div>
  );
}

export default UserBox;
