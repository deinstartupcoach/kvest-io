import React from 'react';
import { ActiveMockupView } from '../../types';
import { Building2, User, Eye, Sparkles } from 'lucide-react';

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
      title: 'Mockup 1: Target Screener (Liste)',
      description: 'M&A Filterkriterien, Eigner-Alter, Bilanzgewinn, WZ-Code',
      icon: <Building2 size={14} />,
      badge: 'View 1'
    },
    {
      id: 'company-detail',
      title: 'Mockup 2: Target Dossier (Modal/Blur)',
      description: 'Gesellschafter-Graph, Bilanzverlauf, Handelsregister, Kontakte',
      icon: <Eye size={14} />,
      badge: 'View 2'
    },
    {
      id: 'candidate-list',
      title: 'Mockup 3: Candidate Search (Liste)',
      description: 'AI Briefing-Matching, PDF Profil Upload, Filterung',
      icon: <User size={14} />,
      badge: 'View 3'
    },
    {
      id: 'candidate-detail',
      title: 'Mockup 4: Candidate Dossier (Modal/Blur)',
      description: 'LinkedIn Werdegang, Social Check, Kununu Arbeitgeber-Audit',
      icon: <Sparkles size={14} />,
      badge: 'View 4'
    }
  ];

  return (
    <div className="bg-[#FAF7F2] border-b border-[#E9DFCF] px-6 py-2 flex items-center justify-between gap-4 overflow-x-auto">
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B534A] font-mono">
          Mockup Quick Navigator:
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {mockups.map((m) => {
          const isActive = currentMockup === m.id;
          return (
            <button
              key={m.id}
              onClick={() => onSelectMockup(m.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-2 transition-all border ${
                isActive
                  ? 'bg-[#0B1633] text-white border-[#0B1633] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-[#1677FF] hover:text-[#1677FF]'
              }`}
            >
              <span className={isActive ? 'text-[#69B8FF]' : 'text-slate-500'}>{m.icon}</span>
              <span>{m.title}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {m.badge}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
