// src/pages/Home.tsx
import React from 'react';
import Layout from '../components/Layout';
import LandingPage from '../components/LandingPage';


const Home: React.FC = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};

export default Home;