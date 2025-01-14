import { auth } from '@/Firebase/firebase.config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // google login
   const googleProvider = new GoogleAuthProvider();
   const handleGoogleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }


   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }





   // observer
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         console.log(currentUser);
         setLoading(false)
      })

      return () => {
         unsubscribe();
      }
   }, []);


   const authSystems = {
      user,
      loading,
      setLoading,
      handleGoogleLogin,
      logOut,
   }

   return (
      <AuthContext.Provider value={authSystems}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;