import React, { ReactNode } from "react";
import { DataType } from "@/utils/types/DataType";
import ListLayout from "@/components/list/ListLayout";

interface ListPageProps {
  recipes: DataType[];
  children?: ReactNode;
}

const ListPage = ({ recipes, children }: ListPageProps) => {
  return <ListLayout recipes={recipes}>{children}</ListLayout>;
};

export default ListPage;
