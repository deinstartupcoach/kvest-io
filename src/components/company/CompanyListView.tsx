import React, { useState, useMemo } from 'react';
import { Company } from '../../types';
import { StarRating } from '../common/StarRating';
import { TrendIndicator } from '../common/TrendIndicator';
import {
  Search,
  Bookmark,
  Send,
  ExternalLink,
  ArrowUpDown,
  X,
  Download,
  BellRing
} from 'lucide-react';

interface CompanyListViewProps {
  companies: Company[];
  onSelectCompany: (company: Company) => void;
  onToggleWatchlist: (id: string) => void;
  onExportCrm: (id: string) => void;
  hideHeader?: boolean;
}

export const CompanyListView: React.FC<CompanyListViewProps> = ({
  companies,
  onSelectCompany,
  onToggleWatchlist,
  onExportCrm,
  hideHeader = false
}) => {
  // Credible Enum Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState<string>('all');
  const [ageEnum, setAgeEnum] = useState<string>('all');
  const [profitEnum, setProfitEnum] = useState<string>('all');
  const [balanceEnum, setBalanceEnum] = useState<string>('all');
  const [industryEnum, setIndustryEnum] = useState<string>('all');
  const [successionEnum, setSuccessionEnum] = useState<string>('all');
  const [ratingEnum, setRatingEnum] = useState<string>('all');

  // Table Sort & Multi-Select
  const [sortBy, setSortBy] = useState<'profit' | 'balance' | 'age' | 'media' | 'employees'>('profit');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const statesEnumList = [
    { value: 'all', label: 'DACH (Alle Bundesländer)' },
    { value: 'Baden-Württemberg', label: 'Baden-Württemberg' },
    { value: 'Bayern', label: 'Bayern' },
    { value: 'Hessen', label: 'Hessen' },
    { value: 'Nordrhein-Westfalen', label: 'Nordrhein-Westfalen' },
    { value: 'Schleswig-Holstein', label: 'Schleswig-Holstein' },
    { value: 'Sachsen', label: 'Sachsen' }
  ];

  const ageEnumList = [
    { value: 'all', label: 'Unternehmensalter: Alle' },
    { value: 'growth', label: '< 20 Jahre (Jüngerer Mittelstand)' },
    { value: 'established', label: '20–35 Jahre (Etabliert)' },
    { value: 'mature', label: '> 35 Jahre (Traditionsunternehmen)' }
  ];

  const profitEnumList = [
    { value: 'all', label: 'Bilanzgewinn: Alle' },
    { value: '1.5', label: '> 1,5 Mio. €' },
    { value: '2.5', label: '> 2,5 Mio. €' },
    { value: '3.5', label: '> 3,5 Mio. € (Top Rendite)' }
  ];

  const balanceEnumList = [
    { value: 'all', label: 'Bilanzsumme: Alle' },
    { value: '15', label: '> 15 Mio. €' },
    { value: '25', label: '> 25 Mio. €' },
    { value: '35', label: '> 35 Mio. €' }
  ];

  const industryEnumList = [
    { value: 'all', label: 'Industriesegment: Alle Branchen' },
    { value: 'Medizintechnik', label: 'C 28.29 Medizintechnik & Feinmechanik' },
    { value: 'Maschinenbau', label: 'C 28.22 Fördertechnik & Hebezeuge' },
    { value: 'Sondermaschinenbau', label: 'C 28.99 Sondermaschinenbau & Robotik' },
    { value: 'Sensorik', label: 'C 26.51 Industrielle Sensorik & IoT' },
    { value: 'Kältetechnik', label: 'C 28.25 Kälte- & Klimatechnik (HVAC)' },
    { value: 'Pumpen', label: 'C 28.13 Pumpen- & Strömungstechnik' },
    { value: 'Luft- & Raumfahrt', label: 'C 30.30 Luft- & Raumfahrt Zulieferer' },
    { value: 'Kunststoff', label: 'C 22.29 Präzisions-Kunststofftechnik' }
  ];

  const successionEnumList = [
    { value: 'all', label: 'Eignerstruktur: Alle' },
    { value: 'critical', label: 'Senior-Inhaber >60 Jahre (Hohe Nachfolgedringlichkeit)' },
    { value: 'medium', label: 'Inhaber 50–60 Jahre (Mittelfristig)' },
    { value: 'secured', label: 'Inhaber <50 Jahre (Geregelt)' }
  ];

  const ratingEnumList = [
    { value: 'all', label: 'Media / Reputation: Alle' },
    { value: '4.0', label: 'Mind. 4.0 (Solide bis Exzellent)' },
    { value: '4.5', label: 'Mind. 4.5 (Top Tier Reputation)' }
  ];

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
    setSelectedState('all');
    setAgeEnum('all');
    setProfitEnum('all');
    setBalanceEnum('all');
    setIndustryEnum('all');
    setSuccessionEnum('all');
    setRatingEnum('all');
  };

  const hasActiveFilters = Boolean(
    searchTerm ||
    selectedState !== 'all' ||
    ageEnum !== 'all' ||
    profitEnum !== 'all' ||
    balanceEnum !== 'all' ||
    industryEnum !== 'all' ||
    successionEnum !== 'all' ||
    ratingEnum !== 'all'
  );

  // Filtered & Sorted Logic
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

        if (selectedState !== 'all' && c.state !== selectedState) {
          return false;
        }

        if (ageEnum === 'growth' && c.age >= 20) return false;
        if (ageEnum === 'established' && (c.age < 20 || c.age > 35)) return false;
        if (ageEnum === 'mature' && c.age <= 35) return false;

        if (profitEnum !== 'all' && c.netProfit < Number(profitEnum)) {
          return false;
        }

        if (balanceEnum !== 'all' && c.balanceSheetTotal < Number(balanceEnum)) {
          return false;
        }

        if (industryEnum !== 'all' && !c.industry.includes(industryEnum)) {
          return false;
        }

        if (successionEnum === 'critical' && c.successionScore !== 'CRITICAL_HIGH') {
          return false;
        }
        if (successionEnum === 'medium' && c.successionScore !== 'MEDIUM') {
          return false;
        }
        if (successionEnum === 'secured' && c.successionScore !== 'SECURED') {
          return false;
        }

        if (ratingEnum !== 'all' && c.mediaRating < Number(ratingEnum)) {
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
    selectedState,
    ageEnum,
    profitEnum,
    balanceEnum,
    industryEnum,
    successionEnum,
    ratingEnum,
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
      {/* 1. Header Row */}
      {!hideHeader && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-[#0B1633] tracking-tight">
              Target Search
            </h1>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {filteredCount} von {totalUniverse} Targets
            </span>
          </div>

          <div className="flex items-center gap-2">
            {selectedRows.length > 0 && (
              <button
                onClick={() => selectedRows.forEach(id => onExportCrm(id))}
                className="px-3 py-1.5 rounded bg-[#0B1633] hover:bg-[#162750] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Send size={13} />
                <span>{selectedRows.length} in CRM Sync</span>
              </button>
            )}
            <button className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors">
              <Download size={13} />
              <span>Excel Export</span>
            </button>
            <button className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors">
              <BellRing size={13} />
              <span>Deal Alert</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. Structured Screener Filter Bar */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* Enum 1: Eigner & Nachfolge */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              1. Eigner &amp; Nachfolge
            </label>
            <select
              value={successionEnum}
              onChange={(e) => setSuccessionEnum(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {successionEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Enum 2: Bilanzgewinn */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              2. Bilanzgewinn (€)
            </label>
            <select
              value={profitEnum}
              onChange={(e) => setProfitEnum(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {profitEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Enum 3: Unternehmensalter */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              3. Unternehmensalter
            </label>
            <select
              value={ageEnum}
              onChange={(e) => setAgeEnum(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {ageEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Enum 4: Industriesegment (WZ-Code) */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              4. Industriesegment
            </label>
            <select
              value={industryEnum}
              onChange={(e) => setIndustryEnum(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {industryEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Enum 5: Standort / Bundesland */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              5. Standort (Region)
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {statesEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>

          {/* Enum 6: Media / Management Rating */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              6. Media / Reputation
            </label>
            <select
              value={ratingEnum}
              onChange={(e) => setRatingEnum(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-900 outline-none focus:border-[#0B1633]"
            >
              {ratingEnumList.map(item => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Free text search & Active Criteria Tags */}
        <div className="pt-2.5 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="relative w-full md:w-80">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Volltextsuche: Firma, Stadt, Gesellschafter, HRB..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 focus:border-[#0B1633] rounded text-xs text-slate-900 placeholder:text-slate-400 outline-none"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {successionEnum !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-medium">
                Eigner &gt; 60 J.
                <button onClick={() => setSuccessionEnum('all')} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {profitEnum !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] font-medium font-mono">
                Gewinn &gt; {profitEnum}M €
                <button onClick={() => setProfitEnum('all')} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {ageEnum !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 text-[11px] font-medium">
                {ageEnumList.find(a => a.value === ageEnum)?.label}
                <button onClick={() => setAgeEnum('all')} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {industryEnum !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-900 text-[11px] font-medium">
                {industryEnum}
                <button onClick={() => setIndustryEnum('all')} className="hover:text-black"><X size={10} /></button>
              </span>
            )}
            {selectedState !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 text-[11px] font-medium">
                {selectedState}
                <button onClick={() => setSelectedState('all')} className="hover:text-black"><X size={10} /></button>
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

      {/* 3. Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-sans">
        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Gefilterte Targets</span>
          <div className="text-xl font-bold text-[#0B1633] font-mono mt-0.5">{filteredCount}</div>
          <span className="text-[10px] text-slate-400">von {totalUniverse} im System</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wide block">Nachfolge-Fokus</span>
          <div className="text-xl font-bold text-amber-700 font-mono mt-0.5">{criticalSuccessionCount}</div>
          <span className="text-[10px] text-slate-400">Hauptgesellschafter &gt; 60 Jahre</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block">Ø Bilanzgewinn</span>
          <div className="text-xl font-bold text-emerald-700 font-mono mt-0.5">{avgProfit} Mio. €</div>
          <span className="text-[10px] text-slate-400">Ø Rendite im Set</span>
        </div>

        <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
          <span className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">Ø Bilanzsumme</span>
          <div className="text-xl font-bold text-[#0B1633] font-mono mt-0.5">{avgBalance} Mio. €</div>
          <span className="text-[10px] text-slate-400">Substanzwert</span>
        </div>
      </div>

      {/* 4. Table Controls */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div className="flex items-center gap-2">
          <span>Sortieren nach:</span>
          <div className="flex items-center gap-1 font-semibold text-[#0B1633]">
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

      {/* 5. Institutional Target Screener Table with Alternate Rows & Stronger Hover */}
      <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider select-none">
                <th className="py-3 px-3 w-9 text-center">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === filteredCompanies.length && filteredCompanies.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-[#0B1633] focus:ring-0 cursor-pointer"
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
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredCompanies.map((company, idx) => {
                const isSelected = selectedRows.includes(company.id);
                const isEven = idx % 2 === 1;

                return (
                  <tr
                    key={company.id}
                    onClick={() => onSelectCompany(company)}
                    className={`cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-blue-50/80 font-medium'
                        : isEven
                        ? 'bg-[#F8FAFC] hover:bg-[#E2E8F0]/80'
                        : 'bg-white hover:bg-[#E2E8F0]/80'
                    }`}
                  >
                    <td className="py-3.5 px-3 text-center" onClick={(e) => toggleRow(company.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded border-slate-300 text-[#0B1633] focus:ring-0 cursor-pointer"
                      />
                    </td>

                    {/* Company Name */}
                    <td className="py-3.5 px-4">
                      <div>
                        <span className="font-bold text-[#0B1633] text-xs hover:underline">
                          {company.name}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-500 font-sans">
                          <span className="font-medium text-slate-700">{company.city}</span>
                          <span>•</span>
                          <span>{company.state}</span>
                          <span>•</span>
                          <span className="font-mono text-slate-600">{company.age} J. (Gegr. {company.foundingYear})</span>
                        </div>
                      </div>
                    </td>

                    {/* Industry */}
                    <td className="py-3.5 px-3">
                      <div className="text-[11px] text-slate-700 font-medium truncate max-w-[180px]">
                        {company.industry}
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 block mt-0.5">
                        WZ: {company.wzCode}
                      </span>
                    </td>

                    {/* Owners */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-1">
                        {company.owners.map((owner, oIdx) => (
                          <div key={oIdx} className="flex items-center justify-between gap-1.5 text-[11px]">
                            <span className="text-slate-700 truncate max-w-[125px]">
                              {owner.name}
                            </span>
                            <span className={`font-mono text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                              owner.age >= 60
                                ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}>
                              {owner.age} J. ({owner.sharePercentage}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Managing Directors */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-0.5 text-[11px]">
                        {company.managingDirectors.map((md, mdIdx) => (
                          <div key={mdIdx} className="text-slate-700 truncate">
                            <span className="font-medium">{md.name}</span>
                            <span className="text-slate-500 text-[10px] ml-1 font-mono">({md.age} J.)</span>
                          </div>
                        ))}
                      </div>
                    </td>

                    {/* Balance Sheet Total */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="font-mono font-bold text-slate-900 text-xs">
                        {company.balanceSheetTotal.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.balanceSheetTotalTrend} />
                      </div>
                    </td>

                    {/* Net Profit */}
                    <td className="py-3.5 px-3 text-right">
                      <div className="font-mono font-bold text-emerald-800 text-xs">
                        {company.netProfit.toFixed(1)} Mio. €
                      </div>
                      <div className="mt-0.5">
                        <TrendIndicator value={company.netProfitTrend} />
                      </div>
                    </td>

                    {/* Employees */}
                    <td className="py-3.5 px-3 text-center font-mono text-slate-700 text-xs">
                      {company.employeeCount} MA
                    </td>

                    {/* Media Rating */}
                    <td className="py-3.5 px-3 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <StarRating rating={company.mediaRating} size={11} showValue={false} />
                        <span className="font-mono text-[10px] text-slate-700 font-semibold">
                          {company.mediaRating.toFixed(1)}
                        </span>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => onSelectCompany(company)}
                          className="p-1 rounded bg-white hover:bg-[#0B1633] text-slate-600 hover:text-white border border-slate-300 transition-colors shadow-2xs"
                          title="Dossier öffnen"
                        >
                          <ExternalLink size={12} />
                        </button>
                        <button
                          onClick={() => onToggleWatchlist(company.id)}
                          className={`p-1 rounded border transition-colors shadow-2xs ${
                            company.watchlistStatus
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-white text-slate-500 hover:text-slate-900 border-slate-300'
                          }`}
                          title={company.watchlistStatus ? 'Gemerkt' : 'Auf Watchlist'}
                        >
                          <Bookmark size={12} className={company.watchlistStatus ? 'fill-amber-500 text-amber-600' : ''} />
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
