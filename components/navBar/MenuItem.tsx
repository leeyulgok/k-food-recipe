import { FC } from "react";
import styles from "./MenuItem.module.css";
import Link from "next/link";

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

const getTitlePath = (title: string) => {
  switch (title) {
    case "Ingredient":
      return "ingredient";
    case "Cooking Method":
      return "cookingMethod";
    default:
      return title.toLowerCase();
  }
};