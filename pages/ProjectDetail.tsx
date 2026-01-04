
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { VideoType, VideoProject } from '../types';

const getYTId = (url: string | string[]) => {
  const target = Array.isArray(url) ? url[0] : url;
  const match = target.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?\/]{11})/);
  return match ? match[1] : '';
};

const Lightbox: React.FC<{ url: string; onClose: () => void }> = ({ url, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500 px-4 py-20"
      onClick={onClose}
    >
      <button 
        className="absolute top-10 right-10 text-white/40 hover:text-blue-500 transition-colors z-[1001] p-4"
        onClick={onClose}
      >
        <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative max-w-full max-h-full group flex items-center justify-center" onClick={e => e.stopPropagation()}>
        <img 
          src={url} 
          alt="Original Archive Frame" 
          referrerPolicy="no-referrer"
          className="max-w-[95vw] max-h-[85vh] object-contain shadow-[0_0_120px_rgba(0,102,255,0.15)] border border-white/5 rounded-sm"
        />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/50 shadow-[0_0_15px_#0066FF] opacity-0 group-hover:opacity-100 pointer-events-none z-10" 
             style={{ animation: 'x-ray-scan 4s infinite linear' }} />
      </div>
    </div>
  );
};

const DetailVideoPlayer: React.FC<{ project?: VideoProject; videoIdOverride?: string }> = ({ project, videoIdOverride }) => {
  const videoId = videoIdOverride || (project ? getYTId(project.ytUrl) : '');
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoId) return;

    const initPlayer = () => {
      if (!containerRef.current || !window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player(containerRef.current, {
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
          start: 0, 
          disablekb: 1,
          fs: 0,
          vq: 'hd1080'
        },
        events: {
          onReady: (event: any) => {
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
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0, true);
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
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none bg-black" />;
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  if (!project) return <div className="p-40 text-center text-white/20 font-mono tracking-widest uppercase">Error: Project_Not_Found</div>;

  const urls = Array.isArray(project.ytUrl) ? project.ytUrl : [project.ytUrl];
  const mainYtUrl = urls[0];

  return (
    <div className="min-h-screen pt-20 md:pt-32 pb-40 px-4 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
      <div className="mb-10 md:mb-20">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-tight mb-4 break-keep">
          {project.title}
        </h1>
        <div className="flex items-center gap-4">
          <span className="text-blue-500 font-mono text-[9px] md:text-[10px] tracking-[0.2em] font-black whitespace-nowrap">{project.year} // SYSTEM_DECODE</span>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-12 md:space-y-24">
        {/* 主影片展示：點擊另開 YT 分頁 */}
        <a 
          href={mainYtUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block w-full mx-auto bg-black border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden rounded-md group transition-all duration-700 hover:border-blue-500/50 ${
            project.type === VideoType.VERTICAL ? 'max-w-[280px] xs:max-w-[400px] md:max-w-[500px] aspect-[9/16]' : 'w-full aspect-video'
          }`}
        >
          <DetailVideoPlayer project={project} />
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-125 group-hover:border-blue-500/50 transition-all duration-500">
               <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[14px] md:border-l-[18px] border-l-white border-b-[8px] md:border-b-[10px] border-b-transparent ml-1.5 md:ml-2 group-hover:border-l-blue-500 transition-colors" />
            </div>
          </div>
          <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="px-2 py-1 bg-blue-600 text-[8px] font-black text-white rounded-sm uppercase tracking-tighter">1080p HD</span>
          </div>
          <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_30px_#0066FF] opacity-0 group-hover:opacity-100 pointer-events-none z-30"
               style={{ animation: 'x-ray-scan 3s infinite linear' }} />
        </a>

        {/* 劇照展示 */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="space-y-8 md:space-y-12 pt-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 md:w-12 bg-blue-500" />
              <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-mono whitespace-nowrap">Archive_Stills</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-1 md:gap-2">
              {project.gallery.map((imgUrl, index) => (
                <div 
                  key={index}
                  className="group relative aspect-square bg-[#0a0a0a] border border-white/5 overflow-hidden rounded-sm cursor-pointer transition-all duration-700 hover:border-blue-500/60"
                  onClick={() => setActivePhoto(imgUrl)}
                >
                  <img src={imgUrl} alt="Still" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" />
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 系列影片 (專門處理 h4 的額外四部影片) */}
        {urls.length > 1 && (
          <div className="space-y-10 md:space-y-20 pt-10">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 md:w-12 bg-blue-500" />
              <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-mono">Series_Archive_Sequence</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              {urls.slice(1).map((url, index) => {
                const vid = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([^&?\/]{11})/)?.[1];
                return (
                  <div key={index} className="space-y-4">
                    <a 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video bg-black border border-white/5 overflow-hidden rounded-md group transition-all duration-700 hover:border-blue-500/50"
                    >
                      <DetailVideoPlayer videoIdOverride={vid} />
                      <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                         <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500">
                           <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[12px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                         </div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 px-2 opacity-40">
                      <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest">Archive_Stream_0{index + 2}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="mt-24 md:mt-48 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-40 border-t border-white/5 pt-12 md:pt-24">
        <div className="space-y-16 md:space-y-20">
          <div className="space-y-6 md:space-y-8">
             <h3 className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-black flex items-center gap-4">
               <span className="w-2 h-2 bg-blue-500" /> Synopsis
             </h3>
             <p className="text-xl md:text-3xl lg:text-4xl text-white leading-[1.6] font-bold tracking-tight whitespace-pre-line">
               {project.descriptionCn}
             </p>
          </div>
          <div className="space-y-6 md:space-y-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
             <h3 className="text-[10px] uppercase tracking-[0.5em] text-white font-black italic">Narration // ENG</h3>
             <p className="text-base md:text-xl text-white leading-relaxed font-light tracking-wide italic uppercase whitespace-pre-line">
               {project.descriptionEn}
             </p>
          </div>
        </div>
        <div className="lg:border-l border-white/10 lg:pl-24">
          <h3 className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-black mb-10 flex items-center gap-4">
            <span className="w-2 h-2 bg-blue-500 rotate-45" /> Credits
          </h3>
          <ul className="space-y-4 md:space-y-6 max-h-[800px] overflow-y-auto pr-8 custom-scrollbar">
            {project.crew.map((item, idx) => {
              const isHeader = item.includes('Cast') || item.includes('主演') || item.includes('劇組') || item.includes('━━') || item.includes('顧問') || item.includes('出品');
              return (
                <li key={idx} className={`text-[11px] md:text-sm flex items-start gap-4 uppercase tracking-[0.05em] transition-all group/item ${isHeader ? 'font-black text-blue-400 mt-10' : 'font-bold text-white/50 hover:text-white'}`}>
                  {!isHeader && <div className="w-1.5 h-1.5 bg-blue-500/40 mt-1.5 flex-shrink-0 group-hover/item:bg-blue-500 transition-colors" />}
                  <span className="leading-relaxed">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-32 md:mt-48 flex justify-center">
        <button onClick={() => navigate(-1)} className="group flex flex-col items-center gap-8">
          <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent group-hover:h-32 group-hover:from-blue-500 transition-all duration-1000" />
          <span className="font-black tracking-[0.5em] text-[10px] opacity-20 group-hover:opacity-100 group-hover:text-blue-500 transition-all uppercase">
            Exit_Archive
          </span>
        </button>
      </div>

      {activePhoto && <Lightbox url={activePhoto} onClose={() => setActivePhoto(null)} />}

      <style>{`
        @keyframes x-ray-scan {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 1px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #0066FF;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetail;
