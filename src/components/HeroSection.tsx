import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center chakra-petch-regular">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black mb-6">

          Time to Fire your legal Team Today 🔥

        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Upload emails, witness statements, and documents — we generate case timelines automatically.
        </p>
        <button className="bg-black text-white px-6 py-3 text-sm font-semibold rounded hover:opacity-90 transition">
          Try it now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;