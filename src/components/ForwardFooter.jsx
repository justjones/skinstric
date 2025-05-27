import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForwardFooter.css';

export default function ForwardFooter({ to = '/next', state = {}, white = false, onClick, disabled = false }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    } else {
      navigate(to, { state });
    }
  };

  return (
    <footer className={`forward-footer ${white ? 'forward-footer--white' : ''}`}>
      <div
        className={`forward-button-wrapper ${disabled ? 'disabled' : ''}`}
        onClick={handleClick}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1 }}
      >
        <span className="forward-text">Proceed</span>
        <div className="forward-diamond">
          <div className="forward-triangle" />
        </div>
      </div>
    </footer>
  );
}

