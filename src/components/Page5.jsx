import React from "react";
import "./Page3.css";
import Header from "./Header";
import rombuses_center from "../assets/rombuses_center.png";
import { useNavigate, useLocation } from "react-router-dom";
import BackFooter from "./BackFooter";
import ForwardFooter from "./ForwardFooter";

export default function Page5() {
  const navigate = useNavigate();
  const locationData = useLocation();
  const userLocation = locationData.state?.location || "Unknown";

  const handleProceed = () => {
    navigate("/page6");
  };

  return (
    <div className="page5">
      <Header rightButtonText={null} />

      <h2 className="page3__intro-text">To start analysis</h2>

      <div className="page3__main">
        <div className="page3__diamond-container">
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page3__diamond-image"
          />
          <div className="page3__diamond-text">
            <p>Where are you from?</p>
            <h3>{userLocation}</h3>
          </div>
        </div>
      </div>
      <BackFooter />
      <ForwardFooter to="/page6" />
    </div>
  );
}
