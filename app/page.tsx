"use client"

import HeroSection from "./components/HeroSection";
import HERO_SECTION_LIST from "@/utils/constants/HeroSectionList";

export default function Home() {
  return (
    <>
      <HeroSection sections={HERO_SECTION_LIST}/>
    </>
  );
}
