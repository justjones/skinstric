import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackFooter.css';

export default function BackFooter({ to = '/previous', white = false }) {
  const navigate = useNavigate();

  return (
    <footer className={`back-footer ${white ? 'back-footer--white' : ''}`}>
      <div
        className="back-button-wrapper"
        onClick={() => navigate(to)}
        style={{ cursor: 'pointer' }}
      >
        <div className="back-diamond">
          <div className="back-triangle" />
        </div>
        <span className="back-text">Back</span>
      </div>
    </footer>
  );
}
