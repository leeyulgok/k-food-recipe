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
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  if (typeof ingredient !== "string") {
    return { notFound: true };
  }

  const recipes = await readCsvData(
    (data) => data.CKG_MTRL_ACTO_NM === ingredient
  );

  return { props: { recipes } };
};
