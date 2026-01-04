
import React, { useEffect, useRef, useMemo } from 'react';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';
import { VideoType, VideoProject } from '../types';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

const getYTId = (url: string | string[]) => {
  const target = Array.isArray(url) ? url[0] : url;
  const match = target.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?\/]{11})/);
  return match ? match[1] : '';
};

const VideoPreview: React.FC<{ project: VideoProject }> = ({ project }) => {
  const videoId = getYTId(project.ytUrl);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  
  // 隨機輪播邏輯：若無指定秒數，則隨機選取一個起始點並播放 7 秒
  const startSeconds = useMemo(() => {
    if (project.previewStart !== undefined) return project.previewStart;
    return Math.floor(Math.random() * 30); // 隨機 0-30 秒，避免太後面
  }, [project.previewStart]);

  const endSeconds = useMemo(() => {
    if (project.previewEnd !== undefined) return project.previewEnd;
    return startSeconds + 7; // 預設輪播長度為 7 秒
  }, [project.previewEnd, startSeconds]);

  useEffect(() => {
    let checkInterval: number;

    const initPlayer = () => {
      if (!containerRef.current || !window.YT || !window.YT.Player) return;

      const playerElement = document.createElement('div');
      containerRef.current.appendChild(playerElement);

      playerRef.current = new window.YT.Player(playerElement, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          playsinline: 1,
          start: startSeconds,
          disablekb: 1,
          fs: 0,
          vq: 'hd1080' // 嘗試請求高畫質
        },
        events: {
          onReady: (event: any) => {
            // 強制設定畫質為 1080p (API 盡力而為)
            if (event.target.setPlaybackQuality) {
              event.target.setPlaybackQuality('hd1080');
            }
            event.target.playVideo();
            event.target.mute();
            const iframe = event.target.getIframe();
            if (iframe) {
              iframe.style.opacity = '0';
              iframe.classList.add('w-full', 'h-full', 'object-cover', 'scale-[1.1]', 'transition-opacity', 'duration-1000');
              iframe.style.pointerEvents = 'none';
              setTimeout(() => { iframe.style.opacity = '1'; }, 100);
            }

            // 輪播/循環邏輯
            checkInterval = window.setInterval(() => {
              const currentTime = event.target.getCurrentTime();
              if (currentTime >= endSeconds) {
                event.target.seekTo(startSeconds, true);
              }
            }, 200);
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(startSeconds, true);
              event.target.playVideo();
            }
          }
        }
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (existingCallback) existingCallback();
        initPlayer();
      };
    }

    return () => {
      if (checkInterval) window.clearInterval(checkInterval);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, startSeconds, endSeconds]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-black" />
  );
};

const VerticalBlock: React.FC<{ project: VideoProject }> = ({ project }) => (
  <Link 
    to={`/project/${project.id}`} 
    className="group block relative w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.05] hover:z-20"
  >
    <div className="relative aspect-[9/16] bg-black rounded-sm overflow-hidden border border-white/5 transition-colors duration-700 group-hover:border-blue-500/40">
      <VideoPreview project={project} />
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 mix-blend-screen transition-opacity duration-700 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
    </div>
  </Link>
);

