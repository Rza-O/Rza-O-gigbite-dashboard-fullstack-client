import { auth } from '@/Firebase/firebase.config';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
const axiosPublic = useAxiosPublic();

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

   // Login with email and password
   const handleLogin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
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
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
         setUser(currentUser);
         if (currentUser) {
            const userInfo = { email: currentUser?.email };
            try {
               const res = await axiosPublic.post('/jwt', userInfo);
               if (res.data.token) {
                  localStorage.setItem('access-token', res.data.token);
               }
            } catch (error) {
               console.log('Error fetching token',error)
            } finally {
               setLoading(false)
            }
         }
         else {
            localStorage.removeItem('access-token');
            setLoading(false);
         }
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
      updateUserProfile, 
      handleLogin
   }

   return (
      <AuthContext.Provider value={authSystems}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;