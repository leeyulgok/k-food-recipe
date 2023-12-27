import React from "react";
import { readCsvData } from "@/utils/func/readCsvData";
import { DataType } from "@/utils/types/DataType";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import ListPage from "@/components/list/ListPage";

const SearchPage = ({ recipes }: { recipes: DataType[] }) => {
  return <ListPage recipes={recipes} />;
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
