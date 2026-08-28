import React from 'react';
import { MainTab } from '../../types';
import {
  Building2,
  Users,
  Bookmark,
  Send,
  Database,
  Settings,
  Sparkles,
  Layers,
  ChevronRight,
  HelpCircle
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
      label: 'Firmensuche (M&A Targets)',
      subLabel: 'Nachfolge & Buyouts',
      icon: <Building2 size={18} />,
      count: '1.428'
    },
    {
      id: 'candidates' as MainTab,
      label: 'Kandidatensuche',
      subLabel: 'Executive & C-Level Match',
      icon: <Users size={18} />,
      count: '640'
    },
    {
      id: 'watchlist' as MainTab,
      label: 'Watchlist & Shortlists',
      subLabel: 'Geparkte Targets & Profile',
      icon: <Bookmark size={18} />,
      badge: watchlistCount + shortlistCount
    },
    {
      id: 'pipeline' as MainTab,
      label: 'CRM Export & Deals',
      subLabel: 'HubSpot / Salesforce Sync',
      icon: <Send size={18} />
    },
    {
      id: 'intelligence' as MainTab,
      label: 'Datafeeds & Aggregation',
      subLabel: 'BrightData / Handelsregister',
      icon: <Database size={18} />
    },
    {
      id: 'settings' as MainTab,
      label: 'System & Einstellungen',
      subLabel: 'API Keys & Präferenzen',
      icon: <Settings size={18} />
    }
  ];

  return (
    <aside className="w-64 bg-[#0B1633] border-r border-[#1F3163] flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Logo Header */}
        <div className="h-16 px-5 border-b border-[#1F3163] flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            {/* Logo Image / Icon */}
            <div className="w-9 h-9 rounded-xl bg-[#0E1A3C] border border-[#1677FF]/40 p-1 flex items-center justify-center overflow-hidden shadow-md">
              <img
                src="/assets/kvest-arrow.png"
                alt="kvest"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white font-heading">
                kvest<span className="text-[#1677FF]">.io</span>
              </span>
              <span className="block text-[9px] font-mono tracking-widest text-[#69B8FF] uppercase font-bold">
                M&amp;A &amp; EXEC INTELLIGENCE
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="p-3 space-y-1">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Intelligence Module
          </div>

          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all group ${
                  isActive
                    ? 'bg-[#1677FF] text-white shadow-[0_0_15px_rgba(22,119,255,0.35)]'
                    : 'text-slate-300 hover:bg-[#0E1A3C] hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-white' : 'text-[#69B8FF] group-hover:text-white transition-colors'}>
                    {item.icon}
                  </span>
                  <div>
                    <span className="block leading-tight">{item.label}</span>
                    <span className={`text-[10px] font-normal block leading-tight ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                      {item.subLabel}
                    </span>
                  </div>
                </div>

                {item.count && (
                  <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${isActive ? 'bg-blue-800/60 text-white' : 'bg-[#0E1A3C] text-slate-400'}`}>
                    {item.count}
                  </span>
                )}

                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-bold ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom User / Info Box */}
      <div className="p-3 border-t border-[#1F3163] bg-[#070E22]">
        <div className="p-3 rounded-xl bg-[#0E1A3C] border border-[#1F3163] space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-200">kvest Enterprise</span>
            <span className="text-[10px] font-mono text-[#10B981] font-bold">ACTIVE</span>
          </div>
          <p className="text-[10px] text-slate-400 leading-tight">
            Datenaktualisierung: Täglich um 03:00 Uhr via BReg &amp; Web Scraping.
          </p>
        </div>
      </div>
    </aside>
  );
};
