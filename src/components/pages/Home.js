import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <div className="font-mono">
      <HeroSection className="font-mono" />
      <Cards className="font-mono" />
      <Footer className="font-mono" />
    </div>
  );
}

export default Home;
