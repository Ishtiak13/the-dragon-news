import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]=useState(true)







  const createUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  };

const login=(email,password)=>{
    setUser(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const googleProvider = new GoogleAuthProvider()
const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}
const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
}

const logOut = ()=>{
    setUser(false)
    return signOut(auth)
}
  //!   ///////////// ////////////////////////////////

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    login,
    loginWithGoogle,
    updateUser,
    logOut,
    loading,
    setLoading
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
