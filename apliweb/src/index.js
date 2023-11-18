import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";



const root = createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7r53z708jrdto7ou.us.auth0.com"
      clientId="6RQs7Mdez6NLGaKtGF8UlykuAPz7Rt17"
      
      authorizationParams={{ redirect_uri: window.location.origin}}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
