import React from "react";
import ListCard from "@/components/list/ListCard";
import fs from "fs";
import csv from "csv-parser";
import { DataType } from "@/utils/types/DataType";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import ListContainer from "../../../components/list/ListContainer";

interface IngredientPageProps {
  recipes: DataType[];
}

const IngredientPage = ({ recipes }: IngredientPageProps) => {
  return (
    <ListContainer>
      {recipes.map((recipe) => (
        <ListCard key={recipe.RCP_SNO} recipe={recipe} />
      ))}
    </ListContainer>
  );
};

export default IngredientPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const ingredient = context.params?.ingredient;

  if (typeof ingredient !== "string") {
    return { notFound: true };
  }

  const recipes: DataType[] = [];
  const filePath = "public/data/TB_RECIPE_SEARCH.csv";

  await new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        if (data.CKG_MTRL_ACTO_NM === ingredient) {
          recipes.push(data);
        }
      })
      .on("end", resolve)
      .on("error", reject);
  });

  return { props: { recipes } };
};
