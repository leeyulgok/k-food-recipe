import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
        <Image src="/images/search.webp" width={20} height={20} alt="검색" />
      </button>
      <form action="" className="flex items-center">
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        />
      </form>
    </div>
  );
};

export default SearchBar;
