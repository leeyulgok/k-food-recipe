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
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }

  if (typeof cookingMethod !== "string") {
    return { notFound: true };
  }

  const recipes = await readCsvData(
    (data) => data.CKG_MTH_ACTO_NM === cookingMethod
  );

  return { props: { recipes } };
};
