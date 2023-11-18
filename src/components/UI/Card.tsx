/* eslint-disable @next/next/no-img-element */

import { Clothe } from "@/interface";
import Link from "next/link";
import React from "react";

const Card = ({ item }: { item: Clothe }) => {
  return (
    <Link href={`/clothes/${item.id}`} className="hover:scale-110 duration-300">
      <img src={item.image} alt="coat" className="w-[250px] cursor-pointer" />
      <p className="text-sm text-[hsl(0,0%,63%)] mt-2">{item?.brand}</p>
      <p className="font-semibold">{item.title}</p>
      <p className="text-[hsl(0,0%,50%)]">{item.desc}</p>

      <div className="flex items-center mt-4 justify-between">
        <p className={`${item.isInSale && "text-red-500"}`}>
          ${item.price},000
        </p>

        {item.isInSale && <p className="line-through">${item.oldPrice},000</p>}
      </div>
    </Link>
  );
};

export default Card;
