import React from "react";
import { useParams, Link } from "react-router-dom";
import videoData from "../assets/videoData";
import ReactPlayer from "react-player";

const Video = () => {
  const { id } = useParams();
  const video = videoData.find(v => v.id === Number(id));

  if (!video) {
    return <div className="text-white p-8">Video not found. <Link to="/home" className="text-blue-400 underline">Go Home</Link></div>;
  }

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center py-8">
      <div className="w-full max-w-3xl mb-6">
        <ReactPlayer url={video.url} controls width="100%" height="400px"/>
      </div>
      <div className="max-w-3xl w-full px-4">
        <h2 className="text-3xl font-bold mb-2">{video.title}</h2>
        <p className="mb-4">{video.description}</p>
        <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm mb-4">{video.category}</span>
        <div>
          <Link to="/home" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Video; 