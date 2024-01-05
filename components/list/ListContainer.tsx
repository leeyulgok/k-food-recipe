import React, { FC, useRef } from "react";
import styles from "./ListContainer.module.css";
import ListCard from "./ListCard";
import { DataType } from "@/utils/types/DataType";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ListContainerProps {
  recipes: DataType[];
}

const ListContainer: FC<ListContainerProps> = ({ recipes }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useIntersectionObserver(containerRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.cardEmphasized);
    } else {
      entry.target.classList.remove(styles.cardEmphasized);
    }
  });

  return (
    <div ref={containerRef} className={styles.listContainer}>
      {recipes.map(recipe => (
        <ListCard key={recipe.RCP_SNO} recipe={recipe} />
      ))}
    </div>
  );
};

export default ListContainer;
