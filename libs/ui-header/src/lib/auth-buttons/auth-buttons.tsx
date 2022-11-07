import LogoutButton from "../logout-button/logout-button";
import LoginButton from "../login-button/login-button";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./auth-buttons.module.scss";
import Loading from "../loading/loading";

/* eslint-disable-next-line */
export interface AuthButtonsProps {}

export function AuthButtons(props: AuthButtonsProps) {
  const { isAuthenticated } = useAuth0();

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (isAuthenticated) {
    return <LogoutButton />;
  } else {
    return <LoginButton />;
  }
}

export default AuthButtons;
