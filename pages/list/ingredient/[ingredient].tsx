import React from "react";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import { DataType } from "@/utils/types/DataType";
import { readCsvData } from "@/utils/func/readCsvData";
import ListPage from "@/components/list/ListPage";
import INGREDIENT from "@/utils/constants/ingredientList";

const IngredientPage = ({ recipes }: { recipes: DataType[] }) => {
  return <ListPage recipes={recipes} />;
};

export default IngredientPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const ingredient = context.params?.ingredient;
  const validIngredient = INGREDIENT.LIST;

  if (!validIngredient.includes(ingredient as string)) {
    return { notFound: true };
  }

  if (typeof ingredient !== "string") {
    return { notFound: true };
  }

  const res = await fetch(`http://localhost:3001/list/ingredient/${ingredient}`);
  const recipes = await res.json();

  return { props: { recipes } };
};
