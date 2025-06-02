import React, { useEffect } from 'react';
import './CameraSetUp.css';
import Camera from '../../assets/cameraSetUp.png';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function CameraSetUp() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 3000 });

    const timer = setTimeout(() => {
      navigate('/phasethree/ImagePage1');
    }, 3000); 

    return () => clearTimeout(timer); // cleanup on unmount
  }, [navigate]);

  return (
    <>
      <Header rightButtonText={null} />

      <div className="camera-setup">
        <img src={Camera} alt="Setting up" className="rombuses-image" data-aos="fade-in" />

        <div className="camera-text">
          <div className="camera-click-zone">
            <div className="camera-icon" />
            <p data-aos="fade-in">SETTING UP CAMERA …</p>
          </div>
        </div>

        <p className='bottom_text'>to get better results make sure to have</p>
        <div className="camera-instructions">
          <span>◊ NEUTRAL EXPRESSION</span>
          <span>◊ FRONTAL POSE</span>
          <span>◊ ADEQUATE LIGHTING</span>
        </div>
      </div>
    </>
  );
}
