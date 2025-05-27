import React, { useEffect } from 'react';
import './DemographicsEstimate.css';
import { useNavigate, useLocation } from 'react-router-dom';
import BackFooter from '../BackFooter';
import Header from '../Header';
import ForwardFooter from '../ForwardFooter';
import fixEEstimate from '../../assets/fixEstimate.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function DemographicsEstimate() {
  const navigate = useNavigate();
  const { state } = useLocation();

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  return (
    <>
      <Header title="Analysis" rightButtonText={null} />

      <div className="estimate" data-aos="fade-up">
        <div className="estimate__text-block">
          <h1 className="estimate__title">A.I. Analysis</h1>
          <p className="estimate__instruction">A.I. has estimated the following.</p>
          <p className="estimate__instruction">Fix estimated information if needed.</p>
        </div>

        <div className="estimate__image-wrapper" >
          <img
            src={fixEEstimate}
            alt="AI Demographics Estimate"
            className="estimate__image"
          />
        </div>
      </div>


      <BackFooter to="/phasetwo/startAnalysis"/>
      <ForwardFooter to="/phasetwo/DemographicSummary" text="Get Summary" />
    </>
  );
}
