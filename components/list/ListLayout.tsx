import React, { forwardRef, ReactNode } from "react";
import styles from "./ListLayout.module.css";
import DetailModal from "../modal/DetailModal";
import ListContainer from "./ListContainer";
import useModal from '../../hooks/useModal';
import { DataType } from "@/utils/types/DataType";

interface ListLayoutProps {
  recipes: DataType[];
  children: ReactNode;
}

const ListLayout = forwardRef<HTMLDivElement, ListLayoutProps>(({ recipes }, ref) => {
  const { openedModalId, selectedRecipe, openModal, closeModal } = useModal();

  return (
    <div ref={ref} className={styles.listLayout}>
      <ListContainer openModal={openModal} recipes={recipes} openedModalId={openedModalId} />
      {openedModalId && <DetailModal recipe={selectedRecipe} closeModal={closeModal} />}
    </div>
  );
});

export default ListLayout;
