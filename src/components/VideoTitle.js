import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
      <p className="w-2/6 text-white font-normal">{overview}</p>
			<div className="flex gap-2 my-4">
				<button className="text-black bg-white px-8 py-2 font-semibold rounded-md hover:bg-opacity-80">Play</button>
				<button className="text-black bg-gray-400 px-8 py-2 font-semibold rounded-md hover:bg-opacity-80">More Info</button>
			</div>
    </div>
  );
};

export default VideoTitle;
