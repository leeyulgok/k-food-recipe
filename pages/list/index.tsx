import React from "react";
import ListLayout from "./ListLayout";
import fs from "fs";
import csv from "csv-parser";
import { DataType } from "@/utils/types/DataType";
import { GetServerSidePropsContext, GetServerSideProps } from "next";

interface SearchPageProps {
  recipes: DataType[];
}

const SearchPage = ({ recipes }: SearchPageProps) => {
  return (
    <ListLayout>
      {recipes.map((recipe) => (
        <div key={recipe.RCP_SNO}>
          {recipe.CKG_NM}, {recipe.CKG_NM_KO}, {recipe.CKG_MTRL_ACTO_NM} ,
          {recipe.CKG_MTH_ACTO_NM}
        </div>
      ))}
    </ListLayout>
  );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const searchQuery = context.query.search as string;

  const recipes: DataType[] = [];
  const filePath = "public/data/TB_RECIPE_SEARCH.csv";

  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        if (data.CKG_NM.toLowerCase().includes(searchQuery.toLowerCase())) {
          recipes.push(data);
        }
      })
      .on("end", resolve)
      .on("error", reject);
  });

  return { props: { recipes } };
};
