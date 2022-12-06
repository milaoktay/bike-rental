import Link from "next/link";
import React from "react";
import Search from "./SelectLocation";

const Header = () => {
  return (
    <header className="p-5 bg-blue-200">
      <Link href="/" className="px-2 py-1 bg-white rounded-lg">
        Home
      </Link>
      <Search />
    </header>
  );
};

export default Header;
