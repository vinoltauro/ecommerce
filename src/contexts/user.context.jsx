import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = React.createContext({});

export const UserProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const value = { currentUser, setcurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
         createUserDocumentFromAuth(user)

      }
      console.log(user);
      setcurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
