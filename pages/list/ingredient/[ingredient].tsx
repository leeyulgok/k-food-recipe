import React, { ReactNode } from "react";
import { DataType } from "@/utils/types/DataType";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import ListLayout from "@/components/list/ListLayout";
import { readCsvData } from "@/utils/func/readCsvData";

interface IngredientPageProps {
  recipes: DataType[];
  children: ReactNode;
}

const IngredientPage = ({ recipes, children }: IngredientPageProps) => {
  return <ListLayout recipes={recipes}>{children}</ListLayout>;
};

export default IngredientPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const ingredient = context.params?.ingredient;

  if (typeof ingredient !== "string") {
    return { notFound: true };
  }

  const recipes = await readCsvData(
    (data) => data.CKG_MTRL_ACTO_NM === ingredient
  );

  return { props: { recipes } };
};
