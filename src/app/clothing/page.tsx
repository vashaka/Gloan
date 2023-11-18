"use client";

import Card from "@/components/UI/Card";
import { useThemeContext } from "@/context/store";
import { Clothe } from "@/interface";
import axios from "axios";
import React, { useState } from "react";

const ClothingPage = () => {
  const { clothes, setClothes }: any = useThemeContext();
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("all");

  const filterClothes = async (e: any) => {
    try {
      setLoading(true);
      const category = e.target.childNodes.item(0).nodeValue.toLowerCase();
      setCategoryName(category);

      const filteredClothes = await axios.post(
        "http://localhost:3000/api/clothes/filter",
        { category }
      );
      setClothes(filteredClothes.data.filteredClothes);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-black font-semibold mt-6">
        DESIGNER CLOTHING FOR MEN
      </h1>
      <p className="mt-2 text-md">
        Give your wardrobe a re-vamp for the season ahead with the impressive
        collection of men’s designer clothes at Farfetch.
      </p>

      <div className="mt-10 flex">
        <button
          onClick={filterClothes}
          className={`cursor-default font-semibold border-[1px] border-[#222] px-3 py-1.5 rounded-xl hidden sm:flex`}
        >
          All Filters
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>

        <button
          onClick={filterClothes}
          className={`flex ml-3 font-semibold border-[1px] border-[#222] px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
            categoryName === "all" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
          }`}
        >
          All
        </button>

        <button
          onClick={filterClothes}
          className={`flex ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
            categoryName === "jackets" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
          }`}
        >
          Jackets
        </button>

        <button
          onClick={filterClothes}
          className={`flex ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
            categoryName === "t-shirts" ? "bg-[hsl(0,0%,90%)]" : "bg-white"
          }`}
        >
          T-shirts
        </button>

        <button
          onClick={filterClothes}
          className={`flex ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
            categoryName === "shorts" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
          }`}
        >
          Shorts
        </button>
      </div>

      {loading && (
        <h1 className="text-center text-black text-3xl">Loading...</h1>
      )}
      {clothes.length < 1 && (
        <h1 className="text-center text-black font-semibold text-3xl">
          Nothing Found.
        </h1>
      )}

      <section className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-28 place-items-center">
        {clothes?.map((item: Clothe) => {
          return <Card key={item.id} item={item} />;
        })}
      </section>
    </div>
  );
};

export default ClothingPage;
