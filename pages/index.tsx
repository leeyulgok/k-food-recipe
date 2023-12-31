import React from 'react';
import { GetServerSideProps } from 'next';
import { DataType } from '@/utils/types/DataType';

import HeroSection from '@/components/hero/HeroSection';
import HERO_SECTION_LIST from "@/utils/constants/heroSectionList";
import RecipeSection from "@/components/recipe/RecipeSection";

export default function Home({ recipes }: {recipes: DataType[]}) {
  return (
    <>
      <HeroSection sections={HERO_SECTION_LIST}/>
      <RecipeSection recipes={recipes}/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3001/`);
  const recipes = await res.json();

  return { props: { recipes } };
};
