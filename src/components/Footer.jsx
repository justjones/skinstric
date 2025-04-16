import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

export default function Footer({ backOnly = false }) {
  const navigate = useNavigate();

  if (backOnly) {
    return (
      <footer className="footer">
        <button className="back-button" onClick={() => navigate('/test')}
        >
          <span className="triangle left" />
          <span>Back</span>
        </button>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="footer__text-wrapper">
        <p>
          SKINSTRIC developed by an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>
      </div>
    </footer>
  );
}
