import { FC, ReactNode } from "react";
import styles from "./ListLayout.module.css";

interface ListLayoutProps {
  children: ReactNode;
}

const ListLayout: FC<ListLayoutProps> = ({ children }) => {
  return (
    <div className={styles.listLayout}>
      {children}
    </div>
  );
};

export default ListLayout;
