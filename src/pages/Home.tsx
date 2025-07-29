import React, { useEffect, useState } from 'react';

// src/pages/Home.tsx

import Navbar from '../components/Navbar';
import HeroHeader from '../components/HeroSection';
import TimelinePreview from '../components/TimelinePreview';
import FeaturesOverview from '../components/FeaturesOverview';
import LogoIntro from '../components/LogoIntro';
const Home: React.FC = () => {
const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Auto-hide logo after 3.5s and enable scrolling again
    const timer = setTimeout(() => {
      setShowLogo(false);
      document.body.style.overflow = 'auto';
    }, 3500);

    // Disable scrolling while logo is visible
    document.body.style.overflow = 'hidden';

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white light:bg-zinc-900 text-zinc-900  chakra-petch-regular">
    {/* Logo Intro Animation */}
      {showLogo && <LogoIntro />}
      <Navbar />

      <main className="pt-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Hero Section */}
        <section className="text-center">
          <HeroHeader />
        </section>

        {/* Features */}
        <section className="mt-24">
          <FeaturesOverview />
        </section>

        {/* Timeline Preview */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Generated Timelines
          </h2>
          <TimelinePreview />
        </section>
      </main>

      <footer className="mt-32 border-t border-zinc-200 text-center py-8 text-sm text-zinc-700 dark:text-zinc-700">
        Built by Omkumar Solanki · Legal AI 
      </footer>
    </div>
  );
};

export default Home;