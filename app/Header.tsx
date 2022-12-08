import Link from "next/link";
import React from "react";
import SelectLocation from "./SelectLocation";

const Header = () => {
  return (
    <header className="p-5 bg-blue-200">
      <Link
        href="/"
        className="m-2 px-2 py-1 bg-white rounded-lg text-gray-700 font-medium text-xl"
      >
        Home
      </Link>
      <Link
        href="products"
        className="m-2 px-2 py-1 bg-white text-gray-700 rounded-lg font-medium text-xl"
      >
        All Bikes
      </Link>
    </header>
  );
};

export default Header;
