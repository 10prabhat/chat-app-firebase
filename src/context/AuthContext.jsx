import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebase";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(currentUser)
  const [loading, setLoading] = useState(true);

  //   sign in with google
  const signGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // sign out
  const logout = () => {
    return signOut(auth);
  };
  const value = {
    currentUser,
    setCurrentUser,
    signGoogle,
    logout,
  };
  // setCurrent User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex justify-center h-screen items-center">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
