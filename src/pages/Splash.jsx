import React from 'react';

export default function Splash() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-3xl font-bold text-cyan-400 mb-4 tracking-wide">SOCIAL TOUCH</div>
      {/* Optionally, add a logo here if available */}
      {/* <img src="/path/to/logo.svg" alt="Logo" className="w-24 h-24 mb-4" /> */}
      <div className="w-6 h-6 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mt-8"></div>
    </div>
  );
} 