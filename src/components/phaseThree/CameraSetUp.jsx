import React, { useRef, useState, useEffect } from 'react';
import './CameraSetUp.css';
import Camera from '../../assets/cameraSetUp.png';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CameraSetUp() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [selfie, setSelfie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showVideo) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoRef.current.srcObject = stream;
      });
    }
  }, [showVideo]);

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  const handleStartCamera = () => setShowVideo(true);

  const handleTakePicture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 640, 480);
    const dataUrl = canvasRef.current.toDataURL('image/png');
    setSelfie(dataUrl);
    navigate('/phasethree/ImagePage1', { state: { selfie: dataUrl } });
  };

  return (
    <>
      <Header rightButtonText={null} />

<div className="camera-setup">
  {!showVideo ? (
    <>
      <img src={Camera} alt="Setting up" className="rombuses-image" data-aos="fade-in" />


      <div className="camera-text">
        <div className="camera-click-zone" onClick={handleStartCamera}>
          <div className="camera-icon" />
          <p data-aos="fade-in">SET UP CAMERA …</p>
        </div>
      </div>

      {/* Move camera-instructions OUTSIDE camera-text */}
      <p className='bottom_text'>to get better results make sure to have</p>
      <div className="camera-instructions" >        
        <span>◊ NEUTRAL EXPRESSION</span>
        <span>◊ FRONTAL POSE</span>
        <span>◊ ADEQUATE LIGHTING</span>
      </div>
    </>
  ) : (
    <div className="video-wrapper">
      <video ref={videoRef} autoPlay playsInline width="640" height="480" />
      <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
      <button className="capture-btn" onClick={handleTakePicture}>Take Picture</button>
    </div>
  )}
</div>

    </>
  );
}
