import React, { FC, useEffect, useRef } from "react";
import styles from "./ListContainer.module.css";
import ListCard from "./ListCard";
import { DataType } from "@/utils/types/DataType";

interface ListContainerProps {
  openModal: (recipe: DataType) => void;
  recipes: DataType[];
  openedModalId: number | null;
}

const ListContainer: FC<ListContainerProps> = ({ openModal, recipes, openedModalId }) => {
  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (layoutRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.cardEmphasized);
            } else {
              entry.target.classList.remove(styles.cardEmphasized);
            }
          });
        },
        {
          root: layoutRef.current.parentElement,
          threshold: 0.5,
        }
      );

      const cards = Array.from(
        layoutRef.current.querySelectorAll(".Card_card__atjAU")
      );
      cards.forEach((card) => observer.observe(card as Element));

      return () => {
        cards.forEach((card) => observer.unobserve(card as Element));
      };
    }
  }, []);

  return (
    <div ref={layoutRef} className={styles.listContainer}>
      {recipes.map(recipe => (
        <ListCard key={recipe.RCP_SNO} recipe={recipe} onClick={() => openModal(recipe)} isModalOpen={openedModalId === recipe.RCP_SNO}  />
      ))}
    </div>
  );
};

export default ListContainer;
