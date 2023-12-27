import React, { FC } from "react";
import styles from "./DetailModal.module.css";
import { DataType } from "@/utils/types/DataType";
import Video from "../common/Video";
import Card from "../common/Card";
import BadgeContainer from "./BadgeContainer";
import InfoBox from "./InfoBox";
import { INGREDIENT, EXPLANATION, DETAIL_MODAL_INFO } from "@/utils/constants/default";

interface DetailModalProps {
  recipe: DataType | null;
  closeModal: () => void;
}

const DetailModal: FC<DetailModalProps> = ({ recipe, closeModal }) => {
  if (!recipe) return null;

  const {
    RCP_SNO, CKG_NM, CKG_NM_KO, RGTR_NM, INQ_CNT, RCMM_CNT, SRAP_CNT,
    CKG_MTH_ACTO_NM, CKG_STA_ACTO_NM, CKG_INBUN_NM, CKG_DODF_NM, CKG_TIME_NM,
    CKG_IPDC, Y_ID
  } = recipe;

  const ingredients = recipe.CKG_MTRL_CN.split(" | ");

  const badgeTexts = [
    CKG_MTH_ACTO_NM,
    CKG_STA_ACTO_NM,
    CKG_INBUN_NM,
    CKG_DODF_NM,
    CKG_TIME_NM
  ];

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
                  <div className={styles.recipeNunber}>#{RCP_SNO}</div>
                  <BadgeContainer badges={badgeTexts} />
                </div>
                <Video youtubeId={Y_ID} />
              </div>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>
                  {CKG_NM} ({CKG_NM_KO})
                </h2>
                <div className={styles.defaultInfo}>
                  <p>{DETAIL_MODAL_INFO.WRITTER} : {RGTR_NM}</p>
                  <p>{DETAIL_MODAL_INFO.VIEWS} : {INQ_CNT}</p>
                  <p>{DETAIL_MODAL_INFO.RECOMMENDATIONS} : {RCMM_CNT}</p>
                  <p>{DETAIL_MODAL_INFO.SCRAPS} : {SRAP_CNT}</p>
                </div>
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <InfoBox type="ingredients" title={INGREDIENT} content={ingredients} />
              <InfoBox type="explanation" title={EXPLANATION} content={CKG_IPDC} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DetailModal;
