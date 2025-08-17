import React from "react";

// Fix: Remove 'const function', use 'function Home'
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around gap-10 p-10 bg-red-100 border border-red-100" id="home">
      {/* Left Side: Text Content */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold mb-4">Free screen recorder</h2>
        <p className="text-gray-700 mb-6 font-bold">
          Easily record your screen with the best free screen recorder for Windows, Mac, iPhone, iPad, Android, and Chromebook.<br /><br />
          Capture any area of your screen, include microphone audio, and add and resize video from your webcam. No account required and no watermark added.
        </p>
        <a
          href="https://screenpal.com/download"
          className="inline-block mb-4 px-6 py-3 bg-green-400 text-white font-semibold rounded hover:bg-green-500 transition"
        >
          Download ScreenPal for free
        </a>
        <br />
       
      </div>
      {/* Right Side: SVG Collage */}
      <div className="w-full max-w-xl">
        {/* SVG: Screen Recording Icons Collage */}
        <svg width="100%" height="350" viewBox="0 0 600 350" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bg" x1="0" y1="0" x2="600" y2="350" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff4e7a"/>
              <stop offset="0.5" stopColor="#ffb347"/>
              <stop offset="1" stopColor="#3a9bdc"/>
            </linearGradient>
          </defs>
          <rect width="600" height="350" fill="url(#bg)" />
          <rect x="200" y="120" width="200" height="120" rx="10" fill="#222" stroke="#fff" strokeWidth="4"/>
          <circle cx="300" cy="180" r="40" fill="#b3f0f7"/>
          <text x="300" y="188" textAnchor="middle" fontSize="32" fontFamily="Arial" fill="#ff4e7a" fontWeight="bold">REC</text>
          <rect x="210" y="130" width="20" height="6" rx="3" fill="#fff"/>
          <rect x="370" y="130" width="20" height="6" rx="3" fill="#fff"/>
          <rect x="210" y="224" width="20" height="6" rx="3" fill="#fff"/>
          <rect x="370" y="224" width="20" height="6" rx="3" fill="#fff"/>
          <g>
            <circle cx="90" cy="90" r="45" fill="#e0e0e0" stroke="#aaa" strokeWidth="4"/>
            <ellipse cx="90" cy="90" rx="30" ry="15" fill="#b36ad6" opacity="0.7"/>
            <line x1="60" y1="60" x2="120" y2="120" stroke="#d00" strokeWidth="8"/>
            <line x1="120" y1="60" x2="60" y2="120" stroke="#d00" strokeWidth="8"/>
          </g>
          <g>
            <rect x="470" y="60" width="60" height="45" rx="10" fill="#444" stroke="#fff" strokeWidth="3"/>
            <rect x="480" y="70" width="40" height="25" rx="5" fill="#b3f0f7"/>
            <ellipse cx="500" cy="105" rx="10" ry="12" fill="#aaa"/>
            <rect x="495" y="117" width="10" height="15" rx="3" fill="#888"/>
          </g>
          <g>
            <rect x="520" y="160" width="50" height="50" rx="12" fill="#4be37a"/>
            <circle cx="545" cy="185" r="18" fill="#fff"/>
            <rect x="544" y="170" width="2" height="15" fill="#4be37a"/>
            <rect x="545" y="185" width="10" height="2" fill="#4be37a"/>
          </g>
          <g>
            <circle cx="500" cy="270" r="35" fill="#4e5edc" opacity="0.7"/>
            <polygon points="490,255 515,270 490,285" fill="#fff"/>
            <circle cx="500" cy="270" r="30" fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="6,6"/>
          </g>
          <g>
            <ellipse cx="90" cy="260" rx="30" ry="18" fill="#d36ad6" opacity="0.7"/>
            <rect x="60" y="250" width="60" height="18" rx="9" fill="none" stroke="#fff" strokeWidth="3"/>
            <path d="M80 260 Q90 280 100 260 Q90 240 80 260 Z" fill="#ff4e7a"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Home;