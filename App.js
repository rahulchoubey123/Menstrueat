import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from "./Actions/GlobalContext";
import RecommendationWithGlobalProvider from "./Recomendation/Recommendation";
import Background from "./Background";

import bgImage from "./Background.png";


const App =  () => {
  const pageStyle = {
    position: "relative",
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const backgroundStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <BrowserRouter>
      <div style={pageStyle}>
        <img src={bgImage} alt="Background" style={backgroundStyle} />
        <Routes>
          <Route exact path="/" element={<RecommendationWithGlobalProvider />} />
          <Route exact path="/background" element={<Background />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default function AppWithGlobalProvider() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};

