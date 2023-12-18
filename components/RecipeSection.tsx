import RecipeCard from "./RecipeCard";
import { FC } from "react";
import { DataType } from "@/utils/types/DataType";

type RecipeSectionProps = {
  recipes: DataType[];
};

const RecipeSection: FC<RecipeSectionProps> = ({ recipes }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h1 className=" text-3xl font-semibold">Popular views</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
