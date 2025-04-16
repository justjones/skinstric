import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackFooter.css';

export default function ForwardFooter({ to = '/page6' }) {
  const navigate = useNavigate();

  return (
    <footer className="forward-footer">
      <div className="side-button-wrapper" onClick={() => navigate(to)}>
        <div className="diamond-button">
          <div className="triangle right" />
        </div>
        <span className="side-text">Proceed</span>
      </div>
    </footer>
  );
}
