"use client";

import React from "react";
import axios from "axios";
import { Clothe, User } from "@/interface";
import { useThemeContext } from "@/context/store";
import Card from "../UI/Card";

const AccountPage = () => {
  const { userData, cartItems }: any = useThemeContext();

  const logoutHandler = async () => {
    await axios.get("http://localhost:3000/api/users/logout");
    localStorage.removeItem("user");
    window.location = "/";
  };
  return (
    <div className="">
      <h1 className="text-left text-2xl font-bold">
        Welcome Back {userData?.username}
      </h1>
      <h1 className="text-center text-3xl font-bold">My Cart</h1>

      <section className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-28 place-items-center">
        {cartItems?.map((item: Clothe) => {
          return <Card key={item.id} item={item} />;
        })}
      </section>

      <div className="flex justify-center w-full mt-1">
        <button
          onClick={logoutHandler}
          className="bg-black px-6 py-2 text-gray-300 text-md w-[200px] lg:m-px rounded-md"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AccountPage;
