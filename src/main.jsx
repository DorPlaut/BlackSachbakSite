import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/UserSystem/auth0-provider-with-history';
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dorplaut.us.auth0.com"
      clientId="WAcwhQsfywKYXFUyHTRtTT6o3tQ63iPM"
      redirectUri={window.location.origin}
      audience="https://dorplaut.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata"
    > */}
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
