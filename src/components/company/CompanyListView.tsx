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
  Check
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
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  const [selectedLegalForms, setSelectedLegalForms] = useState<string[]>([]);
  const [selectedEmployeeBrackets, setSelectedEmployeeBrackets] = useState<string[]>([]);
  const [minAge, setMinAge] = useState<number>(0);
  const [successionOnly, setSuccessionOnly] = useState<boolean>(false);
  const [minProfit, setMinProfit] = useState<number>(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'balance' | 'profit' | 'age' | 'media' | 'employees'>('profit');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const allStates = ['Baden-Württemberg', 'Bayern', 'Hessen', 'Nordrhein-Westfalen', 'Schleswig-Holstein', 'Sachsen'];
  const allLegalForms = ['GmbH', 'GmbH & Co. KG', 'AG'];
  const employeeBrackets = ['10-49', '50-199', '200-499', '500+'];

  // Toggle helpers
  const toggleState = (state: string) => {
    setSelectedStates(prev => 
      prev.includes(state) ? prev.filter(s => s !== state) : [...prev, state]
    );
  };

  const toggleSelectAllRows = () => {
    if (selectedRows.length === filteredCompanies.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredCompanies.map(c => c.id));
    }
  };

  const toggleRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedRows(prev => 
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedStates([]);
    setSelectedLegalForms([]);
    setSelectedEmployeeBrackets([]);
    setMinAge(0);
    setSuccessionOnly(false);
    setMinProfit(0);
    setSelectedIndustry('all');
  };

  // Filtered & Sorted Companies
  const filteredCompanies = useMemo(() => {
    return companies
      .filter((c) => {
        // Search term
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matchName = c.name.toLowerCase().includes(term);
          const matchCity = c.city.toLowerCase().includes(term);
          const matchIndustry = c.industry.toLowerCase().includes(term);
          const matchWz = c.wzCode.toLowerCase().includes(term);
          const matchOwner = c.owners.some(o => o.name.toLowerCase().includes(term));
          if (!matchName && !matchCity && !matchIndustry && !matchWz && !matchOwner) return false;
        }

        // Bundesland
        if (selectedStates.length > 0 && !selectedStates.includes(c.state)) {
          return false;
        }

        // Legal form
        if (selectedLegalForms.length > 0 && !selectedLegalForms.includes(c.legalForm)) {
          return false;
        }

        // Employee brackets
        if (selectedEmployeeBrackets.length > 0 && !selectedEmployeeBrackets.includes(c.employeeBracket)) {
          return false;
        }

        // Min Age
        if (minAge > 0 && c.age < minAge) {
          return false;
        }

        // Succession filter (>60 J. owner)
        if (successionOnly && c.successionScore !== 'CRITICAL_HIGH') {
          return false;
        }

        // Min net profit
        if (minProfit > 0 && c.netProfit < minProfit) {
          return false;
        }

        // Industry
        if (selectedIndustry !== 'all' && !c.industry.includes(selectedIndustry)) {
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
    selectedLegalForms,
    selectedEmployeeBrackets,
    minAge,
    successionOnly,
    minProfit,
    selectedIndustry,
    sortBy,
    sortOrder
  ]);

  // Summary Metrics
  const totalCount = companies.length;
  const criticalSuccessionCount = companies.filter(c => c.successionScore === 'CRITICAL_HIGH').length;
  const avgProfit = (companies.reduce((acc, c) => acc + c.netProfit, 0) / (totalCount || 1)).toFixed(1);
  const avgBalance = (companies.reduce((acc, c) => acc + c.balanceSheetTotal, 0) / (totalCount || 1)).toFixed(1);

  return (
    <div className="space-y-5">
      {/* Top Metric Header Chips (Benchmark Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="p-3.5 bg-[#0B1633] rounded-xl border border-[#1677FF]/40 relative overflow-hidden shadow-lg group">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
            <span>GESAMT TARGETS</span>
            <Building2 size={15} className="text-[#1677FF]" />
          </div>
          <div className="text-2xl font-black text-white font-mono mt-1">{totalCount.toLocaleString('de-DE')}</div>
          <span className="text-[10px] text-[#69B8FF] block mt-0.5">Mittelstand DACH</span>
        </div>

        <div className="p-3.5 bg-[#0B1633] rounded-xl border border-amber-500/40 relative overflow-hidden shadow-lg group">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 flex items-center justify-between">
            <span>🚨 NACHFOLGE-FOKUS</span>
            <AlertTriangle size={15} className="text-amber-400" />
          </div>
          <div className="text-2xl font-black text-amber-300 font-mono mt-1">{criticalSuccessionCount}</div>
          <span className="text-[10px] text-amber-200/70 block mt-0.5">Eigner &gt; 60 Jahre</span>
        </div>

        <div className="p-3.5 bg-[#0B1633] rounded-xl border border-[#10B981]/40 relative overflow-hidden shadow-lg group">
          <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-between">
            <span>Ø BILANZGEWINN</span>
            <span className="text-xs font-mono">EUR</span>
          </div>
          <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{avgProfit} Mio. €</div>
          <span className="text-[10px] text-emerald-300/70 block mt-0.5">Profitables Kerngeschäft</span>
        </div>

        <div className="p-3.5 bg-[#0B1633] rounded-xl border border-[#1F3163] relative overflow-hidden shadow-lg group">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#69B8FF] flex items-center justify-between">
            <span>Ø BILANZSUMME</span>
            <span className="text-xs font-mono">EUR</span>
          </div>
          <div className="text-2xl font-black text-white font-mono mt-1">{avgBalance} Mio. €</div>
          <span className="text-[10px] text-slate-400 block mt-0.5">Substanzwert</span>
        </div>

        <div className="p-3.5 bg-[#0B1633] rounded-xl border border-[#8B5CF6]/40 relative overflow-hidden shadow-lg group">
          <div className="text-[11px] font-bold uppercase tracking-wider text-purple-300 flex items-center justify-between">
            <span>MEDIA SCORE</span>
            <Sparkles size={15} className="text-purple-400" />
          </div>
          <div className="text-2xl font-black text-purple-300 font-mono mt-1">4.4 ★</div>
          <span className="text-[10px] text-purple-300/70 block mt-0.5">Reputations-Index</span>
        </div>
      </div>

      {/* Filter Control Bar */}
      <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-4 space-y-4 shadow-xl">
        {/* Row 1: Search and Primary Quick Filters */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Suche nach Name, Stadt, Branche, WZ-Code, Gesellschafter..."
              className="w-full pl-10 pr-4 py-2 bg-[#070E22] border border-[#1F3163] focus:border-[#1677FF] rounded-lg text-xs text-white placeholder:text-slate-500 outline-none transition-all"
            />
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-2 w-full md:w-auto flex-wrap justify-end">
            <button
              onClick={() => setSuccessionOnly(!successionOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                successionOnly
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                  : 'bg-[#0E1A3C] text-slate-300 border-[#1F3163] hover:border-amber-500/40'
              }`}
            >
              <AlertTriangle size={13} className={successionOnly ? 'text-amber-400' : 'text-slate-400'} />
              Nur Nachfolge &gt;60 J. Eigner
            </button>

            <select
              value={minAge}
              onChange={(e) => setMinAge(Number(e.target.value))}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Mindestalter: Alle</option>
              <option value={15}>Mindestalter: &gt; 15 Jahre</option>
              <option value={25}>Mindestalter: &gt; 25 Jahre</option>
              <option value={35}>Mindestalter: &gt; 35 Jahre</option>
            </select>

            <select
              value={minProfit}
              onChange={(e) => setMinProfit(Number(e.target.value))}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Min. Gewinn: Alle</option>
              <option value={1.5}>Min. Gewinn: &gt; 1,5 Mio. €</option>
              <option value={2.5}>Min. Gewinn: &gt; 2,5 Mio. €</option>
              <option value={3.5}>Min. Gewinn: &gt; 3,5 Mio. €</option>
            </select>

            {(searchTerm || selectedStates.length > 0 || selectedLegalForms.length > 0 || selectedEmployeeBrackets.length > 0 || minAge > 0 || successionOnly || minProfit > 0) && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1.5 bg-[#0E1A3C] hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-[#1F3163] rounded-lg text-xs flex items-center gap-1 transition-all"
                title="Filter zurücksetzen"
              >
                <RotateCcw size={12} />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Bundesland Multiple Choice Pills */}
        <div className="flex items-center gap-2 pt-2 border-t border-[#1F3163]/60 flex-wrap">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <MapPin size={12} className="text-[#1677FF]" /> Bundesland:
          </span>
          {allStates.map((state) => {
            const isSelected = selectedStates.includes(state);
            return (
              <button
                key={state}
                onClick={() => toggleState(state)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all flex items-center gap-1 ${
                  isSelected
                    ? 'bg-[#1677FF] text-white border-blue-400 font-semibold shadow-[0_0_8px_rgba(22,119,255,0.3)]'
                    : 'bg-[#0E1A3C] text-slate-300 border-[#1F3163] hover:border-slate-500'
                }`}
              >
                {isSelected && <Check size={11} />}
                {state}
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Toolbar above Table */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div className="flex items-center gap-3 font-mono">
          <span>Gefunden: <strong className="text-white">{filteredCompanies.length}</strong> von {totalCount} Targets</span>
          {selectedRows.length > 0 && (
            <span className="bg-[#1677FF]/20 text-[#69B8FF] px-2 py-0.5 rounded border border-[#1677FF]/40">
              {selectedRows.length} ausgewählt
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {selectedRows.length > 0 && (
            <button
              onClick={() => selectedRows.forEach(id => onExportCrm(id))}
              className="px-3 py-1.5 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 text-white font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <Send size={12} />
              {selectedRows.length} in CRM exportieren
            </button>
          )}

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1 bg-[#0B1633] border border-[#1F3163] rounded-lg px-2.5 py-1 text-slate-300">
            <ArrowUpDown size={12} className="text-[#1677FF]" />
            <span className="text-[11px]">Sortierung:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs font-semibold text-[#69B8FF] outline-none cursor-pointer"
            >
              <option value="profit" className="bg-[#0B1633] text-white">Bilanzgewinn</option>
              <option value="balance" className="bg-[#0B1633] text-white">Bilanzsumme</option>
              <option value="age" className="bg-[#0B1633] text-white">Unternehmensalter</option>
              <option value="employees" className="bg-[#0B1633] text-white">Mitarbeiter</option>
              <option value="media" className="bg-[#0B1633] text-white">Media-Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Companies Data Table */}
      <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#070E22] border-b border-[#1F3163] text-slate-300 font-semibold uppercase text-[10px] tracking-wider select-none">
                <th className="py-3.5 px-3 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredCompanies.length && filteredCompanies.length > 0}
                    onChange={toggleSelectAllRows}
                    className="rounded border-[#1F3163] bg-[#0E1A3C] text-[#1677FF] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4 min-w-[240px]">Firma &amp; Rechtsform / Sitz</th>
                <th className="py-3.5 px-3 min-w-[190px]">Eignerstruktur &amp; Alter</th>
                <th className="py-3.5 px-3 min-w-[150px]">Geschäftsführung (GF)</th>
                <th className="py-3.5 px-3 text-right">Bilanzsumme</th>
                <th className="py-3.5 px-3 text-right">Bilanzgewinn</th>
                <th className="py-3.5 px-3 text-center">Mitarbeiter</th>
                <th className="py-3.5 px-3 text-center">Media-Check</th>
                <th className="py-3.5 px-4 text-center">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F3163]/50 font-sans">
              {filteredCompanies.map((company) => {
                const isSelected = selectedRows.includes(company.id);
                const hasSeniorOwner = company.owners.some(o => o.age >= 60);

                return (
                  <tr
                    key={company.id}
                    onClick={() => onSelectCompany(company)}
                    className={`cursor-pointer transition-colors duration-150 group ${
                      isSelected
                        ? 'bg-[#1677FF]/10 hover:bg-[#1677FF]/15'
                        : 'hover:bg-[#0E1A3C]'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3.5 px-3 text-center" onClick={(e) => toggleRow(company.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded border-[#1F3163] bg-[#0E1A3C] text-[#1677FF] focus:ring-0 cursor-pointer"
                      />
                    </td>

                    {/* Company Name, Legal Form & State */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-start gap-2.5">
                        <div className="mt-0.5 w-7 h-7 rounded-lg bg-[#162750] border border-[#1677FF]/30 flex items-center justify-center text-white shrink-0 group-hover:border-[#1677FF] transition-colors">
                          <Building2 size={15} className="text-[#69B8FF]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-white text-xs group-hover:text-[#69B8FF] transition-colors">
                              {company.name}
                            </span>
                            {company.successionScore === 'CRITICAL_HIGH' && (
                              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-subtle" title="Hohe Nachfolgedringlichkeit"></span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400 font-mono">
                            <span className="text-slate-300 font-medium">{company.city}</span>
                            <span>•</span>
                            <span>{company.state}</span>
                            <span>•</span>
                            <span className="text-[#69B8FF]">{company.age} J.</span>
                            <span>•</span>
                            <span className="text-slate-400">{company.wzCode}</span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Ownership Structure & Age */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-1">
                        {company.owners.map((owner, idx) => (
                          <div key={idx} className="flex items-center justify-between gap-2 text-[11px]">
                            <span className="text-slate-200 truncate max-w-[130px]">
                              {owner.name}
                            </span>
                            <span className={`font-mono font-semibold px-1.5 py-0.2 rounded text-[10px] ${
                              owner.age >= 60
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-[#0E1A3C] text-slate-300'
                            }`}>
                              {owner.age} J. ({owner.sharePercentage}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Managing Directors */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-1 text-[11px]">
                        {company.managingDirectors.map((md, idx) => (
                          <div key={idx} className="text-slate-300">
                            <span className="font-medium text-white">{md.name}</span>
                            <span className="font-mono text-slate-400 ml-1 text-[10px]">({md.age} J.)</span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Balance Sheet Total */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="font-mono font-bold text-white text-xs">
                        {company.balanceSheetTotal.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.balanceSheetTotalTrend} />
                      </div>
                    </td>

                    {/* Net Profit */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="font-mono font-bold text-emerald-400 text-xs">
                        {company.netProfit.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.netProfitTrend} />
                      </div>
                    </td>

                    {/* Employee Count */}
                    <td className="py-3.5 px-3 text-center font-mono text-slate-200 text-xs">
                      <span className="bg-[#0E1A3C] px-2 py-0.5 rounded border border-[#1F3163]">
                        {company.employeeCount} MA
                      </span>
                    </td>

                    {/* Media Rating */}
                    <td className="py-3.5 px-3 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <StarRating rating={company.mediaRating} size={12} showValue={false} />
                        <span className="font-mono text-[10px] text-amber-300 font-semibold">
                          {company.mediaRating.toFixed(1)} ★
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onSelectCompany(company)}
                          className="p-1.5 rounded-md bg-[#0E1A3C] hover:bg-[#1677FF] text-slate-300 hover:text-white border border-[#1F3163] hover:border-[#1677FF] transition-all"
                          title="Detail-Dossier öffnen"
                        >
                          <ExternalLink size={13} />
                        </button>
                        <button
                          onClick={() => onToggleWatchlist(company.id)}
                          className={`p-1.5 rounded-md border transition-all ${
                            company.watchlistStatus
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-[#0E1A3C] text-slate-400 hover:text-white border-[#1F3163]'
                          }`}
                          title={company.watchlistStatus ? 'Auf Watchlist' : 'Zu Watchlist hinzufügen'}
                        >
                          <Bookmark size={13} className={company.watchlistStatus ? 'fill-amber-400 text-amber-400' : ''} />
                        </button>
                        <button
                          onClick={() => onExportCrm(company.id)}
                          className="p-1.5 rounded-md bg-[#0E1A3C] hover:bg-emerald-600 text-slate-400 hover:text-white border border-[#1F3163] hover:border-emerald-500 transition-all"
                          title="Export to CRM"
                        >
                          <Send size={13} />
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
