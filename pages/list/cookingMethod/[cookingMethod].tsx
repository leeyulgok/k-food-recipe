import React, { ReactNode } from "react";
import ListLayout from "@/components/list/ListLayout";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { DataType } from "@/utils/types/DataType";
import { readCsvData } from "@/utils/func/readCsvData";

interface CookingMethodPageProps {
  recipes: DataType[];
  children: ReactNode;
}

const CookingMethodPage = ({ recipes, children }: CookingMethodPageProps) => {
  return <ListLayout recipes={recipes}>{children}</ListLayout>;
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
