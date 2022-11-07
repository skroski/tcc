import styles from "./login-button.module.scss";
import { useAuth0 } from '@auth0/auth0-react';
/* eslint-disable-next-line */
export interface LoginButtonProps {}

export function LoginButton(props: LoginButtonProps) {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles["container"]}>
      <button
        className="bg-green-500 font-white py-3 px-4 border border-green-800 cursor-pointer rounded"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
}

export default LoginButton;
