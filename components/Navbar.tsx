
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showWorkMenu, setShowWorkMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  // 點擊外部關閉選單 (針對手機)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowWorkMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setShowWorkMenu(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-5 md:p-10 flex justify-between items-center z-[100] mix-blend-difference">
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="text-lg md:text-2xl font-black tracking-tighter hover:text-blue-500 transition-colors uppercase whitespace-nowrap"
      >
        哈維 HARVI
      </Link>
      
      <div className="flex gap-6 md:gap-16 items-center">
        {!isAboutPage && (
          <div 
            className="relative"
            ref={menuRef}
            onMouseEnter={() => setShowWorkMenu(true)}
            onMouseLeave={() => setShowWorkMenu(false)}
          >
            <button 
              onClick={() => setShowWorkMenu(!showWorkMenu)}
              className="text-[10px] md:text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-[0.3em] pb-1 border-b border-transparent hover:border-blue-500 whitespace-nowrap"
            >
              work
            </button>
            <div className={`absolute top-full right-0 pt-3 transition-all duration-500 ${showWorkMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
              <div className="bg-black border border-white/10 p-3 md:p-4 flex flex-col gap-3 min-w-[120px] md:min-w-[140px] rounded-sm shadow-2xl">
                <button onClick={() => scrollToSection('vertical-works')} className="text-[10px] md:text-xs font-bold tracking-widest hover:text-blue-500 transition-colors text-left uppercase whitespace-nowrap">直式影片</button>
                <div className="h-px w-full bg-white/5" />
                <button onClick={() => scrollToSection('horizontal-works')} className="text-[10px] md:text-xs font-bold tracking-widest hover:text-blue-500 transition-colors text-left uppercase whitespace-nowrap">橫式影片</button>
              </div>
            </div>
          </div>
        )}
        <Link to="/about" className="text-[10px] md:text-sm font-bold hover:text-blue-400 transition-colors uppercase tracking-[0.3em] pb-1 border-b border-transparent hover:border-blue-500 whitespace-nowrap">
          about
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
