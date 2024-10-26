import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function SignupPage() {
  const nav = useNavigate();

  return (<div>
      <Navbar />
 
    <div className="flex flex-col md:flex-row h-screen w-full">

      <div className="relative w-full md:w-1/3 h-1/3 md:h-full bg-gray-200">
        <img
          src="https://i.pinimg.com/736x/a4/96/07/a49607da3c9b74424fcf35c9b7456ed2.jpg"
          alt="DSAIC"
          className="object-cover w-full h-full"
        />
   
        <button
          className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-purple-500 text-white font-medium rounded shadow-md hover:from-green-600 hover:to-purple-600"
          onClick={() => nav("/")}
        >
          Go Back
        </button>
      </div>

      <div className="w-full md:w-2/3 h-full flex flex-col justify-center items-center p-8 bg-gray-100">

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">
            Data Science & Artificial Intelligence Club
          </h1>
          <p className="mt-2 text-lg">Join Us</p>
          <p className="text-md text-gray-600">Become a member of DSAIC</p>
        </div>

        <form className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              placeholder="Create a password"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-green-500 to-purple-500 text-white p-2 rounded hover:from-green-600 hover:to-purple-600">
            Sign Up
          </button>
        </form>


        <p className="mt-4 text-sm">
          Already have an account?
          <a href="/auth/login" className="text-purple-500 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div> 
    <Footer />
    </div>
  );
}

export default SignupPage;
