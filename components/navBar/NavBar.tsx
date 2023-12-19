import MenuList from "./MenuList";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContainer}>
        <Logo />
        <div className={styles.menuSection}>
          <MenuList />
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
