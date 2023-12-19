import { FC, useState } from "react";
import MenuItem from "./MenuItems";
import AnimateDropdown from "../animate/AnimateDropdown";
import styles from "./Dropdown.module.css";

type DropdownProps = {
  title: string;
  items: string[];
};

const Dropdown: FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.dropdownContainer}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.dropdownButton} aria-expanded={isOpen}>
        {title}
      </button>
      <AnimateDropdown isOpen={isOpen} className={styles.dropdownMenu}>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </AnimateDropdown>
    </div>
  );
};

export default Dropdown;