import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/UserSystem/auth0-provider-with-history';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);
