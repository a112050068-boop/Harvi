
import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import About from './pages/About';
import WorkList from './pages/WorkList';
import ProjectDetail from './pages/ProjectDetail';

const ScrollToTop: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return <>{children}</>;
};

const BackgroundEffects: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* 動態光暈 */}
      <div 
        className="absolute left-0 w-full h-[30vh] bg-blue-600/10 z-10 blur-[120px] opacity-20 transition-transform duration-700 ease-out"
        style={{ transform: `translateY(${(scrollY * 0.1) % 100}vh)` }}
      />
      
      {/* 噪點層 */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-screen">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[2]">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* X-ray 掃描線效果 */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,100,255,0.03))] bg-[length:100%_3px,2px_100%]" />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* 移除 selection:bg-blue-900/40 以啟用自定義 X-ray 效果 */}
      <div className="relative bg-black text-white min-h-screen font-['Noto_Sans_TC']">
        <BackgroundEffects />
        <CustomCursor />
        <Navbar />
        
        <main className="relative z-10">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work/:type" element={<WorkList />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
