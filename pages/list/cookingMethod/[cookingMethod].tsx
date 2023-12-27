import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { DataType } from "@/utils/types/DataType";
import { readCsvData } from "@/utils/func/readCsvData";
import ListPage from "@/components/list/ListPage";

const CookingMethodPage = ({ recipes }: { recipes: DataType[] }) => {
  return <ListPage recipes={recipes} />;
};

export default CookingMethodPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookingMethod = context.params?.cookingMethod;

  if (typeof cookingMethod !== "string") {
    return { notFound: true };
  }

  const recipes = await readCsvData(
    (data) => data.CKG_MTH_ACTO_NM === cookingMethod
  );

  return { props: { recipes } };
};
