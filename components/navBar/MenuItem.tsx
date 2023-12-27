import { FC } from "react";
import styles from "./MenuItem.module.css";
import Link from "next/link";
import { getTitlePath } from "@/utils/func/getTitlePath";

type MenuItemProps = {
  title: string
  item: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, item }) => {
  const linkHref = `/list/${getTitlePath(title)}/${item}`;

  return (
    <Link href={linkHref} className={styles.menuItems}>
      {item}
    </Link>
  );
};

export default MenuItem;

