import React from 'react';
import { ActiveMockupView } from '../../types';
import { Building2, User, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

interface MockupBarProps {
  currentMockup: ActiveMockupView;
  onSelectMockup: (mockup: ActiveMockupView) => void;
}

export const MockupBar: React.FC<MockupBarProps> = ({
  currentMockup,
  onSelectMockup
}) => {
  const mockups: Array<{
    id: ActiveMockupView;
    title: string;
    description: string;
    icon: React.ReactNode;
    badge: string;
  }> = [
    {
      id: 'company-list',
      title: 'Mockup 1: Company Search (Liste)',
      description: 'Filter, Eignerstruktur, Bilanzen, Nachfolge-Check',
      icon: <Building2 size={15} />,
      badge: 'View 1'
    },
    {
      id: 'company-detail',
      title: 'Mockup 2: Company Detail (Popup/Blur)',
      description: 'Eigner-Graph, Bilanz-Chart, Kontakte, Media-Check',
      icon: <Eye size={15} />,
      badge: 'View 2'
    },
    {
      id: 'candidate-list',
      title: 'Mockup 3: Candidate Search (Liste)',
      description: 'Free-Text AI Briefing, PDF-Upload, Match-Scoring',
      icon: <User size={15} />,
      badge: 'View 3'
    },
    {
      id: 'candidate-detail',
      title: 'Mockup 4: Candidate Detail (Popup/Blur)',
      description: 'LinkedIn History, Psychometrics, Kununu Audit',
      icon: <Sparkles size={15} />,
      badge: 'View 4'
    }
  ];

  return (
    <div className="bg-[#070E22] border-b border-[#1677FF]/30 px-6 py-2.5 flex items-center justify-between gap-4 overflow-x-auto shadow-md">
      <div className="flex items-center gap-2 shrink-0">
        <span className="w-2 h-2 rounded-full bg-[#1677FF] animate-pulse"></span>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
          Mockup Navigator:
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {mockups.map((m) => {
          const isActive = currentMockup === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onSelectMockup(m.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all border ${
                isActive
                  ? 'bg-[#1677FF] text-white border-blue-400 shadow-[0_0_12px_rgba(22,119,255,0.4)]'
                  : 'bg-[#0B1633] text-slate-300 border-[#1F3163] hover:border-[#1677FF]/60 hover:text-white'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-[#69B8FF]'}>{m.icon}</span>
              <span className="font-sans">{m.title}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-[#0E1A3C] text-slate-400'}`}>
                {m.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
