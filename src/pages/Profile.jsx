import React from "react";

const user = {
  name: "Jane Doe",
  email: "jane.doe@email.com",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
};

const Profile = () => {
  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center pt-12 pb-20">
      {/* Profile Photo */}
      <div className="relative mb-6">
        <img
          src={user.photo}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
        />
        <button className="absolute bottom-2 right-2 bg-cyan-400 text-black rounded-full p-2 hover:bg-cyan-500 transition text-xs font-bold">
          ✎
        </button>
      </div>
      {/* User Info */}
      <h2 className="text-2xl font-bold mb-2 text-cyan-300">{user.name}</h2>
      <p className="text-gray-300 mb-6">{user.email}</p>
      {/* Settings Button */}
      <button className="bg-[#18181b] border border-cyan-400 text-cyan-400 px-6 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition">
        Settings
      </button>
    </div>
  );
};

export default Profile; 