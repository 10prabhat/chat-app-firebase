import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className=" bg-base-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <ChatRoom />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
