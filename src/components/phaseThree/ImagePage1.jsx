import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ImagePage1.css';
import TakePic from '../../assets/take-pic.png';
import BackBtn from '../../assets/backBtnWhite.png'
import { useNavigate } from 'react-router-dom';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function ImagePage1() {
  const location = useLocation();
  const selfie = location.state?.selfie;

  const navigate = useNavigate();

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  return (
    <>
      <div className="phase-three-image1 image-page1">
        <header>skinstric &nbsp; [ &nbsp;  &nbsp;  &nbsp; &nbsp; ]</header>

        {/* Show captured selfie only */}
        {selfie && (
          <>
            <img
              src={selfie}
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
<div className="take-pic" onClick={() => navigate('/phasethree/CameraSetUp')} style={{ cursor: 'pointer' }}>
  <img src={TakePic} alt="Retake Picture" />
</div>

        {/* Footer elements */}
        <div className="footer-wrapper">


          <BackFooter to="/phasetwo/demographicAnalysis" white={true} />
          <p className="footer-text">To get better results make sure to have</p>

          <ul className="footer-list">
            <li>neutral expression</li>
            <li>frontal pose</li>
            <li>adequate lighting</li>
          </ul>
          <ForwardFooter white={true} disabled={true} />
        </div>
      </div>
    </>
  );
}
