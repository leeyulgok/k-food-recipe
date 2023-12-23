import React, { FC, ReactNode, forwardRef } from "react";
import styles from "./ListLayout.module.css";

interface ListLayoutProps {
  children: ReactNode;
}

const ListLayout = forwardRef<HTMLDivElement, ListLayoutProps> (({ children }, ref) => {
  return (
    <div ref={ref} className={styles.listLayout}>
      {children}
    </div>
  );
});

export default ListLayout;
