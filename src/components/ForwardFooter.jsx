import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ForwardFooter.css';

export default function ForwardFooter({ to = '/next', state = {}, white = false, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(to, { state });
    }
  };

  return (
    <footer className={`forward-footer ${white ? 'forward-footer--white' : ''}`}>
      <div
        className="forward-button-wrapper"
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      >
        <span className="forward-text">Proceed</span>
        <div className="forward-diamond">
          <div className="forward-triangle" />
        </div>
      </div>
    </footer>
  );
}
