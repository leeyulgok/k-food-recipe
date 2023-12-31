import React, { forwardRef, ReactNode } from "react";
import styles from "./ListLayout.module.css";
import DetailModal from "../modal/DetailModal";
import ListContainer from "./ListContainer";
import useModal from '../../hooks/useModal';
import { DataType } from "@/utils/types/DataType";
import SwipeLeft from "../icons/SwipeLeft";
import SwipeRight from "../icons/SwipeRight";

interface ListLayoutProps {
  recipes: DataType[];
  children: ReactNode;
}

const ListLayout = forwardRef<HTMLDivElement, ListLayoutProps>(({ recipes }, ref) => {
  const { openedModalId, selectedRecipe, openModal, closeModal } = useModal();

  return (
    <div ref={ref} className={styles.listLayout}>
      <div className={`${styles.swipeIcon} ${styles.left}`}>
        <SwipeLeft />
      </div>
      <ListContainer openModal={openModal} recipes={recipes} openedModalId={openedModalId} />
      {openedModalId && <DetailModal recipe={selectedRecipe} closeModal={closeModal} />}
      <div className={`${styles.swipeIcon} ${styles.right}`}>
        <SwipeRight />
      </div>
    </div>
  );
});

export default ListLayout;
