import React from 'react';
import { MainTab } from '../../types';
import {
  Building2,
  Users,
  Bookmark,
  Zap
} from 'lucide-react';

interface SidebarProps {
  currentTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  watchlistCount: number;
  shortlistCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  watchlistCount,
  shortlistCount
}) => {
  const navItems = [
    {
      id: 'companies' as MainTab,
      label: 'Target Search',
      sub: 'M&A & Nachfolge',
      icon: <Building2 size={16} />,
      count: '1.428'
    },
    {
      id: 'candidates' as MainTab,
      label: 'Candidate Search',
      sub: 'C-Level & MBI Match',
      icon: <Users size={16} />,
      count: '640'
    },
    {
      id: 'watchlist' as MainTab,
      label: 'Watchlist & Pipeline',
      sub: 'Geparkte Targets',
      icon: <Bookmark size={16} />,
      badge: watchlistCount + shortlistCount
    },
    {
      id: 'connectors' as MainTab,
      label: 'API Connectors',
      sub: 'North Data, LinkedIn, CRM',
      icon: <Zap size={16} />,
      liveDot: true
    }
  ];

  return (
    <aside className="w-56 bg-[#0B1633] text-white border-r border-[#162750] flex flex-col justify-between shrink-0 h-full min-h-[calc(100vh-3.5rem)]">
      <div className="p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
          Sections
        </div>

        {navItems.map((item) => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-md text-xs font-semibold flex items-center justify-between transition-colors ${
                isActive
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'text-slate-300 hover:bg-[#162750] hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={isActive ? 'text-white' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <div>
                  <span className="block leading-tight">{item.label}</span>
                  <span className={`text-[10px] font-normal block leading-tight ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {item.sub}
                  </span>
                </div>
              </div>

              {item.count && (
                <span className={`font-mono text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-blue-800/60 text-white' : 'bg-[#0E1A3C] text-slate-400'}`}>
                  {item.count}
                </span>
              )}

              {item.badge !== undefined && item.badge > 0 && (
                <span className={`font-mono text-[10px] px-1.5 py-0.2 rounded font-bold ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-amber-500/20 text-amber-300'}`}>
                  {item.badge}
                </span>
              )}

              {item.liveDot && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-green-pulse"></span>
              )}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-[#162750] text-[11px] text-slate-400 space-y-1">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
          <span>PE Enterprise Seat</span>
          <span className="text-emerald-400 font-mono text-[10px] font-bold">CONNECTED</span>
        </div>
        <p className="text-[10px] text-slate-400 leading-tight">
          Handelsregister &amp; BReg Datenbestand Stand Q1 2026.
        </p>
      </div>
    </aside>
  );
};
