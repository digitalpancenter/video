import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-4 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Language & Social Icons */}
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-gray-800 font-medium">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <circle cx="11" cy="11" r="10" stroke="#222" strokeWidth="2"/>
            <path d="M11 1v20M1 11h20" stroke="#222" strokeWidth="1"/>
            <ellipse cx="11" cy="11" rx="6" ry="10" stroke="#222" strokeWidth="1"/>
          </svg>
          English (US)
        </span>
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="4" fill="#222"/>
              <rect x="5" y="7" width="2" height="8" fill="#fff"/>
              <circle cx="6" cy="5" r="1" fill="#fff"/>
              <rect x="9" y="10" width="2" height="5" fill="#fff"/>
              <rect x="12" y="10" width="2" height="5" fill="#fff"/>
              <rect x="9" y="10" width="5" height="1" fill="#fff"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <circle cx="11" cy="11" r="5" fill="#fff"/>
              <circle cx="16" cy="6" r="1" fill="#fff"/>
            </svg>
          </a>
          {/* Facebook */}
          <a href="#" aria-label="Facebook">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <path d="M14 7h-2v2h2v2h-2v4h-2v-4H8v-2h2V7h2v2z" fill="#fff"/>
            </svg>
          </a>
          {/* TikTok */}
          <a href="#" aria-label="TikTok">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <path d="M12 7v6a3 3 0 1 1-3-3" stroke="#fff" strokeWidth="2" fill="none"/>
              <circle cx="15" cy="8" r="2" fill="#fff"/>
            </svg>
          </a>
          {/* Pinterest */}
          <a href="#" aria-label="Pinterest">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <circle cx="11" cy="11" r="6" fill="#fff"/>
              <rect x="10" y="8" width="2" height="6" fill="#222"/>
            </svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" aria-label="X">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <path d="M6 6l10 10M16 6l-10 10" stroke="#fff" strokeWidth="2"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#222"/>
              <polygon points="9,7 16,11 9,15" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Right: Privacy, Terms, Copyright */}
      <div className="flex items-center gap-6 text-gray-700 font-medium ml-auto">
        <a href="#" className="hover:underline">Privacy</a>
        <a href="#" className="hover:underline">Terms</a>
        <span>© 2025 All Rights Reserved</span>
      </div>
      {/* Help Button */}
      <button className="fixed right-8 bottom-8 bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg text-2xl font-bold">
        ?
      </button>
    </footer>
      );
};
export default Footer;