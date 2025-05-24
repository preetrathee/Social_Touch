
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // const data = {
    //   email: email,
    //   password: password,
    // };
    // const users = async () => {
      
    //   try {
    //     const response = await userLogin(data); // Ensure this returns a Response object
    //     // const result = await response.json(); // Parse JSON response
  
    //     // console.log("Raw response:", response);
    //     console.log("Parsed result:", response.message);
  
    //     if (response.message=="Login successful") {
    //       console.log("✅ Login successful");
    //       console.log("Access Token:", response.access);
    //       console.log("Refresh Token:", response.refresh);
    //       localStorage.setItem("access_token", response.access);
    //       localStorage.setItem("refresh_token", response.refresh);
    //       navigate("/");
    //     } else {
    //       setError(response.message || "Invalid email or password");
    //     }
    //   } catch (err) {
    //     console.error("❌ Login error:", err);
    //     setError("Invalid email or Password ");
    //   }
    // };
  
    // users();
  };

  // useEffect(() => {
  //   handleLogin();
  // }, [])
  
  

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main content container */}
      <div className="flex flex-1 p-8">
        {/* Left side - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <img src="/assets/Login.png" alt="Login" className="w-full h-auto" />
        </div>

        {/* Right side - Login form */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-white relative">
          {/* IOCL Logo */}
          <div className="absolute top-2 right-4">
            <img
              src="/assets/iocl_logo.jpg"
              alt="IOCL Logo"
              className="h-24 w-auto"
            />
          </div>

          <div className="w-full max-w-md p-8">
            <h2 className="text-center text-3xl font-bold mb-6">Login</h2>


            <div className="mb-4">
              <label className="block mb-1 text-gray-400 font-medium">
                Email or Username
              </label>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-gray-400 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="text-right mt-4 mb-4">
              <a href="#" className="text-sm hover:text-blue-600">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={handleLogin} 
              className="w-full bg-orange-500 text-white p-3 rounded-md font-semibold hover:bg-orange-600 transition"
            >
              Log In
            </button>
            <div className="text-center mt-4 mb-4">
              Do not have an account?
              <a
                href="#"
                className="text-sm text-black font-medium hover:text-blue-600"
              >
                Sign in
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
