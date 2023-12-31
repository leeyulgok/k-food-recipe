import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

const DynamicListPage = () => {
  return (
    <div>
      <h2>404 - This page could not be found.</h2>
    </div>
  );
};

export default DynamicListPage;

const validPaths = ["ingredient", "cookingMethod"];

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params: ParsedUrlQuery | undefined = context.params;

  const slug = params?.slug;

  const slugArray = Array.isArray(slug) ? slug : slug ? [slug] : [];

  if (slugArray.length === 0 || !validPaths.includes(slugArray[0])) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};
