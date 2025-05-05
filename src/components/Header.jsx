import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header({ title = "INTRO", rightButtonText, onRightButtonClick }) {

  return (
    <div className="header">
      <Link to="/" className="logo l">
        SKINSTRIC <span className="logo_intro">[{title}]</span>

      </Link>

      {rightButtonText && (
        <button className="enter-code-btn" onClick={onRightButtonClick}>
          {rightButtonText}
        </button>
      )}
    </div>
  );
}

