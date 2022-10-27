import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { Auth0ProviderWithHistory } from "./auth/auth0-provider-with-history";
import AuthenticationButton from "./components/authentication-button";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
      <Auth0ProviderWithHistory>
      <App />
      <AuthenticationButton></AuthenticationButton>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
);