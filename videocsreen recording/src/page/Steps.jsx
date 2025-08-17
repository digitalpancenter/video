import React from "react";

const featuresLeft = [
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="7" y="8" width="10" height="8" rx="2" stroke="#4CAF50" strokeWidth="2"/><rect x="9" y="10" width="6" height="4" rx="1" fill="#4CAF50"/></svg>
    ),
    text: "Capture screen and audio on MacOS, Windows, and Chrome",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="7" y="7" width="10" height="14" rx="2" stroke="#4CAF50" strokeWidth="2"/><rect x="10" y="11" width="4" height="2" rx="1" fill="#4CAF50"/></svg>
    ),
    text: "Enjoy easy screen recording from iOS and Android devices",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><path d="M8 12l4-4 4 4" stroke="#4CAF50" strokeWidth="2" fill="none"/><rect x="8" y="14" width="8" height="2" rx="1" fill="#4CAF50"/></svg>
    ),
    text: "Easily share Looms with an instant link to your video",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="7" y="7" width="10" height="10" rx="2" stroke="#4CAF50" strokeWidth="2"/><path d="M9 13l2-2 2 2" stroke="#4CAF50" strokeWidth="2" fill="none"/></svg>
    ),
    text: "Make quick edits in the browser or mobile app",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><path d="M8 12h8M12 8v8" stroke="#4CAF50" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#4CAF50"/></svg>
    ),
    text: "Add external links to share valuable outside resources",
  },
];

const featuresRight = [
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="7" y="9" width="10" height="6" rx="2" stroke="#4CAF50" strokeWidth="2"/><circle cx="12" cy="12" r="1.5" fill="#4CAF50"/></svg>
    ),
    text: "Get feedback, comments, and even emojis from recipients",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="#4CAF50" strokeWidth="2"/><path d="M12 8v8M8 12h8" stroke="#4CAF50" strokeWidth="2"/></svg>
    ),
    text: "Use drawing tools for annotations and emphasis",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="#4CAF50" strokeWidth="2"/><circle cx="12" cy="12" r="2" fill="#4CAF50"/></svg>
    ),
    text: "Embed videos anywhere to increase reach and visibility",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="7" y="9" width="10" height="6" rx="2" stroke="#4CAF50" strokeWidth="2"/><rect x="9" y="11" width="6" height="2" rx="1" fill="#4CAF50"/></svg>
    ),
    text: "Closed captioning for accessible, inclusive sharing",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#DFF5E1"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="#4CAF50" strokeWidth="2"/><path d="M8 12h8M12 8v8" stroke="#4CAF50" strokeWidth="2"/></svg>
    ),
    text: "Full-screen and custom screen capture sizing options",
  },
];

 const Features = () => {
  return (
    <section className="py-16 bg-white justify-around">
      <h2 className="text-4xl font-bold text-center mb-12">
        Top features of Loom’s free screen recorder
      </h2>
      <div className="flex flex-col md:flex-row  gap-16 px-4 justify-around">
        {/* Left Column */}
        <ul className="flex-1 space-y-6">
          {featuresLeft.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="rounded-full bg-green-100 p-2">{feature.icon}</span>
              <span className="text-lg text-gray-800">{feature.text}</span>
            </li>
          ))}
        </ul>
        {/* Right Column */}
        <ul className="flex-1 space-y-6">
          {featuresRight.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <span className="rounded-full bg-green-100 p-2">{feature.icon}</span>
              <span className="text-lg text-gray-800">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Features