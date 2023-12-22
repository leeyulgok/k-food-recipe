import React, { FC, ReactNode, useRef, useEffect } from "react";
import styles from "./ListLayout.module.css";

interface ListLayoutProps {
  children: ReactNode;
}

const ListLayout:FC<ListLayoutProps> = (({ children }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layout = layoutRef.current; 

    if (layout) {
      const firstCard = layout.firstChild?.firstChild as HTMLElement;
      if (firstCard) {
        const scrollPosition = firstCard.offsetLeft - (layout.offsetWidth - firstCard.offsetWidth) / 2;
        layout.scrollLeft = scrollPosition;
      }
    }
  }, [layoutRef]);

  return (
    <div className={styles.listLayout} ref={layoutRef}>
      {children}
    </div>
  );
});

export default ListLayout;
