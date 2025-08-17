import React, { useState, useRef } from "react";

const VideoEditor = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [blackScreenTime, setBlackScreenTime] = useState(0); // seconds
  const [videoWidth, setVideoWidth] = useState(640); // default width
  const [videoHeight, setVideoHeight] = useState(360); // default height
  const videoRef = useRef(null);

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoFile(file);
      setVideoURL(url);
    }
  };

  const handleTimeInput = (e) => {
    const { name, value } = e.target;
    const minutes = name === "minutes" ? parseInt(value || 0) : Math.floor(blackScreenTime / 60);
    const seconds = name === "seconds" ? parseInt(value || 0) : blackScreenTime % 60;
    setBlackScreenTime(minutes * 60 + seconds);
  };

  const handleAddBlackScreen = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // start from beginning
      videoRef.current.play();
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-4">🎬 Simple Video Editor</h1>

      {/* Upload Video */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4"
      />

      {/* Resize Controls */}
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          placeholder="Width"
          value={videoWidth}
          onChange={(e) => setVideoWidth(Number(e.target.value))}
          className="p-2 text-black rounded"
        />
        <input
          type="number"
          placeholder="Height"
          value={videoHeight}
          onChange={(e) => setVideoHeight(Number(e.target.value))}
          className="p-2 text-black rounded"
        />
      </div>

      {/* Time Input */}
      <div className="flex gap-4 mb-4">
        <input
          type="number"
          name="minutes"
          placeholder="Minutes"
          onChange={handleTimeInput}
          className="p-2 text-black rounded"
        />
        <input
          type="number"
          name="seconds"
          placeholder="Seconds"
          onChange={handleTimeInput}
          className="p-2 text-black rounded"
        />
      </div>

      {/* Add Button */}
      <button
        onClick={handleAddBlackScreen}
        className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-800"
      >
        ➕ Add Black Screen
      </button>

      {/* Video Display */}
      <div className="relative mt-6">
        {videoURL && (
          <video
            ref={videoRef}
            src={videoURL}
            width={videoWidth}
            height={videoHeight}
            controls
            className="rounded shadow-lg"
          />
        )}

        {/* Black Screen Overlay */}
        {blackScreenTime > 0 && (
          <div
            className="absolute top-0 left-0 bg-black"
            style={{
              width: videoWidth,
              height: videoHeight,
              animation: `fadeOut ${blackScreenTime}s forwards`,
            }}
          />
        )}
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeOut {
            0% { opacity: 1; }
            100% { opacity: 0; visibility: hidden; }
          }
        `}
      </style>
    </div>
  );
};

export default VideoEditor;
