/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Card from "../UI/Card";
import { Clothe } from "@/interface";
import axios from "axios";
import { useThemeContext } from "@/context/store";
import Link from "next/link";

export default function ClothesSection() {
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
      <div className="sm:flex flex-col sm:flex-row sm:justify-between justify-center">
        <div className="flex mt-20 justify-center">
          <button
            onClick={filterClothes}
            className={`flex items-center font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
              categoryName === "all" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
            }`}
          >
            All
          </button>

          <button
            onClick={filterClothes}
            className={`flex items-center ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
              categoryName === "jackets" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
            }`}
          >
            Jackets
          </button>

          <button
            onClick={filterClothes}
            className={`flex items-center ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
              categoryName === "t-shirts" ? "bg-[hsl(0,0%,90%)]" : "bg-white"
            }`}
          >
            T-shirts
          </button>

          <button
            onClick={filterClothes}
            className={`flex items-center ml-2 font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,90%)] ${
              categoryName === "shorts" ? "bg-[hsl(0,0%,90%)]" : "bg-white "
            }`}
          >
            Shorts
          </button>
        </div>

        <Link
          href={"/clothing"}
          className="flex sm:mt-20 mt-4 justify-center md:justify-normal"
        >
          <button className="py-2 px-6 border-[1px] bg-black border-[#222] hover:bg-[hsl(0,0%,18%)] text-[#ededed] rounded-md">
            Show More
          </button>
        </Link>
      </div>

      <section className="mt-8 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gird-cols-1 gap-28 place-items-center">
        {clothes.slice(0, 4)?.map((item: Clothe) => {
          return <Card key={item.id} item={item} />;
        })}
      </section>

      <Link href={"/clothing"} className="flex mt-6 justify-center">
        <button className="py-2 px-6 border-[1px] bg-black border-[#222] hover:bg-[hsl(0,0%,18%)] text-[#ededed] rounded-md">
          Show More
        </button>
      </Link>

      {loading && (
        <h1 className="text-center text-black text-3xl">Loading...</h1>
      )}
      {clothes.length < 1 && (
        <h1 className="text-center text-black font-semibold text-3xl">
          Nothing Found.
        </h1>
      )}
    </div>
  );
}
