import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Test from "./components/Test";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
