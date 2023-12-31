import MenuList from "./MenuList";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import dynamic from "next/dynamic";

const DynamicSearchBar = dynamic(() => import('./searchBar/SearchBarContainer'), { ssr: false });

const NavBar = () => {
  return (
    <nav className={styles.navBar} aria-label="main-nav">
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
