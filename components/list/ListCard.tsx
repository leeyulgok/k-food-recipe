import { FC, useRef } from "react";
import { DataType } from "@/utils/types/DataType";
import Card from "../common/Card";
import styles from "./ListCard.module.css";
import Badge from "../common/Badge";
import Thumbnail from "../common/Thumbnail";

interface ListCardProps {
  recipe: DataType;
  onClick: (recipe: DataType) => void;
  isModalOpen: boolean;
}

const ListCard: FC<ListCardProps> = ({ recipe, onClick, isModalOpen }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (onClick) {
      onClick(recipe);
    }
  };

  const {
    RCP_SNO,
    CKG_NM,
    CKG_NM_KO,
    RGTR_NM,
    CKG_MTH_ACTO_NM,
    CKG_STA_ACTO_NM,
    INQ_CNT,
    CKG_INBUN_NM,
    CKG_DODF_NM,
    CKG_TIME_NM,
    Y_ID,
  } = recipe;

  return (
    <Card ref={cardRef} onClick={handleClick} isModalOpen={isModalOpen}>
      <div className={styles.listCard}>
        <div className={styles.thumbnailContainer}>
          <Thumbnail youtubeId={Y_ID} />
        </div>
        <div className={styles.recipeCardHeader}>
          <div className={styles.headerBox}>
            <div className={styles.recipeNumber}>
              #{RCP_SNO} / {RGTR_NM}
            </div>
            <div className={styles.recipeNumber}>views : {INQ_CNT}</div>
            <div className={styles.titleBox}>
              <h2 className={styles.recipeTitleEn}>{`${CKG_NM}`}</h2>
              <h3 className={styles.recipeTitleKo}>{`(${CKG_NM_KO})`}</h3>
            </div>
          </div>
          <div className={styles.recipeDetails}>
            <Badge text={CKG_MTH_ACTO_NM} />
            <Badge text={CKG_STA_ACTO_NM} />
            <Badge text={CKG_INBUN_NM} />
            <Badge text={CKG_DODF_NM} />
            <Badge text={CKG_TIME_NM} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListCard;
