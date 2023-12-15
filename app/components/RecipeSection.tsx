import RecipeCard from "./RecipeCard";
import { FC } from "react";

type Recipe = {
  image: string;
  title: string;
  description: string;
};

type RecipeSectionProps = {
  recipes: Recipe[];
};

const RecipeSection: FC<RecipeSectionProps> = ({ recipes }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
