import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useRegister from '../Hooks/useRegister';

export  const AuthContext=createContext();

const AuthProvider = ({children}) => {
 const fullAuth=useRegister()
    return (
      <AuthContext.Provider value={fullAuth}>
          {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;