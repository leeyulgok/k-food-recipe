import React, { ReactNode } from "react";
import ListLayout from "@/components/list/ListLayout";
import { readCsvData } from "@/utils/func/readCsvData";
import { DataType } from "@/utils/types/DataType";
import { GetServerSidePropsContext, GetServerSideProps } from "next";

interface SearchPageProps {
  recipes: DataType[];
  children: ReactNode;
}

const SearchPage = ({ recipes, children }: SearchPageProps) => {
  return <ListLayout recipes={recipes}>{children}</ListLayout>;
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const searchQuery = context.query.search as string;

  const recipes = await readCsvData((data) =>
    data.CKG_NM.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return { props: { recipes } };
};
