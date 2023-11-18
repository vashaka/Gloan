"use client";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SingleBrandPage = () => {
  const pathname = usePathname();

  const brandName = pathname.split("/brands/")[1];

  useEffect(() => {
    axios
      .post("http://localhost:3000/api/clothes/brands/filter", { brandName })
      .then((resp) => console.log(resp.data));
  }, [brandName]);

  return <div>SingleBrandPage {brandName}</div>;
};

export default SingleBrandPage;
