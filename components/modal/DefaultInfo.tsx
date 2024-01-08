import { FC } from "react";
import styles from "./DefaultInfo.module.css";
import User from "../icons/User";
import View from "../icons/View";
import EmptyLike from "../icons/EmptyLike";
import EmptyStar from "../icons/EmptyStar";
import { formatNumber } from "@/utils/func/numberFormat";

interface DefaultInfoProps {
  writer: string;
  views: number;
  likes: number;
  scraps: number;
}

const DefaultInfo: FC<DefaultInfoProps> = ({ writer, views, likes, scraps}) => {
  return (
    <div className={styles.defaultInfoContainer}>
      <div className={styles.defaultInfoBox}>
        <User />
        <div className={styles.descriptionBox}>
          <p>{writer}</p>
        </div>
      </div>
      <div className={styles.defaultInfoBox}>
        <View />
        <div className={styles.descriptionBox}>
          <p>{formatNumber(views)}</p>
        </div>
      </div>
      <div className={styles.defaultInfoBox}>
        <EmptyLike />
        <div className={styles.descriptionBox}>
          <p>{formatNumber(likes)}</p>
        </div>
      </div>
      <div className={styles.defaultInfoBox}>
        <EmptyStar />
        <div className={styles.descriptionBox}>
          <p>{formatNumber(scraps)}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultInfo;