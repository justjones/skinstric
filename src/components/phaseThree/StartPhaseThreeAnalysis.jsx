import React, { useState, useEffect, useRef } from 'react';
import Header from '../Header';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';
import './StartPhaseThreeAnalysis.css';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function StartPhaseThreeAnalysis() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [showPermissionPrompt, setShowPermissionPrompt] = useState(false);
  const [showError, setShowError] = useState(false);
  const fileInputRef = useRef(null); 
  const navigate = useNavigate();

  const handleCameraClick = () => {
    setShowPermissionPrompt(true);
  };

  const handleAllow = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setPermissionGranted(true);
      navigate("/phasethree/CameraSetUp");
    } catch (error) {
      console.error('Camera permission denied:', error);
      setShowError(true);
    }
  };

  const handleDeny = () => {
    setShowError(true);
  };

  const handleGalleryClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        navigate('/phasethree/ImagePage2', { state: { selfie: base64Image } });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-phase-three-analysis">
        <h1 className="start-phase-three-title">To Start Analysis</h1>
        <div className="images">
          <img
            className="left"
            data-aos="fade-left"
            src={camera}
            alt="camera"
            onClick={handleCameraClick}
            style={{ cursor: 'pointer' }}
          />
          <img
            className="right"
            data-aos="fade-right"
            src={gallery}
            alt="gallery"
            onClick={handleGalleryClick}
            style={{ cursor: 'pointer' }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {showPermissionPrompt && !permissionGranted && (
          <div className="permission-overlay">
            <p className="permission-text" data-aos="fade-in">ALLOW A.I. TO ACCESS YOUR CAMERA</p>
            <div className="permission-buttons" data-aos="fade-in">
              <button onClick={handleDeny}>DENY</button>
              <button onClick={handleAllow}>ALLOW</button>
            </div>
            {showError && (
              <p className="error-message">Camera access is required to proceed.</p>
            )}
          </div>
        )}
      </div>

      <BackFooter to="/phasetwo/demographicSummary" />
      <ForwardFooter to="#" />
    </>
  );
}
