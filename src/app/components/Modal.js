import React, { useState } from "react";

const Modal = ({ isOpen, setModal }) => {
  const [password, setPassword] = useState(true);
  const [passwordState, setPasswordState] = useState(true);
  const [showPasswordState, setShowPasswordState] = useState(false);
  const showPassword = () => {
    setPassword(!password);
    setPasswordState(!passwordState);
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  const handleChange = () => {
    setShowPasswordState(true);
  };
  return (
    <>
      <div
        className="bg-white md:w-6/12 w-3/4 h-[400px] fixed left-[50%] top-[25%] translate-x-[-50%] translate-y-[50%} p-2 shadow-[5px 30px 180px 90px black]"
        style={{ display: isOpen ? "none" : "block" }}
      >
        <p className="text-3xl text-black text-center mt-3">Login</p>
        <form>
          <input
            placeholder="Email Address"
            name="emailAddress"
            className="border-blue-500 border-[1px] w-full p-3 outline-none my-2"
          />
          <input
            placeholder="Password"
            name="Password"
            type={password ? "password" : "text"}
            className="border-blue-500 border-[1px] w-full p-3 outline-none mb-2 relative"
            onChange={handleChange}
          />
          <span
            className="absolute top-[135px] right-5 cursor-pointer"
            onClick={showPassword}
            style={{ display: showPasswordState ? "inline-block" : "none" }}
          >
            {passwordState ? "show" : "hide"}
          </span>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 p-2 hover:bg-blue-700 text-white active:bg-blue-800 w-[25%]"
              onClick={handleClick}
            >
              Login
            </button>
          </div>

          <div>
            <p className="text-center mt-2">
              Don't Have An Account?
              <a href="#" className="text-blue-900">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
