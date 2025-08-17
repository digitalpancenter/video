import React, { useState, useRef } from "react";
import "./index.css";

const videoeditor = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [hideBoxes, setHideBoxes] = useState([]); // list of hidden areas
  const videoRef = useRef(null);

  // video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file));
    }
  };

  // add hide box
  const addHideBox = () => {
    setHideBoxes([
      ...hideBoxes,
      { id: Date.now(), x: 50, y: 50, w: 120, h: 80 },
    ]);
  };

  // drag boxes
  const handleDrag = (id, e) => {
    const updated = hideBoxes.map((box) =>
      box.id === id
        ? { ...box, x: e.clientX - box.w / 2, y: e.clientY - box.h / 2 }
        : box
    );
    setHideBoxes(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">🎬 React Video Editor</h1>

      {/* Upload */}
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4"
      />

      {/* Video Player */}
      {videoFile && (
        <div className="relative">
          <video
            src={videoFile}
            controls
            ref={videoRef}
            className="max-w-2xl rounded-lg"
          />

          {/* Hide Boxes */}
          {hideBoxes.map((box) => (
            <div
              key={box.id}
              className="absolute bg-black bg-opacity-80 cursor-move"
              style={{
                left: box.x,
                top: box.y,
                width: box.w,
                height: box.h,
              }}
              draggable
              onDrag={(e) => handleDrag(box.id, e)}
            ></div>
          ))}
        </div>
      )}

      {/* Controls */}
      {videoFile && (
        <div className="mt-4">
          <button
            onClick={addHideBox}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            ➕ Add Hide Box
          </button>
        </div>
      )}
    </div>
  );
};

export default videoeditor;
