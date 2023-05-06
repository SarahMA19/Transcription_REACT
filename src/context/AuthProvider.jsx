import axios from "axios";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { WEB_URL } from "../lib/CONSTENTS";



export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
  });
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  } );

  
  // setPersistence(auth, browserSessionPersistence)
  //   .then(() => {
  //     // Existing and future Auth states are now persisted in the current
  //     // session only. Closing the window would clear any existing state even
  //     // if a user forgets to sign out.
  //     // ...
  //     // New sign-in will be persisted with session persistence.
  //     return signInWithPopup(auth);
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

  async function postLogin(user) {
    const body = {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      container_name: user.container_name,
    };

    const headers = {
        "Ocp-Apim-Subscription-Key": "5cb74fcedeb14edd8eee96bc0634288b",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };

    const res = await axios.post(WEB_URL + '/api/users', body, headers);
    console.log("After sign in: ", user);
    console.log(res);
  }
  

  async function login() {
    toast.loading("Signing in...", { id: "signin" });
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        postLogin(user);
        console.log(user);
        toast.remove("signin");
        toast.success("Signed in successfully!🤩");
      })
      .catch((err) => {
        toast.error("Failed to sign in.");
      });
  }

  async function logout() {
    const signoutPromise = signOut(auth);
    toast.promise(signoutPromise, {
      loading: "Signing out...",
      success: "Signed out successfully.",
      error: "Failed to sign out.",
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser({
          uid: userInfo.uid,
          displayName: userInfo.displayName,
          loggedIn: true,
          email: userInfo.email,
        });console.log(user)
      } else {
        setUser({
          loggedIn: false,
        });console.log(user)
      }
    });
  }, []);

  const value = {
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};