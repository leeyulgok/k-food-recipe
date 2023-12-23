import React, { FC, ReactNode, useEffect, useRef } from "react";
import ListLayout from "./ListLayout";
import styles from "./ListContainer.module.css";

interface ListContainerProps {
  children: ReactNode;
}

const ListContainer: FC<ListContainerProps> = ({ children }) => {
  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("ListContainer 렌더링");
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
          root: layoutRef.current,
          threshold: 0.5,
        }
      );
      
      const cards = Array.from(layoutRef.current.querySelectorAll('.Card_card__atjAU'));
      cards.forEach((card) => observer.observe(card as Element));

      return () => {
        cards.forEach((card) => observer.unobserve(card as Element));
      };
    }
  }, []);

  return (
    <ListLayout ref={layoutRef}>
      <div className={styles.listContainer}>
        {children}
      </div>
    </ListLayout>
  );
};

export default ListContainer;
