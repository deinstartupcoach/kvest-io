import React from 'react';
import { MainTab } from '../../types';
import {
  Search,
  Bell,
  SlidersHorizontal,
  Bookmark,
  Send,
  Building2,
  Users,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  watchlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  watchlistCount
}) => {
  return (
    <header className="bg-[#0B1633] text-white border-b border-[#162750] sticky top-0 z-40">
      {/* Top Primary Navigation Bar */}
      <div className="h-14 px-6 flex items-center justify-between">
        {/* Left: Brand Logo & Top Context */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/kvest-logo-white-with-emblem.png"
              alt="kvest.io"
              className="h-7 w-auto object-contain cursor-pointer"
              onClick={() => onSelectTab('companies')}
            />
          </div>

          {/* Screener Main Tabs */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => onSelectTab('companies')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'companies'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Building2 size={14} />
              <span>Company Search (Targets)</span>
            </button>
            <button
              onClick={() => onSelectTab('candidates')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'candidates'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Users size={14} />
              <span>Executive Search (C-Level)</span>
            </button>
            <button
              onClick={() => onSelectTab('watchlist')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'watchlist'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Bookmark size={14} />
              <span>Watchlist &amp; Shortlists</span>
              {watchlistCount > 0 && (
                <span className="ml-1 bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                  {watchlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => onSelectTab('pipeline')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'pipeline'
                  ? 'bg-[#1677FF] text-white shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Send size={14} />
              <span>CRM &amp; Deal Flow</span>
            </button>
          </nav>
        </div>

        {/* Center: Global Screener Search Input */}
        <div className="relative w-80 hidden lg:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Globale Suche: Firmen, WZ-Code, Eigner, GF..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#070E22] border border-[#1F3163] focus:border-[#1677FF] rounded-md text-xs text-white placeholder:text-slate-500 outline-none"
          />
        </div>

        {/* Right: Deal Status & User Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Unternehmensregister: <strong>Live-Abfrage DACH</strong></span>
          </div>

          <button className="p-1.5 rounded-md bg-[#0E1A3C] text-slate-300 hover:text-white border border-[#1F3163] transition-colors relative">
            <Bell size={15} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#1677FF]"></span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-[#1F3163]">
            <div className="w-7 h-7 rounded bg-[#1677FF] flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-xs font-semibold text-white block leading-tight">Moritz (PE Partner)</span>
              <span className="text-[10px] text-slate-400 font-mono">DSC Growth Capital</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
