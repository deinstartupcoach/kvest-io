import React, { useState, useMemo } from 'react';
import { Company } from '../../types';
import { StarRating } from '../common/StarRating';
import { TrendIndicator } from '../common/TrendIndicator';
import { Badge } from '../common/Badge';
import {
  Search,
  Filter,
  SlidersHorizontal,
  Bookmark,
  Send,
  Building2,
  ExternalLink,
  ChevronDown,
  ArrowUpDown,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  FileSpreadsheet,
  Layers,
  MapPin,
  Check,
  X,
  Download,
  Share2,
  BellRing
} from 'lucide-react';

interface CompanyListViewProps {
  companies: Company[];
  onSelectCompany: (company: Company) => void;
  onToggleWatchlist: (id: string) => void;
  onExportCrm: (id: string) => void;
}

export const CompanyListView: React.FC<CompanyListViewProps> = ({
  companies,
  onSelectCompany,
  onToggleWatchlist,
  onExportCrm
}) => {
  // Filter Criteria States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [minAge, setMinAge] = useState<number>(0);
  const [minProfit, setMinProfit] = useState<number>(0);
  const [minBalance, setMinBalance] = useState<number>(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [successionOnly, setSuccessionOnly] = useState<boolean>(false);
  const [minRating, setMinRating] = useState<number>(0);
  const [selectedLegalForms, setSelectedLegalForms] = useState<string[]>([]);
  
  // Table Sorting & Selection
  const [sortBy, setSortBy] = useState<'profit' | 'balance' | 'age' | 'media' | 'employees'>('profit');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const allStates = ['Baden-Württemberg', 'Bayern', 'Hessen', 'Nordrhein-Westfalen', 'Schleswig-Holstein', 'Sachsen'];
  const industries = [
    { value: 'all', label: 'Alle Branchen' },
    { value: 'Medizintechnik', label: 'Medizintechnik & Feinmechanik (C 28)' },
    { value: 'Maschinenbau', label: 'Maschinenbau & Intralogistik (C 28)' },
    { value: 'Sondermaschinenbau', label: 'Sondermaschinenbau & Robotik (C 28)' },
    { value: 'Sensorik', label: 'Industrielle Sensorik & IoT (C 26)' },
    { value: 'Kältetechnik', label: 'HVAC & Kältetechnik (C 28)' },
    { value: 'Pumpen', label: 'Pumpen- & Strömungstechnik (C 28)' },
    { value: 'Luft- & Raumfahrt', label: 'Luft- & Raumfahrt (C 30)' },
    { value: 'Kunststoff', label: 'Kunststoff- & Spritzguss (C 22)' }
  ];

  const toggleState = (state: string) => {
    setSelectedStates(prev =>
      prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === filteredCompanies.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredCompanies.map(c => c.id));
    }
  };

  const toggleRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRows(prev =>
      prev.includes(id) ? prev.filter(rId => rId !== id) : [...prev, id]
    );
  };

  const resetAllFilters = () => {
    setSearchTerm('');
    setSelectedStates([]);
    setMinAge(0);
    setMinProfit(0);
    setMinBalance(0);
    setSelectedIndustry('all');
    setSuccessionOnly(false);
    setMinRating(0);
    setSelectedLegalForms([]);
  };

  const hasActiveFilters = Boolean(
    searchTerm ||
    selectedStates.length > 0 ||
    minAge > 0 ||
    minProfit > 0 ||
    minBalance > 0 ||
    selectedIndustry !== 'all' ||
    successionOnly ||
    minRating > 0 ||
    selectedLegalForms.length > 0
  );

  // Filtered & Sorted Companies
  const filteredCompanies = useMemo(() => {
    return companies
      .filter((c) => {
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matchName = c.name.toLowerCase().includes(term);
          const matchCity = c.city.toLowerCase().includes(term);
          const matchIndustry = c.industry.toLowerCase().includes(term);
          const matchWz = c.wzCode.toLowerCase().includes(term);
          const matchOwner = c.owners.some(o => o.name.toLowerCase().includes(term));
          if (!matchName && !matchCity && !matchIndustry && !matchWz && !matchOwner) return false;
        }

        if (selectedStates.length > 0 && !selectedStates.includes(c.state)) {
          return false;
        }

        if (minAge > 0 && c.age < minAge) {
          return false;
        }

        if (minProfit > 0 && c.netProfit < minProfit) {
          return false;
        }

        if (minBalance > 0 && c.balanceSheetTotal < minBalance) {
          return false;
        }

        if (selectedIndustry !== 'all' && !c.industry.includes(selectedIndustry)) {
          return false;
        }

        if (successionOnly && c.successionScore !== 'CRITICAL_HIGH') {
          return false;
        }

        if (minRating > 0 && c.mediaRating < minRating) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        let valA = 0;
        let valB = 0;
        if (sortBy === 'profit') {
          valA = a.netProfit;
          valB = b.netProfit;
        } else if (sortBy === 'balance') {
          valA = a.balanceSheetTotal;
          valB = b.balanceSheetTotal;
        } else if (sortBy === 'age') {
          valA = a.age;
          valB = b.age;
        } else if (sortBy === 'media') {
          valA = a.mediaRating;
          valB = b.mediaRating;
        } else if (sortBy === 'employees') {
          valA = a.employeeCount;
          valB = b.employeeCount;
        }
        return sortOrder === 'desc' ? valB - valA : valA - valB;
      });
  }, [
    companies,
    searchTerm,
    selectedStates,
    minAge,
    minProfit,
    minBalance,
    selectedIndustry,
    successionOnly,
    minRating,
    sortBy,
    sortOrder
  ]);

  const totalUniverse = companies.length;
  const filteredCount = filteredCompanies.length;
  const criticalSuccessionCount = companies.filter(c => c.successionScore === 'CRITICAL_HIGH').length;
  const avgProfit = (filteredCompanies.reduce((acc, c) => acc + c.netProfit, 0) / (filteredCount || 1)).toFixed(1);
  const avgBalance = (filteredCompanies.reduce((acc, c) => acc + c.balanceSheetTotal, 0) / (filteredCount || 1)).toFixed(1);

  return (
    <div className="space-y-4">
      {/* 1. Header Row (PitchBook Benchmark Style) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-lg border border-[#E2E8F0] shadow-xs">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-[#0B1633] tracking-tight">
              Companies &amp; M&amp;A Buyout Screener
            </h1>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {filteredCount} von {totalUniverse} Targets
            </span>
          </div>
          <p className="text-xs text-[#5B534A] mt-0.5">
            Filtern nach Nachfolgerelevanz, Bilanzkennzahlen, Standort und Gesellschafterstruktur (DACH Mittelstand)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {selectedRows.length > 0 && (
            <button
              onClick={() => selectedRows.forEach(id => onExportCrm(id))}
              className="px-3 py-1.5 rounded-md bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Send size={13} />
              <span>{selectedRows.length} in CRM Sync</span>
            </button>
          )}
          <button className="px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors">
            <Download size={13} />
            <span>Export (Excel)</span>
          </button>
          <button className="px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors">
            <BellRing size={13} />
            <span>Alert setzen</span>
          </button>
        </div>
      </div>

      {/* 2. Structured Institutional Screener Filter Bar */}
      <div className="bg-white rounded-lg border border-[#E2E8F0] p-4 shadow-xs space-y-3">
        {/* Top Filter Category Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* 1. Altersstruktur der Eigner (Succession) */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              1. Eigner &amp; Nachfolge
            </label>
            <button
              onClick={() => setSuccessionOnly(!successionOnly)}
              className={`w-full text-left px-2.5 py-1.5 rounded border text-xs font-semibold flex items-center justify-between transition-colors ${
                successionOnly
                  ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <span className="truncate">{successionOnly ? '🚨 Eigner >60 J.' : 'Alle Eigner'}</span>
              <AlertTriangle size={12} className={successionOnly ? 'text-amber-600 shrink-0' : 'text-slate-400 shrink-0'} />
            </button>
          </div>

          {/* 2. Bilanzgewinn & EBITDA */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              2. Bilanzgewinn (€)
            </label>
            <select
              value={minProfit}
              onChange={(e) => setMinProfit(Number(e.target.value))}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-800 outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Bilanzgewinn: Alle</option>
              <option value={1.5}>&gt; 1,5 Mio. €</option>
              <option value={2.5}>&gt; 2,5 Mio. €</option>
              <option value={3.5}>&gt; 3,5 Mio. €</option>
            </select>
          </div>

          {/* 3. Unternehmensalter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              3. Unternehmensalter
            </label>
            <select
              value={minAge}
              onChange={(e) => setMinAge(Number(e.target.value))}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-800 outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Alter: Beliebig</option>
              <option value={15}>Mind. 15 Jahre</option>
              <option value={25}>Mind. 25 Jahre</option>
              <option value={35}>Mind. 35 Jahre</option>
            </select>
          </div>

          {/* 4. Industriesegment / WZ-Code */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              4. Industriesegment
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-800 outline-none focus:border-[#1677FF]"
            >
              {industries.map(ind => (
                <option key={ind.value} value={ind.value}>{ind.label}</option>
              ))}
            </select>
          </div>

          {/* 5. Standort (Bundesland) */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              5. Standort (Region)
            </label>
            <select
              value={selectedStates.length === 1 ? selectedStates[0] : selectedStates.length > 1 ? 'multi' : 'all'}
              onChange={(e) => {
                if (e.target.value === 'all') setSelectedStates([]);
                else if (e.target.value !== 'multi') setSelectedStates([e.target.value]);
              }}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-800 outline-none focus:border-[#1677FF]"
            >
              <option value="all">DACH (Alle Länder)</option>
              {allStates.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          {/* 6. Management- & Media-Rating */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              6. Media / Reputation
            </label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-800 outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Rating: Alle</option>
              <option value={4.0}>Mind. 4.0 ★ (Hoch)</option>
              <option value={4.5}>Mind. 4.5 ★ (Top)</option>
            </select>
          </div>
        </div>

        {/* Free text search & Active Criteria Pills */}
        <div className="pt-2.5 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative w-full">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Volltextsuche: Firma, Stadt, Gesellschafter, HRB..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#1677FF] rounded text-xs text-slate-800 placeholder:text-slate-400 outline-none"
              />
            </div>
          </div>

          {/* Active Filter Badges */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {successionOnly && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
                Eigner &gt; 60 J.
                <button onClick={() => setSuccessionOnly(false)} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {minProfit > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-medium font-mono">
                Gewinn &gt; {minProfit}M €
                <button onClick={() => setMinProfit(0)} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {minAge > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 text-[11px] font-medium">
                Alter &gt; {minAge} J.
                <button onClick={() => setMinAge(0)} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {selectedIndustry !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-medium">
                {selectedIndustry}
                <button onClick={() => setSelectedIndustry('all')} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {selectedStates.map(st => (
              <span key={st} className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 text-[11px] font-medium">
                {st}
                <button onClick={() => toggleState(st)} className="hover:text-black"><X size={10} /></button>
              </span>
            ))}
            {minRating > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
                Rating &gt; {minRating} ★
                <button onClick={() => setMinRating(0)} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {hasActiveFilters && (
              <button
                onClick={resetAllFilters}
                className="text-[11px] font-semibold text-rose-700 hover:text-rose-900 underline ml-1"
              >
                Alle Filter zurücksetzen
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Quick Stats Bar (PitchBook Benchmark Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
        <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-xs">
          <span className="text-[11px] font-bold text-[#5B534A] uppercase tracking-wide block">Gefilterte Targets</span>
          <div className="text-xl font-bold text-[#0B1633] font-mono mt-0.5">{filteredCount}</div>
          <span className="text-[10px] text-slate-500">von {totalUniverse} im System</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-xs">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">🚨 Nachfolge-Fokus</span>
          <div className="text-xl font-bold text-amber-700 font-mono mt-0.5">{criticalSuccessionCount}</div>
          <span className="text-[10px] text-slate-500">Hauptgesellschafter &gt; 60 Jahre</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-xs">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">Ø Bilanzgewinn</span>
          <div className="text-xl font-bold text-emerald-700 font-mono mt-0.5">{avgProfit} Mio. €</div>
          <span className="text-[10px] text-slate-500">Ø Rendite im Set</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] shadow-xs">
          <span className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">Ø Bilanzsumme</span>
          <div className="text-xl font-bold text-[#0B1633] font-mono mt-0.5">{avgBalance} Mio. €</div>
          <span className="text-[10px] text-slate-500">Substanzwert</span>
        </div>
      </div>

      {/* 4. Table Controls & Sort */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div className="flex items-center gap-2">
          <span>Sortieren nach:</span>
          <div className="flex items-center gap-1 font-semibold text-[#1677FF]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-800 outline-none cursor-pointer"
            >
              <option value="profit">Bilanzgewinn</option>
              <option value="balance">Bilanzsumme</option>
              <option value="age">Unternehmensalter</option>
              <option value="employees">Mitarbeiter</option>
              <option value="media">Media-Rating</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="p-1 rounded hover:bg-slate-100 text-slate-700 border border-slate-300"
              title="Reihenfolge umkehren"
            >
              <ArrowUpDown size={12} />
            </button>
          </div>
        </div>

        <span className="text-[11px] text-slate-500 font-mono">
          Zeige {filteredCount} Datensätze
        </span>
      </div>

      {/* 5. Institutional Target Screener Table */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px] tracking-wider select-none">
                <th className="py-3 px-3 w-9 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredCompanies.length && filteredCompanies.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-[#1677FF] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4 min-w-[260px]">Unternehmen &amp; Sitz</th>
                <th className="py-3 px-3 min-w-[160px]">Industriesegment (WZ)</th>
                <th className="py-3 px-3 min-w-[190px]">Eignerstruktur &amp; Nachfolge</th>
                <th className="py-3 px-3 min-w-[150px]">Geschäftsführung (GF)</th>
                <th className="py-3 px-3 text-right">Bilanzsumme</th>
                <th className="py-3 px-3 text-right">Bilanzgewinn</th>
                <th className="py-3 px-3 text-center">Mitarbeiter</th>
                <th className="py-3 px-3 text-center">Media-Score</th>
                <th className="py-3 px-3 text-center w-24">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-800">
              {filteredCompanies.map((company) => {
                const isSelected = selectedRows.includes(company.id);
                const hasSeniorOwner = company.owners.some(o => o.age >= 60);

                return (
                  <tr
                    key={company.id}
                    onClick={() => onSelectCompany(company)}
                    className={`cursor-pointer transition-colors duration-100 ${
                      isSelected ? 'bg-blue-50/50' : 'hover:bg-slate-50/80'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3 px-3 text-center" onClick={(e) => toggleRow(company.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded border-slate-300 text-[#1677FF] focus:ring-0 cursor-pointer"
                      />
                    </td>

                    {/* Company Name & City */}
                    <td className="py-3 px-4">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-[#0B1633] text-xs hover:text-[#1677FF] transition-colors">
                            {company.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 font-sans">
                          <span className="font-medium text-slate-700">{company.city}</span>
                          <span>•</span>
                          <span>{company.state}</span>
                          <span>•</span>
                          <span className="font-mono text-slate-600">{company.age} J. (Gegr. {company.foundingYear})</span>
                        </div>
                      </div>
                    </td>

                    {/* Industry / WZ Code */}
                    <td className="py-3 px-3">
                      <div className="text-[11px] text-slate-700 font-medium truncate max-w-[180px]">
                        {company.industry}
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
                        WZ: {company.wzCode}
                      </span>
                    </td>

                    {/* Ownership Structure & Age */}
                    <td className="py-3 px-3">
                      <div className="space-y-1">
                        {company.owners.map((owner, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-1.5 text-[11px]">
                            <span className="text-slate-700 truncate max-w-[125px]">
                              {owner.name}
                            </span>
                            <span className={`font-mono text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                              owner.age >= 60
                                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                : 'bg-slate-100 text-slate-600'
                            }`}>
                              {owner.age} J. ({owner.sharePercentage}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Managing Directors */}
                    <td className="py-3 px-3">
                      <div className="space-y-0.5 text-[11px]">
                        {company.managingDirectors.map((md, idx) => (
                          <div key={idx} className="text-slate-700 truncate">
                            <span className="font-medium">{md.name}</span>
                            <span className="text-slate-500 text-[10px] ml-1 font-mono">({md.age} J.)</span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Balance Sheet Total */}
                    <td className="py-3 px-3 text-right">
                      <div className="font-mono font-bold text-slate-900 text-xs">
                        {company.balanceSheetTotal.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.balanceSheetTotalTrend} />
                      </div>
                    </td>

                    {/* Net Profit */}
                    <td className="py-3 px-3 text-right">
                      <div className="font-mono font-bold text-emerald-800 text-xs">
                        {company.netProfit.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.netProfitTrend} />
                      </div>
                    </td>

                    {/* Employees */}
                    <td className="py-3 px-3 text-center font-mono text-slate-700 text-xs">
                      {company.employeeCount} MA
                    </td>

                    {/* Media Rating */}
                    <td className="py-3 px-3 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <StarRating rating={company.mediaRating} size={11} showValue={false} />
                        <span className="font-mono text-[10px] text-slate-700 font-semibold">
                          {company.mediaRating.toFixed(1)} ★
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-3 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => onSelectCompany(company)}
                          className="p-1 rounded bg-slate-100 hover:bg-[#1677FF] text-slate-600 hover:text-white border border-slate-200 transition-colors"
                          title="Dossier öffnen"
                        >
                          <ExternalLink size={12} />
                        </button>
                        <button
                          onClick={() => onToggleWatchlist(company.id)}
                          className={`p-1 rounded border transition-colors ${
                            company.watchlistStatus
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-slate-100 text-slate-500 hover:text-slate-900 border-slate-200'
                          }`}
                          title={company.watchlistStatus ? 'Gemerkt' : 'Auf Watchlist'}
                        >
                          <Bookmark size={12} className={company.watchlistStatus ? 'fill-amber-500 text-amber-600' : ''} />
                        </button>
                        <button
                          onClick={() => onExportCrm(company.id)}
                          className="p-1 rounded bg-slate-100 hover:bg-emerald-600 text-slate-600 hover:text-white border border-slate-200 transition-colors"
                          title="In CRM übertragen"
                        >
                          <Send size={12} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
