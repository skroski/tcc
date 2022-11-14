import styles from './profile.module.scss';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';


export function Profile() {
  const { user } = useAuth0();


  return (
    <div className="flex">
      
      <h1 className="text-purple-300 pr-4">Bem Vindo, {user?.name}</h1>
   
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-full w-8 h-8"
          />
   
      
    </div>
  );
};


export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <div>Loading...</div>,
});
