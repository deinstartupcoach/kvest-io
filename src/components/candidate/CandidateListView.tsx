import React, { useState, useMemo } from 'react';
import { Candidate } from '../../types';
import { PdfUploadParser } from './PdfUploadParser';
import {
  Search,
  Bookmark,
  Send,
  ExternalLink,
  Download,
  BellRing
} from 'lucide-react';

interface CandidateListViewProps {
  candidates: Candidate[];
  onSelectCandidate: (candidate: Candidate) => void;
  onToggleShortlist: (id: string) => void;
  hideHeader?: boolean;
}

export const CandidateListView: React.FC<CandidateListViewProps> = ({
  candidates,
  onSelectCandidate,
  onToggleShortlist,
  hideHeader = false
}) => {
  const [promptText, setPromptText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [minAge, setMinAge] = useState<number>(0);
  const [minLeadershipExp, setMinLeadershipExp] = useState<number>(0);
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'experience' | 'leadership' | 'age'>('match');
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);

  const roles = ['CEO', 'COO', 'CFO', 'CTO', 'Managing Director', 'CCO'];
  const locations = ['Stuttgart', 'München', 'Nürnberg', 'Frankfurt am Main', 'Hamburg'];

  const handleApplyParsedFilters = (data: {
    targetRole?: string;
    industry?: string;
    minLeadershipYears?: number;
    minExperienceYears?: number;
  }) => {
    if (data.targetRole) setSelectedRole(data.targetRole);
    if (data.minLeadershipYears) setMinLeadershipExp(data.minLeadershipYears);
  };

  const resetFilters = () => {
    setPromptText('');
    setSearchTerm('');
    setSelectedRole('all');
    setMinAge(0);
    setMinLeadershipExp(0);
    setSelectedLocation('all');
  };

  const toggleSelectAll = () => {
    if (selectedCandidates.length === filteredCandidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(filteredCandidates.map(c => c.id));
    }
  };

  const toggleRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCandidates(prev =>
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const filteredCandidates = useMemo(() => {
    return candidates
      .filter((c) => {
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matchName = c.name.toLowerCase().includes(term);
          const matchRole = c.currentRole.toLowerCase().includes(term);
          const matchCompany = c.currentCompany.toLowerCase().includes(term);
          const matchLocation = c.location.toLowerCase().includes(term);
          const matchIndustry = c.industries.some(i => i.toLowerCase().includes(term));
          if (!matchName && !matchRole && !matchCompany && !matchLocation && !matchIndustry) return false;
        }

        if (selectedRole !== 'all' && !c.currentRole.includes(selectedRole) && !c.targetRoles.some(r => r.includes(selectedRole))) {
          return false;
        }

        if (minAge > 0 && c.age < minAge) {
          return false;
        }

        if (minLeadershipExp > 0 && c.leadershipExperienceYears < minLeadershipExp) {
          return false;
        }

        if (selectedLocation !== 'all' && !c.location.includes(selectedLocation)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'match') return b.matchScore - a.matchScore;
        if (sortBy === 'experience') return b.totalExperienceYears - a.totalExperienceYears;
        if (sortBy === 'leadership') return b.leadershipExperienceYears - a.leadershipExperienceYears;
        if (sortBy === 'age') return a.age - b.age;
        return 0;
      });
  }, [
    candidates,
    searchTerm,
    selectedRole,
    minAge,
    minLeadershipExp,
    selectedLocation,
    sortBy
  ]);

  const totalUniverse = candidates.length;
  const filteredCount = filteredCandidates.length;

  return (
    <div className="space-y-4">
      {/* 1. Header Row (Transparent Sand Tint) */}
      {!hideHeader && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#E9DFCF]/25 border border-[#D8CCB9]/80 p-4 rounded-lg shadow-2xs">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-[#0B1633] tracking-tight">
              Candidate Search
            </h1>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/80 text-slate-800 border border-[#D8CCB9]/70">
              {filteredCount} von {totalUniverse} Kandidaten
            </span>
          </div>

          <div className="flex items-center gap-2">
            {selectedCandidates.length > 0 && (
              <button
                onClick={() => selectedCandidates.forEach(id => onToggleShortlist(id))}
                className="px-3 py-1.5 rounded bg-[#0B1633] hover:bg-[#162750] text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Bookmark size={13} />
                <span>{selectedCandidates.length} in Shortlist</span>
              </button>
            )}
            <button className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors shadow-2xs">
              <Download size={13} />
              <span>Excel Export</span>
            </button>
            <button className="px-3 py-1.5 rounded bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition-colors shadow-2xs">
              <BellRing size={13} />
              <span>Talent Alert</span>
            </button>
          </div>
        </div>
      )}

      {/* Briefing Prompt & PDF Upload (Transparent Sand Tint) */}
      <PdfUploadParser
        promptText={promptText}
        onPromptChange={setPromptText}
        onApplyParsedFilters={handleApplyParsedFilters}
      />

      {/* Screener Filter Bar (Transparent Sand Tint) */}
      <div className="bg-[#E9DFCF]/25 rounded-lg border border-[#D8CCB9]/80 p-4 shadow-2xs space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          {/* Target Role */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              1. Zielrolle / Funktion
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs font-medium text-slate-900 outline-none"
            >
              <option value="all">Alle Rollen (C-Level / GF)</option>
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Min Leadership Experience */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              2. Führungserfahrung
            </label>
            <select
              value={minLeadershipExp}
              onChange={(e) => setMinLeadershipExp(Number(e.target.value))}
              className="w-full px-2.5 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs font-medium text-slate-900 outline-none"
            >
              <option value={0}>Führung: Beliebig</option>
              <option value={8}>Mind. 8 Jahre</option>
              <option value={12}>Mind. 12 Jahre</option>
              <option value={15}>Mind. 15 Jahre</option>
            </select>
          </div>

          {/* Age Spectrum */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              3. Altersspektrum
            </label>
            <select
              value={minAge}
              onChange={(e) => setMinAge(Number(e.target.value))}
              className="w-full px-2.5 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs font-medium text-slate-900 outline-none"
            >
              <option value={0}>Alter: Alle</option>
              <option value={40}>&gt; 40 Jahre</option>
              <option value={45}>&gt; 45 Jahre</option>
              <option value={50}>&gt; 50 Jahre</option>
            </select>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#0B1633] uppercase tracking-wide block">
              4. Standort / Radius
            </label>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-2.5 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs font-medium text-slate-900 outline-none"
            >
              <option value="all">DACH gesamt</option>
              {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>
          </div>
        </div>

        {/* Free text search & Active filters */}
        <div className="pt-2.5 border-t border-[#D8CCB9]/60 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <div className="relative w-full md:w-80">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Name, Arbeitgeber, Fachbereich..."
              className="w-full pl-9 pr-3 py-1.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs text-slate-900 placeholder:text-slate-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            {(searchTerm || selectedRole !== 'all' || minAge > 0 || minLeadershipExp > 0 || selectedLocation !== 'all' || promptText) && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-rose-700 hover:text-rose-900 underline"
              >
                Filter zurücksetzen
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-600 px-1">
        <div className="flex items-center gap-2">
          <span>Gefundene Profile: <strong className="text-slate-900">{filteredCandidates.length}</strong></span>
          {selectedCandidates.length > 0 && (
            <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200 font-semibold font-mono text-[11px]">
              {selectedCandidates.length} markiert
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span>Sortieren nach:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-300 rounded px-2 py-0.5 text-xs text-slate-800 outline-none cursor-pointer"
            >
              <option value="match">Match Score (%)</option>
              <option value="leadership">Führungserfahrung</option>
              <option value="experience">Gesamterfahrung</option>
              <option value="age">Alter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Table with Alternate Rows & Stronger Hover */}
      <div className="bg-white border border-[#E2E8F0] rounded-lg overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold uppercase text-[10px] tracking-wider select-none">
                <th className="py-3 px-3 w-9 text-center">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.length === filteredCandidates.length && filteredCandidates.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-slate-300 text-[#0B1633] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4 min-w-[240px]">Kandidat &amp; Aktuelle Position</th>
                <th className="py-3 px-3 min-w-[130px]">Match-Score</th>
                <th className="py-3 px-3 min-w-[160px]">Erfahrung &amp; Führung</th>
                <th className="py-3 px-3 min-w-[160px]">Branchenfokus</th>
                <th className="py-3 px-3 text-center">Standort / Radius</th>
                <th className="py-3 px-3 text-center">Gehaltskorridor</th>
                <th className="py-3 px-3 text-center w-24">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              {filteredCandidates.map((candidate, idx) => {
                const isSelected = selectedCandidates.includes(candidate.id);
                const isEven = idx % 2 === 1;

                return (
                  <tr
                    key={candidate.id}
                    onClick={() => onSelectCandidate(candidate)}
                    className={`cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-blue-50/80 font-medium'
                        : isEven
                        ? 'bg-[#F8FAFC] hover:bg-[#E2E8F0]/80'
                        : 'bg-white hover:bg-[#E2E8F0]/80'
                    }`}
                  >
                    <td className="py-3.5 px-3 text-center" onClick={(e) => toggleRow(candidate.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded border-slate-300 text-[#0B1633] focus:ring-0 cursor-pointer"
                      />
                    </td>

                    {/* Candidate Info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={candidate.avatarUrl}
                          alt={candidate.name}
                          className="w-9 h-9 rounded-lg object-cover border border-slate-300 shrink-0"
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#0B1633] text-xs hover:underline">
                              {candidate.name}
                            </span>
                            <span className="font-mono text-[10px] text-slate-500">({candidate.age} J.)</span>
                          </div>
                          <p className="text-[11px] text-slate-700 font-medium">
                            {candidate.currentRole}
                          </p>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {candidate.currentCompany}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Match Score */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-sm text-[#0B1633] bg-slate-100 border border-slate-300 px-2 py-0.5 rounded">
                          {candidate.matchScore}%
                        </span>
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold uppercase text-emerald-800 block">Top Match</span>
                          <span className="text-[10px] text-slate-500 font-mono">{candidate.status}</span>
                        </div>
                      </div>
                    </td>

                    {/* Experience */}
                    <td className="py-3.5 px-3">
                      <div className="font-mono text-[11px] space-y-0.5">
                        <div className="text-slate-800 font-semibold">{candidate.totalExperienceYears} J. Gesamt</div>
                        <div className="text-[#0B1633]">{candidate.leadershipExperienceYears} J. C-Level / Führung</div>
                      </div>
                    </td>

                    {/* Industries */}
                    <td className="py-3.5 px-3">
                      <div className="flex flex-wrap gap-1">
                        {candidate.industries.slice(0, 2).map((ind, iIdx) => (
                          <span
                            key={iIdx}
                            className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-700 border border-slate-200"
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-3 text-center">
                      <div className="font-medium text-slate-800 text-xs">{candidate.location}</div>
                      <span className="text-[10px] text-slate-500 font-mono">Radius {candidate.radiusKm} km</span>
                    </td>

                    {/* Salary */}
                    <td className="py-3.5 px-3 text-center font-mono text-emerald-800 text-xs font-bold">
                      {candidate.salaryExpectation.min}k – {candidate.salaryExpectation.max}k €
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-3 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => onSelectCandidate(candidate)}
                          className="p-1 rounded bg-white hover:bg-[#0B1633] text-slate-600 hover:text-white border border-slate-300 transition-colors shadow-2xs"
                          title="Profil öffnen"
                        >
                          <ExternalLink size={12} />
                        </button>
                        <button
                          onClick={() => onToggleShortlist(candidate.id)}
                          className={`p-1 rounded border transition-colors shadow-2xs ${
                            candidate.shortlisted
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-white text-slate-500 hover:text-slate-900 border-slate-300'
                          }`}
                          title={candidate.shortlisted ? 'In Shortlist' : 'Zur Shortlist'}
                        >
                          <Bookmark size={12} className={candidate.shortlisted ? 'fill-amber-500 text-amber-600' : ''} />
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
