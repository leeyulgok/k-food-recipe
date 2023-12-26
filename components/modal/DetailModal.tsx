import React, { FC } from "react";
import styles from "./DetailModal.module.css";
import { DataType } from "@/utils/types/DataType";
import Video from "../common/Video";
import Card from "../common/Card";
import Badge from "../common/Badge";

interface DetailModalProps {
  recipe: DataType | null;
  closeModal: () => void;
}

const DetailModal: FC<DetailModalProps> = ({ recipe, closeModal }) => {
  const parseIngredients = (ingredients: string) => {
    return ingredients.split(" | ");
  };

  if (!recipe) return null;

  return (
    <div className={styles.modalBackground} onClick={closeModal}>
      <Card>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalCloseBtn} onClick={closeModal}>
            ×
          </div>
          <div className={styles.modalContent}>
            <div className={styles.mainContainer}>
              <div className={styles.videoContainer}>
                <div className={styles.recipeNumberBox}>
                  <div className={styles.recipeNunber}>#{recipe.RCP_SNO}</div>
                  <div className={styles.badgeBox}>
                    <Badge text={recipe.CKG_MTH_ACTO_NM} />
                    <Badge text={recipe.CKG_STA_ACTO_NM} />
                    <Badge text={recipe.CKG_INBUN_NM} />
                    <Badge text={recipe.CKG_DODF_NM} />
                    <Badge text={recipe.CKG_TIME_NM} />
                  </div>
                </div>
                <Video youtubeId={recipe.Y_ID} />
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                  {recipe.CKG_NM} ({recipe.CKG_NM_KO})
                </h2>
                <div className={styles.defaultInfo}>
                  <p>writter : {recipe.RGTR_NM}</p>
                  <p>views : {recipe.INQ_CNT}</p>
                  <p>recommendations : {recipe.RCMM_CNT}</p>
                  <p>scraps : {recipe.SRAP_CNT}</p>
                </div>
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.ingredientBox}>
                <h3 className={styles.ingredientTitle}>Ingredient</h3>
                <div className={styles.ingredientList}>
                  <ul>
                    {parseIngredients(recipe.CKG_MTRL_CN).map(
                      (ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className={styles.explanationBox}>
                <h3 className={styles.explanationTitle}>Explanation</h3>
                <div className={styles.explanationText}>
                  <p>{recipe.CKG_IPDC}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DetailModal;
