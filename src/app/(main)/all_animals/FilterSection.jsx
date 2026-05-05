"use client";

import { useState } from "react";
import AnimalCard from "./AnimalCard";

const FilterSection = ({ datas }) => {
  const [sort, setSort] = useState("default");
  const sorted = [...datas].sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    return 0;
  });
  return (
    <div className="py-4">
      <div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered select-sm rounded-xl border-gray-200 text-gray-400 font-bold focus:outline-none"
        >
          <option className="text-gray-400 font-bold" value="default">
            Sort by Price
          </option>
          <option className="text-gray-400 font-bold" value="low-high">
            Price: Low to High
          </option>
          <option className="text-gray-400 font-bold" value="high-low">
            Price: High to Low
          </option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
        {sorted.map((animal) => (
          <AnimalCard key={animal.id} data={animal} />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
