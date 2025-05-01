import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../BackFooter.css';


export default function GetSummary({ to = '/demographicsEstimate' }) {
  const navigate = useNavigate();

  return (
    <footer className="get-summary">
      <div className="side-button-wrapper" onClick={() => navigate(to)}>
        <div className="diamond-button">
          <div className="triangle right" />
        </div>
        <span className="side-text">Get Summary</span>
      </div>
    </footer>
  );
}
