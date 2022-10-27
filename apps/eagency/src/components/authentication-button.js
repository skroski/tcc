import React from 'react';

import { LoginButton } from '@tcc/ui-header'
import { LogoutButton } from '@tcc/ui-header'
import { useAuth0 } from '@auth0/auth0-react';

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;