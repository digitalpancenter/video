import React from "react";

const DesktopRecorder = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-green-400 min-h-[600px] px-8 py-12">
      {/* Left Side */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-black mb-6 leading-tight tracking-tight" style={{fontFamily: 'Arial Black, Arial, sans-serif'}}>
          Gain even greater efficiencies with our desktop screen recorder
        </h2>
        <h3 className="text-2xl font-semibold text-black mb-4">
          Your hassle-free screen capture tool for more efficient projects
        </h3>
        <ul className="list-disc pl-6 text-lg text-black mb-8 space-y-2 font-medium">
          <li>Easily capture full-screen video or any custom area</li>
          <li>Engage more by drawing on the video during capture</li>
          <li>Display keystrokes and highlight the mouse cursor</li>
          <li>Add a webcam overlay to show who the real hero is</li>
          <li>Remove unwanted segments right after recording</li>
        </ul>
        <a
          href="#"
          className="inline-flex items-center bg-white text-black font-bold px-8 py-4 rounded-xl shadow hover:bg-gray-100 transition text-lg"
        >
          <svg className="mr-3" width="24" height="24" fill="none">
            <rect x="3" y="6" width="18" height="12" rx="2" fill="#222" />
            <rect x="8" y="10" width="8" height="4" rx="1" fill="#fff" />
            <rect x="11" y="14" width="2" height="2" rx="1" fill="#222" />
          </svg>
          Download for Free
        </a>
      </div>
      {/* Right Side */}
      <div className="md:w-1/2 flex justify-center relative">
        {/* Browser window mockup */}
        <div className="bg-white rounded-2xl shadow-2xl w-[500px] h-[320px] relative overflow-hidden border-4 border-black">
          {/* Top bar */}
          <div className="flex items-center bg-gray-100 px-4 py-2 border-b border-gray-300">
            <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="ml-4 text-gray-700 font-semibold">Video</span>
          </div>
          {/* Main video area */}
          <div className="absolute top-12 left-0 w-full h-[220px] bg-gray-200 flex items-center justify-center">
            {/* Example whiteboard and overlay */}
            <div className="absolute top-8 left-8 w-[320px] h-[160px] bg-white rounded-lg shadow-lg border border-gray-300 flex items-center justify-center">
              <span className="text-xl font-bold text-gray-700">Online education<br />English lesson</span>
              {/* Red circle SVG */}
              <svg className="absolute top-10 left-24" width="120" height="60">
                <ellipse cx="60" cy="30" rx="50" ry="20" stroke="#ff2d2d" strokeWidth="4" fill="none" />
                <path d="M30 20 Q60 0 90 20" stroke="#ff2d2d" strokeWidth="4" fill="none" />
              </svg>
            </div>
            {/* Color palette floating tool */}
            <div className="absolute left-0 top-8 bg-black rounded-lg p-2 flex flex-col items-center shadow-lg">
              <div className="flex gap-2 mb-2">
                <span className="w-4 h-4 rounded-full bg-pink-400 block"></span>
                <span className="w-4 h-4 rounded-full bg-blue-400 block"></span>
                <span className="w-4 h-4 rounded-full bg-yellow-400 block"></span>
                <span className="w-4 h-4 rounded-full bg-green-400 block"></span>
                <span className="w-4 h-4 rounded-full bg-white border block"></span>
              </div>
              <div className="w-6 h-1 bg-gray-400 rounded"></div>
            </div>
            {/* Right vertical toolbar */}
            <div className="absolute right-0 top-0 h-full flex flex-col justify-center items-center bg-black rounded-lg px-2 py-4 gap-4">
              <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><line x1="12" y1="6" x2="12" y2="18" stroke="#fff" strokeWidth="2"/><line x1="6" y1="12" x2="18" y2="12" stroke="#fff" strokeWidth="2"/></svg>
              <svg width="24" height="24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="#fff" strokeWidth="2"/><line x1="12" y1="8" x2="12" y2="16" stroke="#fff" strokeWidth="2"/></svg>
              <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="2"/></svg>
              <svg width="24" height="24" fill="none"><rect x="8" y="8" width="8" height="8" rx="2" stroke="#fff" strokeWidth="2"/><line x1="8" y1="12" x2="16" y2="12" stroke="#fff" strokeWidth="2"/></svg>
              <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#ff2d2d" stroke="#fff" strokeWidth="2"/></svg>
            </div>
            {/* New topic button */}
            <button className="absolute bottom-8 right-8 bg-white rounded-full px-4 py-2 shadow font-semibold flex items-center gap-2">
              New topic
              <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#22c55e"/><path d="M7 10h6M13 10l-2-2M13 10l-2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Timeline controls */}
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center py-2 bg-gradient-to-r from-pink-400 via-green-400 to-pink-400">
              <svg width="32" height="32" fill="none"><polygon points="8,6 24,16 8,26" fill="#222" /></svg>
              <svg width="32" height="32" fill="none"><rect x="8" y="8" width="16" height="16" rx="4" fill="#222"/><line x1="8" y1="16" x2="24" y2="16" stroke="#fff" strokeWidth="2"/><line x1="16" y1="8" x2="16" y2="24" stroke="#fff" strokeWidth="2"/></svg>
              <svg width="32" height="32" fill="none"><rect x="8" y="8" width="16" height="16" rx="4" fill="#222"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#22c55e"/></svg>
              <div className="flex-1 mx-4 h-2 bg-white rounded-full relative">
                <div className="absolute left-1/4 top-0 h-2 w-1/2 bg-green-400 rounded-full"></div>
              </div>
              <svg width="24" height="24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" fill="#fff"/><rect x="10" y="10" width="4" height="4" rx="1" fill="#22c55e"/></svg>
            </div>
          </div>
          {/* Webcam overlay */}
          <div className="absolute left-8 bottom-[-40px] w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-300 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-700">Webcam</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DesktopRecorder;