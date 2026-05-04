"'use client";

const FilterSection = ({ datas }) => {
  return (
    <div className="py-4">
      <div>
        <select className="select select-bordered select-sm rounded-xl border-gray-200 text-gray-400 font-bold focus:outline-none">
          <option className="text-gray-400 font-bold" value="default">Sort by Price</option>
          <option className="text-gray-400 font-bold" value="low-high">Price: Low to High</option>
          <option className="text-gray-400 font-bold" value="high-low">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
