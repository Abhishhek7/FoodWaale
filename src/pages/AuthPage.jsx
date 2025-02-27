import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Please enter name and password.");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name }));
    setIsLoggedIn(true);
    navigate("/"); // Redirect to Home after login
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLoggedIn ? "Welcome!" : "Login"}
        </h2>
        
        {isLoggedIn ? (
          <>
            <p className="text-center mb-4">You are logged in.</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg mt-2"
            >
              Logout
            </button>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 mt-1"
              />
            </label>

            <label className="block mb-2">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 mt-1"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-4"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-400 mt-2">
              <button
                onClick={() => alert("Forgot password feature coming soon!")}
                className="text-blue-400 underline"
              >
                Forgot Password?
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
