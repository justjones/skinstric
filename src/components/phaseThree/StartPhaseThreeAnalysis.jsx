import React, { useState } from 'react';
import Header from '../Header';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';
import './StartPhaseThreeAnalysis.css';
import camera from '../../assets/camera.png';
import gallery from '../../assets/gallery.png';
import { useNavigate } from 'react-router-dom';

export default function StartPhaseThreeAnalysis() {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleAllow = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setPermissionGranted(true);
      navigate("/phasethree/CameraSetUp"); // navigate immediately
    } catch (error) {
      console.error('Camera permission denied:', error);
      setShowError(true);
    }
  };
  

  const handleDeny = () => {
    setShowError(true);
  };

  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-phase-three-analysis">
        <h1 className="start-phase-three-title">To Start Analysis</h1>
        <div className="images">
          <img className="left" src={camera} alt="camera" />
          <img className="right" src={gallery} alt="gallery" />
        </div>

        {!permissionGranted && (
          <div className="permission-overlay">
            <p className="permission-text">ALLOW A.I. TO ACCESS YOUR CAMERA</p>
            <div className="permission-buttons">
              <button onClick={handleDeny}>DENY</button>
              <button onClick={handleAllow}>ALLOW</button>
            </div>
            {showError && (
              <p className="error-message">Camera access is required to proceed.</p>
            )}
          </div>
        )}
      </div>

      <BackFooter />
      <ForwardFooter to="#" />

    </>
  );
}
