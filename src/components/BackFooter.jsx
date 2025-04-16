import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackFooter.css';

export default function BackFooter() {
    const navigate = useNavigate();

    return (
        <footer className="back-footer">
            <div
                className="side-button-wrapper"
                onClick={() => navigate(-1)}
                style={{ cursor: 'pointer' }}
            >
                <div className="diamond-button">
                    <div className="triangle left" />
                </div>
                <span className="side-text">Back</span>
            </div>
        </footer>
    );
}
