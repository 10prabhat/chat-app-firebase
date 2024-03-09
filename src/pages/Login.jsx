import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { currentUser, signGoogle } = UserAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Join the conversation, meet new people guys</p>
          <button onClick={handleLogin} className="btn btn-primary">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
