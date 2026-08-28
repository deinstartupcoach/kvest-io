import React, { useState } from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface MockupBarProps {
  currentMockup?: string;
  onSelectMockup?: (mockup: any) => void;
  onSearch?: (query: string) => void;
}

export const MockupBar: React.FC<MockupBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onSearch) onSearch(e.target.value);
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) onSearch('');
  };

  return (
    <div className="bg-[#E9DFCF] border-b border-[#D8CCB9] px-6 py-2 flex items-center justify-center transition-colors">
      <div className="relative w-full max-w-2xl">
        <Search
          size={15}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B534A]"
        />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Globale Suche: Firmen, WZ-Codes, Gesellschafter, C-Level Profile, Städte..."
          className="w-full pl-10 pr-20 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded-lg text-xs text-[#0B1633] placeholder:text-[#8A8176] outline-none shadow-2xs transition-all"
        />
        {query ? (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
          >
            <X size={13} />
          </button>
        ) : (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-mono text-[#8A8176] bg-[#E9DFCF]/60 px-1.5 py-0.5 rounded border border-[#D8CCB9]">
            <span>⌘ K</span>
          </div>
        )}
      </div>
    </div>
  );
};
