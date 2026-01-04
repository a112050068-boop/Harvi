
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { VideoType, VideoProject } from '../types';

const WorkList: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const isVertical = type === 'vertical';
  const filterType = isVertical ? VideoType.VERTICAL : VideoType.HORIZONTAL;
  const filteredProjects = PROJECTS.filter(p => p.type === filterType);

  if (!isVertical) {
    return (
      <div className="pt-40 pb-40 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter mix-blend-difference uppercase">Horizontal Archive</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {filteredProjects.map(project => (
            <Link key={project.id} to={`/project/${project.id}`} className="group block">
              <div className="aspect-video bg-[#050505] rounded-md overflow-hidden border border-white/5 transition-all group-hover:border-blue-500/30 flex items-center justify-center">
                <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase group-hover:text-blue-500">Video_Access_Secured</span>
              </div>
              <h2 className="mt-8 text-2xl font-black uppercase tracking-tight group-hover:text-blue-500 transition-colors">《{project.title}》</h2>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-40 px-4 md:px-10 lg:px-16 max-w-[1920px] mx-auto">
      <h1 className="text-5xl md:text-8xl font-black mb-16 tracking-tighter mix-blend-difference uppercase px-4">Vertical Shorts</h1>
      <div className="grid grid-cols-3 gap-4 md:gap-8 items-start">
        <div className="space-y-4 md:space-y-8 -translate-y-12">
          {filteredProjects.filter((_, i) => i % 3 === 0).map(p => <ProjectItem key={p.id} p={p} />)}
        </div>
        <div className="space-y-4 md:space-y-8">
          {filteredProjects.filter((_, i) => i % 3 === 1).map(p => <ProjectItem key={p.id} p={p} />)}
        </div>
        <div className="space-y-4 md:space-y-8 translate-y-12">
          {filteredProjects.filter((_, i) => i % 3 === 2).map(p => <ProjectItem key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<{ p: VideoProject }> = ({ p }) => (
  <Link to={`/project/${p.id}`} className="group block relative">
    <div className="aspect-[9/16] bg-[#050505] rounded-sm overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-blue-500/30 flex items-center justify-center">
      <span className="text-[8px] font-mono tracking-widest text-white/20 uppercase group-hover:text-blue-500 rotate-90">Vertical_Archive</span>
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 mix-blend-screen pointer-events-none transition-opacity" />
    </div>
    <div className="mt-4 px-1">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-blue-500 transition-colors">{p.title}</h3>
    </div>
  </Link>
);

export default WorkList;
