import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./page/Navbar";
import Home from "./page/Home";
import Steps from "./page/Steps";
import DesktopRecorder from "./page/DesktopRecorder";
import FreeOnlineScreenRecorder from "./page/reeOnlineScreenRecorder";
import WebcamFunctionality from "./page/WebcamFunctionality";
import Footer from "./page/Footer";
import VideoEditor from "./page/VideoEditor";

function App() {
  return (
    <Router>
      {/* Navbar har page par show hoga */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="pt-20 text-center">
                <h1 className="text-4xl font-bold">
                  Welcome to My Free Video Screen Recording 🚀
                </h1>
              </div>
              <Home />
              <Steps />
              <FreeOnlineScreenRecorder />
              <DesktopRecorder />
              <WebcamFunctionality />
              <Footer />
            </>
          }
        />
        <Route path="/video-editor" element={<VideoEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
