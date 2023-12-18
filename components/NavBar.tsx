import Image from "next/image";
import MenuList from "./MenuList";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-1">
            <Image src="/images/k-food.webp" width={48} height={48} alt="로고"/>
          </div>
          <span className="font-semibold text-xl tracking-tight">
            How to Make K-Food
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <MenuList />
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
