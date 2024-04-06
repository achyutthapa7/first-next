import Link from "next/link";
import React from "react";

const Nav = ({ handleClick }) => {
  return (
    <div className="w-full h-14 flex justify-around px-3 items-center shadow-lg sticky top-0 z-50 bg-slate-700">
      <div className="w-[40px] h-[40px]">
        <img src="" className="w-full h-full rounded-full"></img>
      </div>
      <div className="md:flex hidden">
        <Link href="/" className="p-3 mx-3 hover:bg-neutral-400 text-white">
          Home
        </Link>
        <Link
          href="/about"
          className="p-3 mx-3 hover:bg-neutral-400 text-white"
        >
          About
        </Link>
        <Link
          href="/service"
          className="p-3 mx-3 hover:bg-neutral-400 text-white"
        >
          Service
        </Link>
        <Link
          href="/contact"
          className="p-3 mx-3 hover:bg-neutral-400 text-white"
        >
          Contact
        </Link>
      </div>
      <div className="flex">
        <button
          className="p-3 mx-2 hover:bg-blue-800 text-white"
          onClick={handleClick}
        >
          Login
        </button>
        <button className="p-3 mx-2 hover:bg-green-500 text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;
