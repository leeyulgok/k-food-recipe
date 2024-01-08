import { FC } from "react";
import styles from "./DefaultInfo.module.css";
import User from "../icons/User";
import View from "../icons/View";
import EmptyLike from "../icons/EmptyLike";
import EmptyStar from "../icons/EmptyStar";
import { formatNumber } from "@/utils/func/numberFormat";
import DefaultInfoBox from "./DefaultInfoBox";

interface DefaultInfoProps {
  writer: string;
  views: number;
  likes: number;
  scraps: number;
}

const DefaultInfo: FC<DefaultInfoProps> = ({ writer, views, likes, scraps}) => {
  return (
    <div className={styles.defaultInfoContainer}>
      <DefaultInfoBox icon={<User />} text={writer} />
      <DefaultInfoBox icon={<View />} text={formatNumber(views)} />
      <DefaultInfoBox icon={<EmptyLike />} text={formatNumber(likes)} />
      <DefaultInfoBox icon={<EmptyStar />} text={formatNumber(scraps)} />
    </div>
  );
};

export default DefaultInfo;