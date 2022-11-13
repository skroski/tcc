import styles from "./login-button.module.scss";
import { useAuth0 } from '@auth0/auth0-react';
/* eslint-disable-next-line */
export interface LoginButtonProps {}

export function LoginButton(props: LoginButtonProps) {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className={styles["container"]}>
      <button
        className="border-green-200 font-white py-2 px-3 border text-sm text-green-100 cursor-pointer rounded"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
}

export default LoginButton;
