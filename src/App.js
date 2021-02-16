import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutWatchSection from './components/AbouWatches/AboutWatchSection';

import './App.css';
import Feauture from './components/Feauture/Feauture';
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutWatchSection />
      <Feauture />
    </div>
  );
}

export default App;
