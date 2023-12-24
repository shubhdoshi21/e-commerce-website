import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-20 bg-white">
      <div className="flex w-[100px] mx-5 sm:mx-1 items-center justify-center">
        <Link to="/">
          <img
            className="h-10"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="flex justify-evenly items-center w-2/3 font-semibold px-2 h-full md:hidden">
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          MEN
        </div>
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          WOMEN
        </div>
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          KIDS
        </div>
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          HOME & LIVING
        </div>
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          BEAUTY
        </div>
        <div className="h-full flex justify-center items-center hover:border-b-2 border-purple-800 cursor-pointer">
          STUDIO <sup className="text-red-500">NEW</sup>
        </div>
      </nav>
      <div className="h-10 border border-slate-100 flex items-center w-1/4 rounded-md md:w-1/2">
        <IoSearchOutline className="mx-1" />
        <input
          className="h-10 w-full bg-slate-100 py-1 px-2"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="flex justify-evenly w-1/4 items-center px-2 md:w-1/3 sm:w-[200px]">
        <div className="flex flex-col items-center">
          <IoPerson />
          <span className="xs:hidden">Profile</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHeartCirclePlus />
          <span className="xs:hidden">Wishlist</span>
        </div>
        <div className="flex relative">
          <Link to="/bag" className="flex flex-col items-center">
            <IoBagCheck />
            <span className="xs:hidden">Bag</span>
            <span className="absolute text-center bg-red-400 text-red-100 -top-1 -right-1 px-1 text-sm font-semibold rounded-full xs:-top-2 xs:-right-2 xs:text-xs">
              {bag.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
