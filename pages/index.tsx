import fs from 'fs';
import csv from 'csv-parser';
import { GetServerSideProps } from 'next';

import HeroSection from "../app/components/HeroSection";
import HERO_SECTION_LIST from "@/utils/constants/HeroSectionList";
import RecipeSection from "../app/components/RecipeSection";

export default function Home( { data }: any) {
  return (
    <>
      <HeroSection sections={HERO_SECTION_LIST}/>
      {/* <RecipeSection recipes={data}/> */}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const recipes: any[] = [];

  const filePath = 'public/data/TB_RECIPE_SEARCH.csv';
  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: string) => recipes.push(data))
      .on('end', resolve)
      .on('error', reject);
  });
  
  return { props: { recipes } };
};
