import React from 'react';
import {
  Search,
  Bell,
  Sparkles,
  Sliders,
  Database,
  ShieldCheck,
  User,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onOpenGlobalSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onOpenGlobalSearch }) => {
  return (
    <header className="h-16 bg-[#0B1633] border-b border-[#1F3163] px-6 flex items-center justify-between sticky top-0 z-40">
      {/* Left: Search Bar & Context */}
      <div className="flex items-center gap-6">
        <div className="relative w-80 hidden md:block">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Globale Suche: Firmen, Eigner, HRB, Executives..."
            className="w-full pl-10 pr-4 py-1.5 bg-[#070E22] border border-[#1F3163] focus:border-[#1677FF] rounded-lg text-xs text-white placeholder:text-slate-500 outline-none"
          />
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live-Data Sync: <strong>68.416 Entitäten</strong></span>
        </div>
      </div>

      {/* Right: Actions & User Profile */}
      <div className="flex items-center gap-4">
        {/* Intelligence Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1677FF]/15 border border-[#1677FF]/40 text-xs font-semibold text-[#69B8FF]">
          <Sparkles size={13} />
          <span>BrightData SSOT Connector Aktiv</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg bg-[#0E1A3C] hover:bg-[#162750] text-slate-300 hover:text-white border border-[#1F3163] transition-colors">
          <Bell size={16} />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#1677FF]"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-2 border-l border-[#1F3163]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1677FF] to-[#69B8FF] flex items-center justify-center text-white font-bold text-xs shadow-md">
            MO
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-bold text-white leading-tight">Moritz (DSC)</div>
            <div className="text-[10px] text-slate-400 font-mono">M&A Partner / Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};
