import React, { useRef, useState } from "react";

const AddPhoto = () => {
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDone = (e) => {
    e.preventDefault();
    // Handle photo submission logic here
    alert("Photo uploaded!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h2 className="text-2xl font-bold text-white mb-8">Add Photo</h2>
      <div className="relative mb-8">
        <div
          className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer border-4 border-cyan-400 overflow-hidden"
          onClick={handleUploadClick}
        >
          {photo ? (
            <img src={photo} alt="Profile" className="object-cover w-full h-full" />
          ) : (
            <span className="text-gray-400 text-lg">+</span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>
      <button
        onClick={handleDone}
        className="w-40 bg-cyan-400 text-black font-semibold py-2 px-4 rounded hover:bg-cyan-500 transition"
      >
        Done
      </button>
    </div>
  );
};

export default AddPhoto; 