import React, { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { DataType } from '@/utils/types/DataType';
import { readCsvData } from '@/utils/func/readCsvData';

import HeroSection from '@/components/hero/HeroSection';
import HERO_SECTION_LIST from "@/utils/constants/heroSectionList";
import RecipeSection from "@/components/recipe/RecipeSection";
import DataContext from '../contexts/DataContext';
import useTopRecipes from '../hooks/useTopRecipes';

interface HomeProps {
  recipes: DataType[];
}

export default function Home({ recipes }: HomeProps) {
  const { updateData } = useContext(DataContext);

  useEffect(() => {
    updateData(recipes);
  }, [recipes]);

  const topRecipes = useTopRecipes();
  
  return (
    <>
      <HeroSection sections={HERO_SECTION_LIST}/>
      <RecipeSection recipes={topRecipes}/>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader('Set-Cookie', 'token=value; Path=/; SameSite=None; Secure; HttpOnly');
  
  const recipes = await readCsvData();
  
  return { props: { recipes } };
};
