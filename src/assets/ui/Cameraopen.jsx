import React, { useState, useRef, useEffect } from 'react';

function Camera() {
  const [stream, setStream] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef(null);

  const handleCameraToggle = async () => {
    if (cameraOn) {
      // Stop the stream and turn off the camera
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      } 
      setCameraOn(false);
    } else {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(newStream);
        setCameraOn(true);
      } catch (error) {
        console.error("Error accessing camera:", error);
        // Display a user-friendly error message instead of just logging to the console.
        alert("Error accessing camera. Please check your camera settings and permissions.");
      }
    }
  };

  useEffect(() => {
    // Clean up the stream when the component unmounts or when camera is turned off
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div>
      <h1>Camera Access</h1>
      <button onClick={handleCameraToggle}>
        {cameraOn ? 'Close Camera' : 'Open Camera'}
      </button>
      {stream && (
        <video ref={videoRef} autoPlay playsInline muted srcObject={stream} />
      )}
      {!stream && !cameraOn && <p>Camera is off.</p>}
      {!stream && cameraOn && <p>Waiting for camera access...</p>} {/* Improved message */}
    </div>
  );
}

export default Camera;