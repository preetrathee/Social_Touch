import React, { useState } from "react";

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    gender: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or API call here
    console.log("Profile completed:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-[#18181b] p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Complete Your Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">User Id</label>
          <input
            type="text"
            name="username"
            required
            className="mt-1 p-2 w-full bg-black border-b border-gray-700 text-white focus:outline-none"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Date Of Birth (DOB)</label>
          <input
            type="date"
            name="dob"
            required
            className="mt-1 p-2 w-full bg-black border-b border-gray-700 text-white focus:outline-none"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Gender</label>
          <select
            name="gender"
            required
            className="mt-1 p-2 w-full bg-black border-b border-gray-700 text-white focus:outline-none"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Country</label>
          <input
            type="text"
            name="country"
            required
            className="mt-1 p-2 w-full bg-black border-b border-gray-700 text-white focus:outline-none"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-400 text-black font-semibold py-2 px-4 rounded hover:bg-cyan-500 transition"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default CompleteProfile; 