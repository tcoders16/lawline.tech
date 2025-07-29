// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
// import UploadPage from './pages/UploadPage'
// import GenerateTimelinePage from './pages/GenerateTimelinePage'
// import AboutPage from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/upload" element={<UploadPage />} />
        <Route path="/generate" element={<GenerateTimelinePage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}