import React from 'react';
import { useLocation } from 'react-router-dom';
import './ImagePage1.css';
import TakePic from '../../assets/take-pic.png';
import BackBtn from '../../assets/backBtnWhite.png'
import { useNavigate } from 'react-router-dom';


export default function ImagePage1() {
  const location = useLocation();
  const selfie = location.state?.selfie;

  const navigate = useNavigate();

  return (
    <>
      <div className="phase-three-image1 image-page1">
        <header>skinstric &nbsp; [ &nbsp;  &nbsp;  &nbsp; &nbsp; ]</header>

        {/* Show captured selfie only */}
        {selfie && (
          <>
            <img
              src={`data:image/jpeg;base64,${selfie}`}
              alt="User Selfie"
              className="captured-selfie-fullscreen"
            />
            <div className="selfie-overlay" />
          </>
        )}

        {/* Optional: fallback text if selfie is missing */}
        {!selfie && (
          <p className="fallback-text">No selfie available. Please retake your photo.</p>
        )}

        {/* Keep the floating camera icon */}
        <div className="take-pic">
          <img src={TakePic} alt="Take Pic Icon" />
        </div>

        {/* Footer elements */}
        <div className="footer-wrapper">
          
          <span className="back-text">BACK</span>
          <div className='backbtn'>
            <img className='back-btn' 
            src={BackBtn} 
            alt="back button" 
            onClick={() => navigate(-1)}
            />
          </div>
          <p className="footer-text">To get better results make sure to have</p>

          <ul className="footer-list">
            <li>neutral expression</li>
            <li>frontal pose</li>
            <li>adequate lighting</li>
          </ul>
        </div>
      </div>
    </>
  );
}
