import React, { useState } from "react";

const features = [
  "Paid Chat",
  "Paid Video Call",
  "Offline Dating"
];

// Mock user data
const users = [
  {
    id: 1,
    name: "Anna",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Bella",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 3,
    name: "Cathy",
    photo: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    id: 4,
    name: "Diana",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
  },
  {
    id: 5,
    name: "Ella",
    photo: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    id: 6,
    name: "Fiona",
    photo: "https://randomuser.me/api/portraits/women/70.jpg",
  },
];

const featureButton = {
  "Paid Chat": "Chat",
  "Paid Video Call": "Video Call",
  "Offline Dating": "Offline"
};

const ChatVideoList = () => {
  const [selected, setSelected] = useState("Paid Chat");

  return (
    <div className="bg-black min-h-screen text-white pb-20">
      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-800 bg-[#18181b] sticky top-0 z-10">
        {features.map(f => (
          <button
            key={f}
            onClick={() => setSelected(f)}
            className={`px-4 py-3 whitespace-nowrap font-semibold transition border-b-2 ${selected === f ? 'border-cyan-400 text-cyan-400' : 'border-transparent text-gray-400 hover:text-cyan-300'}`}
          >
            {f}
          </button>
        ))}
      </div>
      {/* User Cards */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map(user => (
          <div key={user.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4">
            <img src={user.photo} alt={user.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cyan-400" />
            <h4 className="font-bold text-lg mb-2 text-cyan-300">{user.name}</h4>
            <button className="mt-2 bg-cyan-400 text-black font-semibold py-1 px-6 rounded hover:bg-cyan-500 transition">
              {featureButton[selected]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatVideoList; 