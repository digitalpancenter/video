import React from "react";

 const WebcamFunctionality = () => {
  return (
    <section className="bg-blue-100 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-center text-black mb-12 tracking-tight" style={{fontFamily: 'Arial Black, Arial, sans-serif'}}>
        Webcam Video Recorder Functionality
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        {/* Screen Card */}
        <div className="bg-green-300 rounded-3xl p-8 flex-1 flex flex-col items-center shadow-lg">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="10" y="20" width="100" height="50" rx="8" fill="#fff" stroke="#222" strokeWidth="2"/>
            <rect x="30" y="35" width="60" height="20" rx="4" fill="#e5ffe5"/>
            <circle cx="25" cy="30" r="6" fill="#4CAF50"/>
            <circle cx="95" cy="30" r="6" fill="#4CAF50"/>
            <line x1="60" y1="25" x2="60" y2="55" stroke="#222" strokeWidth="2" />
            <line x1="40" y1="45" x2="80" y2="45" stroke="#222" strokeWidth="2" />
            <circle cx="60" cy="65" r="4" fill="#4CAF50"/>
          </svg>
          <h3 className="text-2xl font-bold text-black mt-6 mb-2">Screen</h3>
          <p className="text-lg text-black text-center">
            Grab browser activities or computer screen on our webcam recorder page.
          </p>
        </div>
        {/* Webcam Card */}
        <div className="bg-green-300 rounded-3xl p-8 flex-1 flex flex-col items-center shadow-lg">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="30" y="30" width="60" height="30" rx="8" fill="#fff" stroke="#222" strokeWidth="2"/>
            <circle cx="90" cy="45" r="18" fill="#e5ffe5"/>
            <rect x="80" y="35" width="20" height="20" rx="6" fill="#4CAF50"/>
            <polygon points="40,45 60,55 40,65" fill="#4CAF50"/>
            <circle cx="50" cy="50" r="6" fill="#4CAF50"/>
            <rect x="60" y="60" width="10" height="4" rx="2" fill="#4CAF50"/>
            <line x1="60" y1="30" x2="60" y2="60" stroke="#222" strokeWidth="2"/>
          </svg>
          <h3 className="text-2xl font-bold text-black mt-6 mb-2">Webcam</h3>
          <p className="text-lg text-black text-center">
            Capture the image of yourself via online video camera.
          </p>
        </div>
        {/* Sound Card */}
        <div className="bg-green-300 rounded-3xl p-8 flex-1 flex flex-col items-center shadow-lg">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
            <rect x="40" y="30" width="40" height="30" rx="8" fill="#fff" stroke="#222" strokeWidth="2"/>
            <rect x="60" y="35" width="10" height="20" rx="4" fill="#4CAF50"/>
            <circle cx="70" cy="45" r="6" fill="#e5ffe5"/>
            <rect x="80" y="40" width="8" height="16" rx="4" fill="#fff" stroke="#222" strokeWidth="2"/>
            <rect x="88" y="44" width="4" height="8" rx="2" fill="#4CAF50"/>
            <polygon points="50,45 60,50 50,55" fill="#4CAF50"/>
            <text x="55" y="60" fontSize="12" fill="#222" fontFamily="Arial">♪</text>
          </svg>
          <h3 className="text-2xl font-bold text-black mt-6 mb-2">Sound</h3>
          <p className="text-lg text-black text-center">
            Record screens with sound – optionally include your voice and computer system sounds.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center text-lg text-black font-medium px-4">
        Our webcam capture software works with any OS, including Windows, Mac, and Linux. No software installation required. Use our online video recorder app for free as often as you want – no time limits and no payment!
      </div>
    </section>
  );
};
export default WebcamFunctionality;