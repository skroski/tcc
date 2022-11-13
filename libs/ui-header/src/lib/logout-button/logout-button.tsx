import { useAuth0 } from '@auth0/auth0-react';
import styles from './logout-button.module.scss';
  

/* eslint-disable-next-line */
export interface LogoutButtonProps {
}

export function LogoutButton(props: LogoutButtonProps) {
  const { logout } = useAuth0();
  return (
    <div className={styles['container']}>
      

    <button
      className="border-red-200 py-2 px-3 text-sm rounded border text-red-100 cursor-pointer"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
    </div>
  );
};

export default LogoutButton;
