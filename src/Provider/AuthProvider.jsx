import { auth } from '@/Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
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

   // signin user with email and password
   const handleEmailRegister = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // update user 
   const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
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
      handleEmailRegister,
      updateUserProfile
   }

   return (
      <AuthContext.Provider value={authSystems}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;