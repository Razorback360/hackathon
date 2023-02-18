import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon, AtSymbolIcon } from '@heroicons/react/24/outline'
import Router from 'next/router';


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
  };
  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-300">
      <div className="login-background w-screen h-screen ">
      <img className='w-full h-full object-cover absolute inset-0' src="/Hexagon.png" alt="Background Image"/>
      <div className="bg-white p-5 rounded-2xl shadow-2xl w-full max-w-md mx-auto ">
        <img src="/logo.png" alt="KFUPM Logo" className="w-52 h-auto mt-[-24px] mx-auto mb-1" />
        <p className="text-2xl text-green-600 mb-4 text-center text-4xl">Welcome to Examology</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold text-gray-600 mb-2">Email</label>
            <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600"
              required
            />
            <button
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-gray-500 hover:text-gray-600 focus:outline-none"
                disabled
              >
                <AtSymbolIcon className="h-5 w-5" />
              </button>
              </div>
                      </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold text-gray-600 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border border-gray-400 py-2 px-3 rounded-lg focus:outline-none focus:ring-green-600 focus:border-green-600 "
                required
              />
              <button
                type="button"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="keepMeSignedIn"
              checked={keepMeSignedIn}
              onChange={() => setKeepMeSignedIn(!keepMeSignedIn)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <label htmlFor="keepMeSignedIn" className="ml-2 block font-medium text-gray-700">
              Keep me signed in
            </label>
          </div>
          <button
            type="submit"
            onClick={()=> {Router.push("/courses")}}
            className="sign-in-button w-full py-2 px-4 rounded-lg text-white font-semibold bg-gradient-to-br from-green-500 to-teal-400 focus:outline-none transition transform duration-300 ease-in-out"
          >
            Sign in
          </button>
          <h6 className="text-center text-gray-500 mt-4">Developed by Code Billiards</h6>
        </form>
      </div>
      </div>
      </div>
    
    )
};

export default Login;
