import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProcessingInformation.css';
import rombuses_center from '../assets/rombuses_center.png';
import Header from './Header';


export default function ProcessingInformation() {
  const navigate = useNavigate();
  const location = useLocation();
  const name = location.state?.name || '';
  const userLocation = location.state?.location || '';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/page5', {
        state: {
          name,
          location: userLocation,
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header rightButtonText={null} />
      <div className="processing-info">


        <div className="image-wrapper">
          <img
            src={rombuses_center}
            alt="Processing visual"
            className="rombuses_center"
          />
          <h2>Processing Submission...</h2>
        </div>

      </div>
    </>
  );
}

