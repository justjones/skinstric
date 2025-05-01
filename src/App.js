import React from "react";
import "./App.css";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Test from "./components/Test";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import StartAnalysis from './components/phaseTwo/StartAnalysis';
import PreparingAnalysis from "./components/phaseTwo/PreparingAnalysis";
import DemographicSummary from "./components/phaseTwo/DemographicSummary";
import DemographicEstimate from "./components/phaseTwo/DemographicsEstimate";
import DemographicAnalysis from "./components/phaseTwo/DemographicAnalysis";
import StartPhaseThreeAnalysis from "./components/phaseThree/StartPhaseThreeAnalysis";


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<Test />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/phasetwo/startAnalysis" element={<StartAnalysis />} />
          <Route path="/phasetwo/preparingAnalysis" element={<PreparingAnalysis />} />
          <Route path="/phasetwo/demographicSummary" element={<DemographicSummary />} />
          <Route path="/phasetwo/demographicsEstimate" element={<DemographicEstimate />} />
          <Route path="/phasetwo/demographicAnalysis" element={<DemographicAnalysis />} />
          <Route path="/phaseThree/startPhaseThreeAnalysis" element={<StartPhaseThreeAnalysis/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
