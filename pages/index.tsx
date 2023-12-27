import React from 'react';
import { GetServerSideProps } from 'next';
import { DataType } from '@/utils/types/DataType';
import { readCsvData } from '@/utils/func/readCsvData';

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
  context.res.setHeader('Set-Cookie', 'token=value; Path=/; SameSite=None; Secure; HttpOnly');
  
  let recipes = await readCsvData();

  recipes = recipes.sort((a, b) => b.INQ_CNT - a.INQ_CNT).slice(0, 4);
  
  return { props: { recipes } };
};
