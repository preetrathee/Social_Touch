import React, { useState } from "react";
import videoData from "../assets/videoData";

const categories = [
  "All Options",
  "Movies",
  "Web Series",
  "Blogs",
  "Videos",
  "Free Videos"
];

// For demo, map categories to videoData categories (customize as needed)
const categoryMap = {
  "All Options": videoData,
  "Movies": videoData.filter(v => v.category === "Movies"),
  "Web Series": videoData.filter(v => v.category === "Web Series"),
  "Blogs": videoData.filter(v => v.category === "Blogs"),
  "Videos": videoData.filter(v => v.category === "Videos"),
  "Free Videos": videoData.filter(v => v.isFree)
};

const ContentFeed = () => {
  const [selected, setSelected] = useState("All Options");
  const feed = categoryMap[selected] || [];

  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-800 bg-[#18181b] sticky top-0 z-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-3 whitespace-nowrap font-semibold transition border-b-2 ${selected === cat ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-cyan-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grid/List of Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {feed.length === 0 ? (
          <div className="col-span-full text-center text-gray-400">No content found.</div>
        ) : (
          feed.map(item => (
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

export default ContentFeed; 