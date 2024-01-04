import React from "react";
import { DataType } from "@/utils/types/DataType";
import { GetServerSideProps } from "next";
import ListPage from "@/components/list/ListPage";

const SearchPage = ({ recipes }: { recipes: DataType[] }) => {
  return <ListPage recipes={recipes} />;
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchQuery = context.query.search as string | undefined;

  if (!searchQuery) {
    return { notFound: true };
  }
  
  const res = await fetch(`http://localhost:3001/list?search=${searchQuery}`);
  const recipes = await res.json();

  if (recipes.length === 0) {
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  return { props: { recipes } };
};