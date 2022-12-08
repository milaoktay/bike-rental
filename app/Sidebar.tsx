import React from "react";
import SelectLocation from "./SelectLocation";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase text-gray-700">
        sidebar menu
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-blue-200 w-full md:w-60">
          <SelectLocation />
        </aside>
        <main className=""></main>
      </div>
    </div>
  );
};

export default Sidebar;
