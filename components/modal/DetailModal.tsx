import React, { FC } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from "@/app/redux/feature/modalSlice";
import styles from "./DetailModal.module.css";
import Video from "../common/Video";
import Card from "../common/Card";
import BadgeContainer from "./BadgeContainer";
import InfoBox from "./InfoBox";
import { RootState } from '@/app/redux/store'; 
import { INGREDIENT, EXPLANATION } from "@/utils/constants/default";
import DefaultInfo from "./DefaultInfo";

const DetailModal: FC = () => {
  const { isVisible, recipe } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  if (!isVisible || !recipe) return null;

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

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className={styles.modalBackground} onClick={handleCloseModal}>
      <Card>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalCloseBtn} onClick={handleCloseModal}>
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
                <DefaultInfo writer={RGTR_NM} views={INQ_CNT} likes={RCMM_CNT} scraps={SRAP_CNT} />
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