const Home: React.FC = () => {
  const verticalProjects = PROJECTS.filter(p => p.type === VideoType.VERTICAL).slice(0, 9);
  const horizontalProjects = PROJECTS.filter(p => p.type === VideoType.HORIZONTAL);

  return (
    <div className="pt-24 md:pt-36 pb-40 overflow-x-hidden">
      <section id="vertical-works" className="px-3 md:px-12 lg:px-20 max-w-[2000px] mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-[10px] tracking-[0.5em] text-blue-500 font-black uppercase mb-2 whitespace-nowrap">Shorts_Sequence</h2>
          <div className="h-px w-16 md:w-20 bg-blue-500" />
        </div>
        <div className="grid grid-cols-3 gap-1 md:gap-4 lg:gap-6 items-start">
          <div className="space-y-1 md:space-y-4 lg:space-y-6">
            {verticalProjects.filter((_, i) => i % 3 === 0).map(p => <VerticalBlock key={p.id} project={p} />)}
          </div>
          <div className="space-y-1 md:space-y-4 lg:space-y-6 mt-6 md:mt-24 lg:mt-32">
            {verticalProjects.filter((_, i) => i % 3 === 1).map(p => <VerticalBlock key={p.id} project={p} />)}
          </div>
          <div className="space-y-1 md:space-y-4 lg:space-y-6 mt-12 md:mt-48 lg:mt-64">
            {verticalProjects.filter((_, i) => i % 3 === 2).map(p => <VerticalBlock key={p.id} project={p} />)}
          </div>
        </div>
      </section>

      <div className="w-full h-24 md:h-32 flex flex-col items-center justify-center relative mt-16 md:mt-32 mb-8 md:mb-16">
        <div className="absolute w-px h-full bg-gradient-to-b from-white/10 to-transparent" />
        <div className="relative z-10">
          <div className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
        </div>
      </div>

      <section id="horizontal-works" className="w-full">
        <div className="space-y-12 md:space-y-40">
          {horizontalProjects.map((p, i) => (
            <div key={p.id} className="group px-3 md:px-0">
              <Link 
                to={`/project/${p.id}`} 
                className="block relative w-full transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] z-10"
              >
                <div className="relative aspect-video bg-black overflow-hidden border-y border-white/5 transition-colors duration-1000 group-hover:border-blue-500/30">
                  <VideoPreview project={p} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10">
                     <div className="absolute top-4 left-4 md:top-10 md:left-10 w-8 h-8 md:w-12 md:h-12 border-t border-l border-blue-500/50" />
                     <div className="absolute top-4 right-4 md:top-10 md:right-10 w-8 h-8 md:w-12 md:h-12 border-t border-r border-blue-500/50" />
                     <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-8 h-8 md:w-12 md:h-12 border-b border-l border-blue-500/50" />
                     <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 w-8 h-8 md:w-12 md:h-12 border-b border-r border-blue-500/50" />
                     <div className="absolute top-6 left-16 md:top-12 md:left-28 font-mono text-[8px] md:text-[10px] text-blue-500 tracking-widest space-y-1 md:space-y-2">
                        <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
                          <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse" />
                          REC [●]
                        </div>
                        <div className="text-white/40 whitespace-nowrap uppercase hidden xs:block">Stream_Live_4K</div>
                     </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center shadow-[0_0_20px_#0066FF] z-20" />
                </div>
              </Link>
              <div className="mt-6 md:mt-12 px-3 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/5 pb-8 md:pb-10 transition-colors">
                <div className="space-y-2 md:space-y-4 w-full md:flex-1 mb-6 md:mb-0 overflow-hidden">
                  <div className="flex items-center gap-3 md:gap-4 w-full">
                    <span className="font-mono text-[9px] md:text-[10px] text-blue-500/40 flex-shrink-0">#{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors whitespace-nowrap overflow-hidden text-ellipsis w-full"
                        style={{ fontSize: 'clamp(1.2rem, 4.5vw, 3.5rem)', lineHeight: '1.1' }}>
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/30 uppercase font-mono whitespace-nowrap">{p.year} // PRODUCTION_ARCHIVE</p>
                </div>
                <div className="flex items-center gap-4 md:gap-8 mb-1 md:mb-2 w-full md:w-auto justify-end flex-shrink-0">
                  <span className="text-[8px] md:text-[9px] tracking-[0.4em] md:tracking-[0.5em] font-black text-white/20 group-hover:text-blue-500 transition-all uppercase whitespace-nowrap">Enter_Project</span>
                  <div className="w-12 md:w-16 h-[1px] bg-white/10 group-hover:bg-blue-500 group-hover:w-24 md:group-hover:w-32 transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
