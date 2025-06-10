import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser?.email) {
        axios.post('http://localhost:3000/jwt', {email:currentUser.email},{
          withCredentials: true
        } )
          .then((result) => {
            console.log(result.data)
          }).catch((err) => {
            console.log(err)
          });
      }
      console.log(currentUser)

    });

    return () => unSubscribe();
  }, []);

  const AuthValues = {
    user,
    loading,
    createUser,
    signInUser,
    googleSignIn,
    signOutUser
  };

  return <AuthContext value={AuthValues}>{children}</AuthContext>;
};

export default AuthProvider;
