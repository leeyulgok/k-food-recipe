import { FC } from "react";
import styles from "./MenuItems.module.css";
import Link from "next/link";

type MenuItemProps = {
  item: string;
};

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const linkHref = `/${item}`;

  return (
    <Link href={linkHref} className={styles.menuItems}>
      {item}
    </Link>
  );
};

export default MenuItem;
