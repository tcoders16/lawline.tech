// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Blessings from './pages/HarikrushnaMaharaj';
import AiClientUpdates from './pages/AiClientUpdates';
import { useState } from 'react';
import LogoIntro from './components/LogoIntro'; // Import the intro component

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <LogoIntro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blessings" element={<Blessings />} />
            <Route path="/ai-client-updates" element={<AiClientUpdates />} />
            {/* Future routes:
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/generate" element={<GenerateTimelinePage />} />
            <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}