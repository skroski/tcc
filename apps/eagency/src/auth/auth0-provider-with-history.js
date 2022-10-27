import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


export const Auth0ProviderWithHistory = ({ children }) => {

const domain = 'duplod.us.auth0.com';
  const clientId = 'UQkKMWIBdk7M7PTaVPnLkknbYGvOv94O';

  const history = useNavigate();


  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >

      {children}
    </Auth0Provider>
  );
};
