import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./../Firebase/firebase.init";
import axios from "axios";
import { useAxiosCommon } from "../Axios/useAxiosCommon";

export const FoodContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create User with Google
  const createUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Login User with email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // reset Password
  const resetUserPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  /* Sign Out */
  const SignOutUser = () => {
    setUser(null);
    return signOut(auth);
  };
  // Update Profile
  const updateUserProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Current user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        useAxiosCommon()
          .post(`/signup`, {
            name: currentUser?.displayName,
            email: currentUser?.email,
          })
          .then((response) => {
            window.localStorage.setItem("access-token", response.data.token);
          });
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    createUserWithGoogle,
    resetUserPassword,
    loginUser,
    SignOutUser,
    updateUserProfile,
  };
  return (
    <FoodContext.Provider value={AuthInfo}>{children}</FoodContext.Provider>
  );
};

export default AuthContext;
