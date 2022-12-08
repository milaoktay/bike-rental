"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SelectLocation() {
  const [selection, setSelection] = useState("");
  const router = useRouter();

  const handleLocationSelection = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${selection.toLowerCase()}`);
  };

  return (
    <form onSubmit={handleLocationSelection}>
      <div className="mt-2 ">
        <select
          onChange={(e) => {
            setSelection(e.target.value);
          }}
          className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        >
          <option>--Select a city--</option>
          <option>Hamburg</option>
          <option>Berlin</option>
        </select>
        <button
          type="submit"
          className="m-2 px-2 py-1 bg-white text-gray-700 rounded-lg font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default SelectLocation;
