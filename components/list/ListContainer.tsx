import { FC, ReactNode } from "react";
import ListLayout from "./ListLayout";
import styles from "./ListContainer.module.css";

interface ListContainerProps {
  children: ReactNode;
}

const ListContainer: FC<ListContainerProps> = ({ children }) => {
  return (
    <ListLayout>
      <div className={styles.listContainer}>
        {children}
      </div>
    </ListLayout>
  );
};

export default ListContainer;
