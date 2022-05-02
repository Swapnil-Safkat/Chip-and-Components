import React from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate, useLocation} from 'react-router-dom';
import auth from '../../../Firebase.init';

const RequiredAuth = ({children}) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (user)
    // if (user.providerData[0]?.providerId === 'password' && !user.emailVerified)
    //   <h1>Email Not Verified</h1>
    // else
      return children
  else 
    return <Navigate to={'/login'}
      state={
        {from: location}
      }
      replace/>
  
};

export default RequiredAuth;
