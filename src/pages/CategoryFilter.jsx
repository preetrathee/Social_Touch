import React, { useState } from "react";
import videoData from "../assets/videoData";

const filters = [
  "All",
  "Web",
  "Blog",
  "Romance",
  "Education",
  "Experience",
  "Movies",
  "Videos"
];

const CategoryFilter = () => {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? videoData
      : videoData.filter(v =>
          v.category?.toLowerCase().includes(selected.toLowerCase()) ||
          v.tags?.some(tag => tag.toLowerCase().includes(selected.toLowerCase()))
        );

  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* Filter Buttons */}
      <div className="flex overflow-x-auto border-b border-gray-800 bg-[#18181b] sticky top-0 z-10 py-3 px-2 gap-2">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-4 py-2 whitespace-nowrap font-semibold rounded-full transition border-2 ${selected === filter ? 'border-cyan-400 text-cyan-400 bg-gray-900' : 'border-gray-700 text-gray-400 hover:text-cyan-300'}`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Grid of Filtered Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No content found.</div>
        ) : (
          filtered.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-bold text-lg mb-2 text-cyan-300">{item.title}</h4>
                <p className="text-sm text-gray-300 mb-2 flex-1">{item.description}</p>
                <span className="text-xs text-gray-400 mb-2">{item.category}</span>
                <button className="mt-auto bg-cyan-400 text-black font-semibold py-1 px-4 rounded hover:bg-cyan-500 transition">View</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryFilter; 