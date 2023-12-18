import { FC } from "react";

type MenuItemProps = {
  item: string;
};

const MenuItem: FC<MenuItemProps> = ({ item }) => (
  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
    {item}
  </a>
);

export default MenuItem;
