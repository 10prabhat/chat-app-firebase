import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sticky top-0 z-10 bg-base-300">
      <div className="containerWrap navbar  flex text-white justify-between">
        <p className="text-xl font-bold">
          <Link to="/">iChat</Link>
        </p>
        <div>
          {currentUser ? (
            <button onClick={handleLogout} className="btn btn-ghost text-lg">
              Logout
            </button>
          ) : (
            "Welcome to our app"
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
