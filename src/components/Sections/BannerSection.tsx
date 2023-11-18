/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const BannerSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="flex justify-center flex-col xl:p-20 py-10 p-0 pr-5 text-center">
        <h1 className="text-5xl font-semibold">BEAT 010: HIP HOP 50</h1>

        <p className="lg:text-lg md:text-md text-sm mt-8">
          Nas and Futura has colla Nas and Futura has colla Nas and Futura has
          colla Nas and Futura has colla Nas and Futura has colla Nas and Futura
          has colla
        </p>

        <Link href={"/clothing"} className="flex justify-center mt-8">
          <button className="flex font-semibold border-[1px] border-black px-3 py-1.5 rounded-xl hover:bg-[hsl(0,0%,97%)]">
            Shop Now
          </button>
        </Link>
      </div>

      <Link href={"/clothing"} className="flex justify-center">
        <img
          src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/101118/data/f4facacb77dece43df69d9deabc66f28/1x1_messaging-side/637/2023-08-23-ww-1-web-beat-010-nas-x-12on12-beat-multicategory-hero-img.jpeg"
          alt="right-img"
        />
      </Link>
    </div>
  );
};
