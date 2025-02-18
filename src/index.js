import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-6nmneopwltclcvlh.us.auth0.com"
  clientId="uuGxeq3hFsVxOvcoBGp0bQrz2An4iCCq"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <React.StrictMode>
      <ToastContainer closeButton={false} autoClose={3000} position={"top-right"} />
    <App />
  </React.StrictMode>
  </Auth0Provider>,
);
