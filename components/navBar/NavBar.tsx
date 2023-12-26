import MenuList from "./MenuList";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import dynamic from "next/dynamic";

const DynamicSearchBar = dynamic(() => import('./SearchBar'), { ssr: false });

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <Logo />
        <div className={styles.menuSection}>
          <MenuList />
          <DynamicSearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
