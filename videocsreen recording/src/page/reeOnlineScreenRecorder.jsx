import React, { useRef, useState } from "react";

const FreeOnlineScreenRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [djMode, setDjMode] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    setVideoUrl(null);
    try {
      // Capture screen with audio
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      // Capture microphone audio
      const micStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const audioContext =
        new (window.AudioContext || window.webkitAudioContext)();
      const destination = audioContext.createMediaStreamDestination();

      // Add screen audio (if available)
      if (screenStream.getAudioTracks().length) {
        const screenSource = audioContext.createMediaStreamSource(screenStream);
        screenSource.connect(destination);
      }

      // Add mic audio with gain + compressor
      if (micStream.getAudioTracks().length) {
        const micSource = audioContext.createMediaStreamSource(micStream);

        const gainNode = audioContext.createGain();
        gainNode.gain.value = djMode ? 60 : 1.3; // DJ Mode = super boost 🔊

        const compressor = audioContext.createDynamicsCompressor();
        compressor.threshold.setValueAtTime(-20, audioContext.currentTime);
        compressor.knee.setValueAtTime(30, audioContext.currentTime);
        compressor.ratio.setValueAtTime(12, audioContext.currentTime);
        compressor.attack.setValueAtTime(0.003, audioContext.currentTime);
        compressor.release.setValueAtTime(0.25, audioContext.currentTime);

        micSource.connect(gainNode).connect(compressor).connect(destination);
      }

      // Combine video + processed audio
      const tracks = [
        ...screenStream.getVideoTracks(),
        ...destination.stream.getAudioTracks(),
      ];
      const combinedStream = new MediaStream(tracks);

      // Setup MediaRecorder
      mediaRecorderRef.current = new MediaRecorder(combinedStream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "video/webm" });
        setVideoUrl(URL.createObjectURL(blob));
        audioContext.close();
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      alert("Permission denied or error: " + err.message);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <section className="flex flex-col items-center justify-center px-8 py-16 bg-white"  id="screen-recorder-section">
      <h2
        className="text-4xl font-extrabold uppercase text-black mb-10"
        style={{ fontFamily: "Arial Black, Arial, sans-serif" }}
      >
        Free Online Screen Recorder
      </h2>

      {/* Main container side by side */}
      <div className="flex w-full max-w-6xl gap-12">
        {/* LEFT SIDE (Buttons & Controls) */}
        <div className="flex flex-row items-center justify-start gap-6 w-1/3">
          {!recording ? (
            <button
              className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-2"
              onClick={startRecording}
            >
              <svg width="24" height="24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#222" />
                <circle cx="12" cy="12" r="4" fill="#22c55e" />
              </svg>
              Start Recording
            </button>
          ) : (
            <button
              className="bg-red-400 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-2"
              onClick={stopRecording}
            >
              <svg width="24" height="24" fill="none">
                <rect x="6" y="6" width="12" height="12" rx="2" fill="#fff" />
              </svg>
              Stop Recording
            </button>
          )}

          {/* DJ Mode Toggle */}
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold"
            onClick={() => setDjMode(!djMode)}
          >
            {djMode ? "DJ Mode ON" : "DJ Mode OFF"}
          </button>
        </div>

        {/* RIGHT SIDE (Video Preview) */}
        <div className="flex flex-col items-center w-2/3">
          {videoUrl ? (
            <>
              <video
                src={videoUrl}
                controls
                className="w-full max-w-2xl rounded-xl shadow-lg mb-4"
              />
              <a
                href={videoUrl}
                download="recording.webm"
                className="bg-black text-white px-6 py-2 rounded-lg font-bold"
              >
                Download Recording
              </a>
            </>
          ) : (
            <div className="text-gray-500 text-center">
              🎥 Recording preview will appear here...
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-gray-500 text-sm text-center max-w-xl">
        Tip: Your screen and voice will be recorded. Click "Start Recording" and
        allow permissions. When done, click "Stop Recording" and download your
        video.
      </div>
    </section>
  );
};

export default FreeOnlineScreenRecorder;
