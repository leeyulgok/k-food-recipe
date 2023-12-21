import React from 'react';
import ListContainer from '../ListContainer';
import ListCard from '@/components/list/ListCard';
import fs from 'fs';
import csv from 'csv-parser';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { DataType } from '@/utils/types/DataType';

interface CookingMethodPageProps {
  recipes: DataType[];
}

const CookingMethodPage = ({ recipes }: CookingMethodPageProps) => {
  return (
    <ListContainer>
      {recipes.map((recipe) => (
        <ListCard key={recipe.RCP_SNO} recipe={recipe} />
      ))}
    </ListContainer>
  );
};

export default CookingMethodPage;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const cookingMethod = context.params?.cookingMethod;

  if (typeof cookingMethod !== 'string') {
    return { notFound: true };
  }
  
  const recipes: DataType[] = [];
  const filePath = 'public/data/TB_RECIPE_SEARCH.csv';

  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => {
        if (data.CKG_MTH_ACTO_NM === cookingMethod) {
          recipes.push(data);
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });
  
  return { props: { recipes } };
};