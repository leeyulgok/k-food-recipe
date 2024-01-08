import RecipeCard from "./RecipeCard";
import { FC } from "react";
import { DataType } from "@/utils/types/DataType";
import styles from "./RecipeSection.module.css";
import { POPULAR_VIEWS } from "@/utils/constants/default";
import useSearch from "@/hooks/useSearch";
import DetailModal from "../modal/DetailModal";

type RecipeSectionProps = {
  recipes: DataType[];
};

const RecipeSection: FC<RecipeSectionProps> = ({ recipes }) => {
  const { handleClick} = useSearch();
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>{POPULAR_VIEWS}</h1>
        <div className={styles.grid}>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.RCP_SNO} recipe={recipe} handleClick={handleClick} />
          ))}
        </div>
      </div>
      <DetailModal />
    </section>
  );
};

export default RecipeSection;
