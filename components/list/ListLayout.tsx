import React, { forwardRef, ReactNode } from "react";
import styles from "./ListLayout.module.css";
import DetailModal from "../modal/DetailModal";
import ListContainer from "./ListContainer";
import { DataType } from "@/utils/types/DataType";
import SwipeIcon from "../icons/SwipeIcon";

interface ListLayoutProps {
  recipes: DataType[];
  children: ReactNode;
}

const ListLayout = forwardRef<HTMLDivElement, ListLayoutProps>(({ recipes }, ref) => {
  return (
    <div ref={ref} className={styles.listLayout}>
      <SwipeIcon direction="left" />
      <ListContainer recipes={recipes} />
      <DetailModal />
      <SwipeIcon direction="right" />
    </div>
  );
});

export default ListLayout;
