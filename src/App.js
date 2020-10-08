import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutWatchSection from "./components/AbouWatches/AboutWatchSection";

import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutWatchSection />
    </div>
  );
}

export default App;
