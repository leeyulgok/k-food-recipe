import React, { FC } from "react";
import { DataType } from "@/utils/types/DataType";
import styles from "./RecipeCard.module.css";

interface RecipeCardProps {
  recipe: DataType;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe }) => {
  const {
    RCP_SNO,
    CKG_NM,
    CKG_NM_KO,
    CKG_MTH_ACTO_NM,
    CKG_STA_ACTO_NM,
    CKG_INBUN_NM,
    CKG_DODF_NM,
    CKG_TIME_NM,
    Y_ID,
  } = recipe;

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${Y_ID}`;

  return (
    <div className={styles.recipe_card}>
      <div className={styles.recipeCardHeader}>
      <div className={styles.recipeNumber}>#{RCP_SNO}</div>
        <h2>{CKG_NM}</h2>
        <h3>{CKG_NM_KO}</h3>
        <div className={styles.recipeDetails}>
          <span className={styles.badge}>{CKG_MTH_ACTO_NM}</span>
          <span className={styles.badge}>{CKG_STA_ACTO_NM}</span>
          <span className={styles.badge}>{CKG_INBUN_NM}</span>
          <span className={styles.badge}>{CKG_DODF_NM}</span>
          <span className={styles.badge}>{CKG_TIME_NM}</span>
        </div>
      </div>
      <div className={styles.recipeVideo}>
        <iframe
          width="100%"
          height="315"
          src={youtubeEmbedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecipeCard;
