import styles from './sign-up-button.module.scss';
import { useAuth0 } from '@auth0/auth0-react';
/* eslint-disable-next-line */
export interface SignUpButtonProps {
}



export function SignUpButton(props: SignUpButtonProps) {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="bg-blue-500 font-white py-3 px-4 border border-blue-800 cursor-pointer rounded"
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Cadastrar-se
    </button>
  );
};


export default SignUpButton;
