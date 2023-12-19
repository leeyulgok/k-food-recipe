import React, { FC } from "react";
import { DataType } from "@/utils/types/DataType";
import styles from "./RecipeCard.module.css";
import Badge from "../common/Badge";
import Video from "../common/Video";

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

  return (
    <div className={styles.recipeCard}>
      <div className={styles.recipeCardHeader}>
        <div className={styles.headerBox}>
          <div className={styles.recipeNumber}>#{RCP_SNO}</div>
          <h2 className={styles.recipeTitle}>{`${CKG_NM} (${CKG_NM_KO})`}</h2>
        </div>
        <div className={styles.recipeDetails}>
          <Badge text={CKG_MTH_ACTO_NM} />
          <Badge text={CKG_STA_ACTO_NM} />
          <Badge text={CKG_INBUN_NM} />
          <Badge text={CKG_DODF_NM} />
          <Badge text={CKG_TIME_NM} />
        </div>
      </div>
      <Video youtubeId={Y_ID} />
    </div>
  );
};

export default RecipeCard;