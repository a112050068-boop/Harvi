
import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkMobile();

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });

      // 偵測是否懸浮在可點擊元素上，以切換縮放狀態
      const target = e.target as HTMLElement;
      const hoveringInteractive = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('a') !== null || 
        target.closest('button') !== null;
      
      setIsPointer(hoveringInteractive);
      setScale(hoveringInteractive ? 1.5 : 1);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
    }
    
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] @container"
      style={{ 
        left: position.x,
        top: position.y,
        // 僅保留 translate 與基本的 scale 縮放，移除 rotate 與 stretch
        transform: `translate(-50%, -50%) scale(${scale})`,
        // transition 僅針對縮放做平滑處理，位置跟隨保持極速反應
        transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s ease'
      }}
    >
      {/* 游標核心：做舊藍色 + X-光差值混合模式，維持完美圓形 */}
      <div 
        className="rounded-full flex items-center justify-center relative transition-shadow duration-300"
        style={{
          width: '24px',
          height: '24px',
          backgroundColor: '#0066FF',
          mixBlendMode: 'difference',
          boxShadow: isPointer ? '0 0 35px rgba(0, 102, 255, 0.8)' : '0 0 12px rgba(0, 102, 255, 0.4)',
        }}
      >
        {/* 內圈裝飾線 */}
        <div className="absolute inset-0 rounded-full border border-white/20 scale-75" />
      </div>
    </div>
  );
};

export default CustomCursor;
