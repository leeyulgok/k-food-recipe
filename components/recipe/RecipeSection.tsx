import RecipeCard from "./RecipeCard";
import { FC } from "react";
import { DataType } from "@/utils/types/DataType";
import styles from "./RecipeSection.module.css";
import { POPULAR_VIEWS } from "@/utils/constants/default";

type RecipeSectionProps = {
  recipes: DataType[];
};

const RecipeSection: FC<RecipeSectionProps> = ({ recipes }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{POPULAR_VIEWS}</h1>
        <div className={styles.grid}>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.RCP_SNO} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
