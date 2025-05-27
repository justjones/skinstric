import React, { useState, useEffect } from 'react';
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
  
    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])
  

  const handleDeny = () => {
    setShowError(true);
  };

  

  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-phase-three-analysis">
        <h1 className="start-phase-three-title">To Start Analysis</h1>
        <div className="images">
          <img className="left" data-aos="fade-left" src={camera} alt="camera" />
          <img className="right" data-aos="fade-right" src={gallery} alt="gallery" />
        </div>

        {!permissionGranted && (
          <div className="permission-overlay">
            <p className="permission-text"  data-aos="fade-in">ALLOW A.I. TO ACCESS YOUR CAMERA</p>
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
