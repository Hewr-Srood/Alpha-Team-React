import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutWatchSection from './components/AbouWatches/AboutWatchSection';
import './App.css';
import Feauture from './components/Feauture/Feauture';
import SecondSection from './components/SecondSection/SecondSection';
import ExperienceSection from './components/ExcperienceSection/ExperienceSection';
import AdjustableSection from './components/AdjudtableSection/AdjustableSection';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutWatchSection />
      <Feauture />
      <SecondSection />
      <ExperienceSection />
      <AdjustableSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
