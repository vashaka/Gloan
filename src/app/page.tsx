import { BannerSection } from "@/components/Sections/BannerSection";
import ClothesSection from "@/components/Sections/ClothesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-8">
      <BannerSection />
      <ClothesSection />
    </div>
  );
}
