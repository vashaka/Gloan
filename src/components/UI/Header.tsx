"use client";

import { useThemeContext } from "@/context/store";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { userData, isCartOpen, setIsCartOpen, cartItems }: any =
    useThemeContext();
  return (
    <>
      <header className="flex mt-6 justify-between items-center">
        <ul className="flex text-[#222]">
          <Link
            href={"/brands"}
            className="hover:bg-[hsl(0,0%,96%)] px-4 py-2 hover:text-gray-600 duration-200"
          >
            <li>Brands</li>
          </Link>
          <Link
            href={"/clothing"}
            className="hover:bg-[hsl(0,0%,96%)] px-4 py-2 hover:text-gray-600 duration-200"
          >
            <li className="font-[400]">Clothing</li>
          </Link>
        </ul>

        <Link href={"/"}>
          <h1 className="font-bold lg:text-4xl text-xl">GLOAN</h1>
        </Link>

        <ul className="flex">
          {userData ? (
            <Link href={"/account"}>
              <h1 className="mr-4 bg-red-500 rounded-full w-6 flex items-center justify-center text-white -mt-[2px]">
                {userData.username.substring(0, 1).toUpperCase()}
              </h1>
            </Link>
          ) : (
            <Link href={"/account"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          )}

          <div className="flex">
            {isCartOpen ? (
              <div
                onClick={() => {
                  localStorage.removeItem("open");
                  setIsCartOpen(false);
                }}
                className="hover:cursor-pointer hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            ) : (
              <div
                onClick={() => {
                  localStorage.setItem("open", "true");
                  setIsCartOpen(true);
                }}
                className="hover:cursor-pointer hover:text-gray-500 relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p className="absolute bg-red-500 w-[15px] flex justify-center items-center text-xs h-[15px] text-white -top-1 -right-1 rounded-full z-0">
                  {cartItems?.length}
                </p>
              </div>
            )}
          </div>
        </ul>
      </header>
      <span className=" border-b border-[#ededed] flex py-2"></span>
    </>
  );
};

export default Header;
