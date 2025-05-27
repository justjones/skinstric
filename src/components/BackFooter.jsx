import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackFooter.css';

export default function BackFooter({ to = '/previous', white = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to === '/previous') {
      navigate(-1); // go back in history
    } else {
      navigate(to); // navigate to specific path
    }
  };

  return (
    <div
      className={`back-footer ${white ? 'back-footer--white' : ''}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }} // optional: visual feedback
    >
      <div className="back-button-wrapper">
        <div className="back-diamond">
          <div className="back-triangle"></div>
        </div>
        <span className="back-text">Back</span>
      </div>
    </div>
  );
}
