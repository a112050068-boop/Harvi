
import React from 'react';

const About: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/linharvi?igsh=cjA3a3NveGJ0bnhr&utm_source=qr";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-24 md:pt-32 pb-40 md:pb-60 px-5 md:px-12 overflow-x-hidden">
      {/* 核心視覺區：極限放大的 about. (強制不換行) */}
      <section className="w-full flex flex-col items-center relative">
        <h1 className="text-[28vw] sm:text-[30vw] md:text-[32vw] font-black tracking-tighter leading-none lowercase select-none text-white pointer-events-none whitespace-nowrap mb-16 md:mb-32">
          about.
        </h1>

        {/* 文字描述區 */}
        <div className="max-w-5xl w-full space-y-16 md:space-y-24 text-center">
          
          {/* 中文描述 */}
          <div className="space-y-8 md:space-y-12">
            <p className="text-base md:text-2xl lg:text-3xl font-black leading-[1.8] md:leading-[1.6] tracking-tight text-white break-keep px-4 md:px-0">
              嗨大家，我是哈維，準備這個作品集的時候，心中滿是感動，仍然記得案子的始末，或許裡頭的作品沒有半個打動你，但這是我，或是我們，全力做出來的，僅此紀念過去不段累積的作品，未來也請多多指教。
            </p>
            <p className="text-blue-500 text-base md:text-xl lg:text-2xl font-black tracking-widest uppercase animate-pulse">
              誒主要是可以找我拍片啦
            </p>
            <p className="text-sm md:text-xl font-bold tracking-wide text-white/80 max-w-3xl mx-auto px-6">
              我喜歡創作帶給我的感受，影像是我很好抒發的媒介
            </p>
          </div>

          <div className="flex justify-center items-center gap-4 md:gap-6">
            <div className="h-px w-8 md:w-12 bg-blue-500/50" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rotate-45" />
            <div className="h-px w-8 md:w-12 bg-blue-500/50" />
          </div>

          {/* 英文描述 */}
          <div className="space-y-8 md:space-y-10 opacity-40 hover:opacity-100 transition-opacity duration-1000 max-w-4xl mx-auto px-4 md:px-0">
            <p className="text-sm md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide italic uppercase">
              "I am Harvi. Assembling this archive stirred deep nostalgia; the lifespan of each project remains vivid. Perhaps none will strike a chord with you, yet they stand as a testament to our utmost exertion. I honor our accumulated history and look forward to your guidance. (Let’s be frank, though: Please hire me for your next shoot.) Creation is my fuel; film is my truest medium of expression."
            </p>
            <p className="text-[10px] md:text-base font-light tracking-[0.2em] md:tracking-[0.3em] uppercase border-t border-white/10 pt-6 md:pt-8 inline-block">
              Archive_Reflection_2025
            </p>
          </div>
        </div>
      </section>

      {/* 底部頁腳 */}
      <footer className="mt-40 md:mt-80 flex flex-col items-center gap-6 md:gap-8">
        <a 
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 md:gap-4 group transition-all duration-500"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"/>
          </svg>
          <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] font-black uppercase text-white/40 group-hover:text-blue-500 transition-colors">linharvi</span>
        </a>
        <div className="flex flex-col items-center gap-4 md:gap-6 opacity-20">
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-white to-transparent" />
          <p className="text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[0.8em] font-black uppercase">哈維 HARVI ARCHIVE © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
