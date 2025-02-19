import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
        <LogIn className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link to="/forgot-password" className="text-purple-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-green-500 transition"
          >
            Log In
          </button>
        </form>
        <div className="my-4 text-gray-500 text-sm">OR</div>
        <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-green-500 transition">
          <img src="./images/google.png" alt="Google" className="h-5 w-5 mr-2" /> Log in with Google
        </button>
        <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-md mt-2 hover:bg-green-500 transition">
          <img src="./images/whatsapp.png" alt="WhatsApp" className="h-5 w-5 mr-2" /> Log in with WhatsApp
        </button>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
