"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function SelectLocation() {
  const [selection, setSelection] = useState("");
  const router = useRouter();

  const handleLocationSelection = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/${selection.toLowerCase()}`);
    setSelection("");
  };
  console.log(selection);

  return (
    <form onSubmit={handleLocationSelection}>
      <div className="relative w-full lg:max-w-sm">
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default SelectLocation;
