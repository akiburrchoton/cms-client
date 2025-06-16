import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { AuthContext } from "../Contexts/AuthContext";

function AuthProvider({ children }) {
  const [loggedinUser, setloggedinUser] = useState(null);

  useEffect(() => {
    // To hold the logged in user data
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setloggedinUser(currentUser);
      // setloading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    // Set loading true here

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    // Set loading

    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    loginUser,
    loggedinUser,
    setloggedinUser,
    logoutUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
}

export default AuthProvider;
