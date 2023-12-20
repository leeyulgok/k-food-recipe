import { FC } from "react";
import styles from "./MenuItems.module.css";
import Link from "next/link";

type MenuItemProps = {
  title: string
  item: string;
};

const MenuItem: FC<MenuItemProps> = ({ title, item }) => {
  if(title === 'Ingredient') {
    title = "ingredient";
  } else if (title === 'Cooking Method') {
    title = "cookingMethod";
  }
  
  const linkHref = `/list/${title}/${item}`;

  return (
    <Link href={linkHref} className={styles.menuItems}>
      {item}
    </Link>
  );
};

export default MenuItem;
