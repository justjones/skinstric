import { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ImagePage1.css';
import TakePic from '../../assets/take-pic.png';
import BackFooter from '../BackFooter';

export default function ImagePage1() {
  const location = useLocation();
  const previousSelfie = location.state?.selfie;
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [selfie, setSelfie] = useState(previousSelfie || null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setShowVideo(true);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(err => console.warn('Play error:', err));
        }
      }, 100);
    } catch (error) {
      console.error('Camera access error:', error.name, error.message);
    }
  };

  const handleTakePicture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const width = video.videoWidth;
    const height = video.videoHeight;

    if (width === 0 || height === 0) {
      console.warn('Video not ready yet — try again in a moment');
      return;
    }

    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL('image/png');
    setSelfie(dataUrl);
    setShowVideo(false);
    setIsLoading(true); 

    const stream = video.srcObject;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }

    setTimeout(() => {
      navigate('/phasethree/ImagePage2', { state: { selfie: dataUrl } });
    }, 2000);
  };

  return (
    <>
      <header>skinstric &nbsp; [ &nbsp; &nbsp; &nbsp; &nbsp; ]</header>

      <div className="phase-three-image1 image-page1">
        {/* Loading message while navigating */}
        {isLoading && (
          <div className="loading-overlay">
            <p className="loading-text">Analyzing photo...</p>
          </div>
        )}

        {!isLoading && (
          <>
            {!showVideo && selfie && (
              <img
                src={selfie}
                alt="User Selfie"
                className="captured-selfie-fullscreen"
              />
            )}

            {showVideo && (
              <div className="video-wrapper">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  style={{ width: '100%', maxWidth: '640px' }}
                />
                <canvas ref={canvasRef} style={{ display: 'none' }} />
                <button className="capture-btn" onClick={handleTakePicture}>
                  <span className="capture-btn-text">Take Picture</span>
                </button>
              </div>
            )}

            {!showVideo && (
              <img
                src={TakePic}
                alt="Start Camera"
                className="take-pic"
                onClick={handleStartCamera}
              />
            )}
          </>
        )}
      </div>

      <BackFooter to="/phasethree/CameraSetUp" white />
    </>
  );
}
