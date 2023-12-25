import React, {FC} from 'react';
import styles from './DetailModal.module.css';
import { DataType } from '@/utils/types/DataType';
import Video from '../common/Video';
import Card from '../common/Card';

interface DetailModalProps {
  recipe: DataType | null;
  closeModal: () => void;
}

const DetailModal: FC<DetailModalProps> = ({ recipe, closeModal }) => {
  if (!recipe) return null;
  
  return (
    <div className={styles.modalBackground} onClick={closeModal}>
      <Card>
      <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
        <div className={styles.modalCloseBtn} onClick={closeModal}>×</div>
        <div className={styles.modalContent}>
          <div className={styles.videoContainer}>
            <Video youtubeId={recipe.Y_ID} />
          </div>
          <div className={styles.detailsContainer}>
            <div>{recipe.CKG_NM}</div>
          </div>
        </div>
      </div>
      </Card>
    </div>
  );
};

export default DetailModal;
