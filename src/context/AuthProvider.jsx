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
    user.container_name = res.data.user.container_name
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
          container_name: userInfo.container_name
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