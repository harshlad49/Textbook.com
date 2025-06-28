import React, { useState } from "react";

const Login = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="bg-white flex w-[80vw] h-[80vh] rounded-lg overflow-hidden shadow-2xl">
     
        <div className="w-1/2 p-10 relative overflow-y-auto">
          <img src="/imgi_85_logo-testbook.svg" alt="logo" className="h-12 mb-6" />
          <h2 className="text-2xl font-semibold mb-2">
            {isLogin ? "Login to Testbook" : "Create your Testbook Account"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {isLogin
              ? "Continue with your Mobile Number / Email"
              : "Sign up quickly using your Mobile Number"}
          </p>

          
          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="Email or Mobile Number"
                className="w-full border rounded px-4 py-2 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded px-4 py-2 mb-4"
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border rounded px-4 py-2 mb-4"
            />
          )}

         
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-4">
            {isLogin ? "Continue" : "Sign Up"}
          </button>

         
          <p className="mt-6 text-sm">
            {isLogin ? (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </span>
              </>
            )}
          </p>

         
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>

       
        <div className="w-1/2 h-full">
          <img
            src="https://cdn.testbook.com/1746180900063-4ac36c61f3df1d5ddfb8993429556a8ca5a8e0cc.png/1746180902.png"
            alt="Promo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
