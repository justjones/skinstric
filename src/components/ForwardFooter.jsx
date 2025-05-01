import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackFooter.css'; // Reusing the style

export default function ForwardFooter({ to = '/page6', text = 'Proceed' }) {
  const navigate = useNavigate();

  return (
    <footer className="forward-footer">
      <div
        className="side-button-wrapper side-button-wrapper--right"
        onClick={() => navigate(to)}
        style={{ cursor: 'pointer' }}
      >
        <div className="diamond-button">
          <div className="triangle right" />
        </div>
        <span className="side-text">{text}</span>
      </div>
    </footer>
  );
}
