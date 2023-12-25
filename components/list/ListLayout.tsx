import React, { FC, useState, forwardRef, ReactNode } from "react";
import styles from "./ListLayout.module.css";
import { DataType } from "@/utils/types/DataType";
import DetailModal from "../modal/DetailModal";
import ListContainer from "./ListContainer";

interface ListLayoutProps {
  recipes: DataType[];
  children: ReactNode;
}

const ListLayout = forwardRef<HTMLDivElement, ListLayoutProps>(({recipes}, ref) => {
  const [openedModalId, setOpenedModalId] = useState<number | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<DataType | null>(null);

  const openModal = (recipe: DataType) => {
    setSelectedRecipe(recipe);
    setOpenedModalId(recipe.RCP_SNO);
  };

  const closeModal = () => {
    setOpenedModalId(null);
  };

  return (
    <div ref={ref} className={styles.listLayout}>
      <ListContainer openModal={openModal} recipes={recipes} openedModalId={openedModalId}/>
      {openedModalId && <DetailModal recipe={selectedRecipe} closeModal={closeModal} />}
    </div>
  );
});

export default ListLayout;
