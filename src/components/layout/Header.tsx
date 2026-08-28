import React from 'react';
import { MainTab } from '../../types';
import {
  Bell,
  Bookmark,
  Building2,
  Users
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
      <div className="h-14 px-6 flex items-center justify-between">
        {/* Left: Brand Logo & Navigation */}
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
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Building2 size={14} />
              <span>Target Search</span>
            </button>
            <button
              onClick={() => onSelectTab('candidates')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'candidates'
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Users size={14} />
              <span>Candidate Search</span>
            </button>
            <button
              onClick={() => onSelectTab('watchlist')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'watchlist'
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-[#162750]'
              }`}
            >
              <Bookmark size={14} />
              <span>Watchlist</span>
              {watchlistCount > 0 && (
                <span className="ml-1 bg-amber-400 text-slate-950 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                  {watchlistCount}
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Right: Status & Profile */}
        <div className="flex items-center gap-4">
          <button className="p-1.5 rounded-md bg-[#0E1A3C] text-slate-300 hover:text-white border border-[#1F3163] transition-colors relative">
            <Bell size={15} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#1677FF]"></span>
          </button>

          <div className="flex items-center gap-2.5 pl-2 border-l border-[#1F3163]">
            <div className="w-7 h-7 rounded bg-[#1677FF] flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
            <div className="hidden sm:block text-left">
              <span className="text-xs font-semibold text-white block leading-tight">Moritz</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
