import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { DataType } from "@/utils/types/DataType";
import { readCsvData } from "@/utils/func/readCsvData";
import ListPage from "@/components/list/ListPage";
import COOKING_METHOD from "@/utils/constants/cookingMethodList";

const CookingMethodPage = ({ recipes }: { recipes: DataType[] }) => {
  return <ListPage recipes={recipes} />;
};

export default CookingMethodPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookingMethod = context.params?.cookingMethod;
  const validCookingMethod = COOKING_METHOD.LIST

  if (!validCookingMethod.includes(cookingMethod as string)) {
    return { notFound: true };
  }

  if (typeof cookingMethod !== "string") {
    return { notFound: true };
  }

  const res = await fetch(`http://localhost:3001/list/cookingMethod/${cookingMethod}`);
  const recipes = await res.json();

  return { props: { recipes } };
};
