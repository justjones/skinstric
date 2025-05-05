import React, { useRef, useState, useEffect } from 'react';
import './CameraSetUp.css';
import Header from '../Header';
import BackFooter from '../BackFooter';
import rombusesPreparingAnalysis from '../../assets/rombusesPreparingAnalysis.png';
import { useNavigate } from 'react-router-dom';

export default function CameraSetUp() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [selfie, setSelfie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function enableCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    }

    enableCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const base64Image = canvas.toDataURL('image/jpeg').split(',')[1];
      setSelfie(base64Image);
    }
  };

  const handleProceed = () => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }

    navigate("/phasethree/ImagePage1", { state: { selfie } });
  };

  return (
    <>
      <Header rightButtonText={null} />
      <div className="phase-three-cameraSetUp">
        <h1 className="camera-title">Take a Selfie</h1>

        <div className="image-layer-container">
          <img
            src={rombusesPreparingAnalysis}
            alt="background layer"
            className="base-image"
          />

          {!selfie ? (
            <div className="video-wrapper">
              <video ref={videoRef} autoPlay muted playsInline />
              <button className="capture-button" onClick={handleCapture}>
                Capture
              </button>
            </div>
          ) : (
            <div className="selfie-preview">
              <img
                src={`data:image/jpeg;base64,${selfie}`}
                alt="Captured selfie"
              />
              <button className="proceed-button" onClick={handleProceed}>
                Proceed
              </button>
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
      </div>

      <BackFooter />
    </>
  );
}
