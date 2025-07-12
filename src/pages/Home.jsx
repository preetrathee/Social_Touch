import React from "react";
import videoData from "../assets/videoData";
import { Link } from "react-router-dom";

const categories = Array.from(new Set(videoData.map(v => v.category)));

const navIcons = [
  {
    name: "Home",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h3m10-11v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
    ),
    to: "/home"
  },
  {
    name: "Search",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
    ),
    to: "#"
  },
  {
    name: "Chat",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
    ),
    to: "#"
  },
  {
    name: "Profile",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21a8.38 8.38 0 0113 0" /></svg>
    ),
    to: "#"
  },
  {
    name: "Settings",
    svg: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 007 3.09V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09c.2.63.77 1.09 1.51 1.09H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
    ),
    to: "#"
  }
];

const Home = () => {
  // Pick the first video as featured for now
  const featured = videoData[0];

  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* Top Search Bar */}
      <div className="sticky top-0 z-10 bg-black px-4 py-4 flex items-center border-b border-gray-800">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
      {/* Featured Banner */}
      <div className="relative w-full h-64 bg-gray-900 flex items-center justify-center mb-8">
        <img src={featured.thumbnail} alt={featured.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-2">{featured.title}</h2>
          <p className="mb-4 max-w-xl text-center">{featured.description}</p>
          <Link to={`/video/${featured.id}`} className="bg-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition">Watch Now</Link>
        </div>
      </div>
      {/* Categories and Video Lists */}
      <div className="px-4 md:px-8">
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{category}</h3>
            <div className="flex gap-6 overflow-x-auto pb-2">
              {videoData.filter(v => v.category === category).map(video => (
                <div key={video.id} className="w-64 bg-gray-800 rounded-lg shadow-lg flex-shrink-0">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-36 object-cover rounded-t-lg" />
                  <div className="p-4">
                    <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                    <p className="text-sm mb-2">{video.description}</p>
                    <Link to={`/video/${video.id}`} className="text-blue-400 hover:underline">Watch</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#18181b] border-t border-gray-800 flex justify-around items-center py-2 z-20">
        {navIcons.map((icon, idx) => (
          <Link key={icon.name} to={icon.to} className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition">
            {icon.svg}
            <span className="text-xs mt-1">{icon.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Home; 