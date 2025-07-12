
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";

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
    <div className="">
      {/* Main content container */}
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="w-[470px] h-[500px] justify-center pl-2 items-center relative bg-black shadow rounded">

          <div className="w-full max-w-md p-8">
            <h1 className="text-center text-white text-3xl font-bold mb-6">Login</h1>
            <h4 className="text-center text-white font-medium mb-6">Hey Welcome Back, You have been missed</h4>



            <div className="mb-4">
              <label className="block mb-1 text-white">
                Email/Phone No
              </label>
              <input
                type="email"
                placeholder="Email/Phone No."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3  bg-gray-700 text-white rounded-md hover:bg-gray-800"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-1 text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-gray-700 rounded-md hover:bg-gray-800"
              />
            </div>
            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="text-right text-blue-700 mt-4 mb-4">
              <a href="#" className="text-sm hover:text-blue-800">
                Forgot Password?
              </a>
            </div>

            <button
              onClick={handleLogin} 
              className="w-full bg-cyan-400 text-black p-3 rounded-3xl font-semibold hover:bg-cyan-500 transition"
            >
              Log In
            </button>
            {/* Social login options */}
            <div className="flex items-center justify-center gap-6 mt-6 mb-4">
              <button className="bg-white rounded-full p-2 shadow hover:scale-105 transition" title="Login with Google">
                <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#EA4335" d="M12 10.8v3.2h4.5c-.2 1.2-1.4 3.5-4.5 3.5-2.7 0-5-2.2-5-5s2.2-5 5-5c1.5 0 2.5.6 3.1 1.2l2.1-2.1C15.7 5.7 14 5 12 5 7.6 5 4 8.6 4 13s3.6 8 8 8c4.6 0 7.6-3.2 7.6-7.7 0-.5-.1-.9-.2-1.3H12z"/><path fill="#34A853" d="M12 21c2.4 0 4.4-.8 5.9-2.2l-2.8-2.3c-.8.5-1.8.8-3.1.8-2.4 0-4.4-1.6-5.1-3.7H4.1v2.3C5.6 19.6 8.6 21 12 21z"/><path fill="#4A90E2" d="M17.9 18.8c1.5-1.4 2.4-3.4 2.4-5.8 0-.5-.1-.9-.2-1.3H12v3.2h4.5c-.2 1.2-1.4 3.5-4.5 3.5-2.7 0-5-2.2-5-5s2.2-5 5-5c1.5 0 2.5.6 3.1 1.2l2.1-2.1C15.7 5.7 14 5 12 5 7.6 5 4 8.6 4 13s3.6 8 8 8c2.4 0 4.4-.8 5.9-2.2l-2.8-2.3z"/><path fill="#FBBC05" d="M4.1 10.7v2.3h2.8c.3-1.1 1.1-2.1 2.1-2.7l-2.1-2.1C5.1 8.7 4.1 9.6 4.1 10.7z"/></g></svg>
              </button>
              <button className="bg-white rounded-full p-2 shadow hover:scale-105 transition" title="Login with Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#1877F3" d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
              </button>
              <button className="bg-white rounded-full p-2 shadow hover:scale-105 transition" title="Login with Apple">
                <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.04 0-.08 0-.12-.01-.02-.04-.03-.09-.03-.14 0-1.13.93-2.06 2.07-2.06.04 0 .08 0 .12.01.02.04.03.09.03.13zm2.13 4.37c-1.13-.13-2.09.65-2.64.65-.56 0-1.43-.63-2.36-.61-.97.02-1.87.57-2.37 1.45-1.01 1.75-.26 4.34.72 5.76.48.7 1.05 1.48 1.8 1.45.72-.03.99-.47 1.86-.47.87 0 1.12.47 1.87.46.77-.01 1.25-.7 1.72-1.4.54-.78.76-1.54.77-1.58-.02-.01-1.48-.57-1.5-2.25-.01-1.41 1.15-2.08 1.2-2.11-.66-.97-1.68-1.08-2.04-1.1zm-2.13 13.13c-.41 0-.82-.12-1.18-.34-.36-.22-.67-.53-.89-.89-.22-.36-.34-.77-.34-1.18 0-.41.12-.82.34-1.18.22-.36.53-.67.89-.89.36-.22.77-.34 1.18-.34.41 0 .82.12 1.18.34.36.22.67.53.89.89.22.36.34.77.34 1.18 0 .41-.12.82-.34 1.18-.22.36-.53.67-.89.89-.36.22-.77.34-1.18.34z"/></svg>
              </button>
            </div>
            <div className="text-center mt-4 mb-4">
              Do not have an account?
              <Link
              to="/signup"
              className="text-lg text-Blue font-medium hover:text-blue-600 ml-1"
            >
              Sign up
            </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;
