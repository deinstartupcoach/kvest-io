import React, { useState, useMemo } from 'react';
import { Candidate } from '../../types';
import { PdfUploadParser } from './PdfUploadParser';
import { Badge } from '../common/Badge';
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  Bookmark,
  Send,
  ExternalLink,
  Users,
  Award,
  Sparkles,
  ArrowUpDown,
  RotateCcw,
  Check,
  Building2,
  Calendar
} from 'lucide-react';

interface CandidateListViewProps {
  candidates: Candidate[];
  onSelectCandidate: (candidate: Candidate) => void;
  onToggleShortlist: (id: string) => void;
}

export const CandidateListView: React.FC<CandidateListViewProps> = ({
  candidates,
  onSelectCandidate,
  onToggleShortlist
}) => {
  // Search & Prompt State
  const [promptText, setPromptText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [minAge, setMinAge] = useState<number>(0);
  const [maxAge, setMaxAge] = useState<number>(100);
  const [minTotalExp, setMinTotalExp] = useState<number>(0);
  const [minLeadershipExp, setMinLeadershipExp] = useState<number>(0);
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'experience' | 'leadership' | 'age'>('match');
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);

  const roles = ['CEO', 'COO', 'CFO', 'CTO', 'Managing Director'];
  const locations = ['Stuttgart', 'München', 'Nürnberg', 'Frankfurt am Main', 'Hamburg'];

  // Apply parsed filters from PDF / Prompt
  const handleApplyParsedFilters = (data: {
    targetRole?: string;
    industry?: string;
    minLeadershipYears?: number;
    minExperienceYears?: number;
  }) => {
    if (data.targetRole) setSelectedRole(data.targetRole);
    if (data.minLeadershipYears) setMinLeadershipExp(data.minLeadershipYears);
    if (data.minExperienceYears) setMinTotalExp(data.minExperienceYears);
  };

  const resetFilters = () => {
    setPromptText('');
    setSearchTerm('');
    setSelectedRole('all');
    setMinAge(0);
    setMaxAge(100);
    setMinTotalExp(0);
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

  // Filter & Sort Logic
  const filteredCandidates = useMemo(() => {
    return candidates
      .filter((c) => {
        // Search Term or Prompt
        if (searchTerm) {
          const term = searchTerm.toLowerCase();
          const matchName = c.name.toLowerCase().includes(term);
          const matchRole = c.currentRole.toLowerCase().includes(term);
          const matchCompany = c.currentCompany.toLowerCase().includes(term);
          const matchLocation = c.location.toLowerCase().includes(term);
          const matchIndustry = c.industries.some(i => i.toLowerCase().includes(term));
          if (!matchName && !matchRole && !matchCompany && !matchLocation && !matchIndustry) return false;
        }

        // Role filter
        if (selectedRole !== 'all' && !c.currentRole.includes(selectedRole) && !c.targetRoles.some(r => r.includes(selectedRole))) {
          return false;
        }

        // Age filter
        if (c.age < minAge || c.age > maxAge) {
          return false;
        }

        // Total Experience
        if (minTotalExp > 0 && c.totalExperienceYears < minTotalExp) {
          return false;
        }

        // Leadership Experience
        if (minLeadershipExp > 0 && c.leadershipExperienceYears < minLeadershipExp) {
          return false;
        }

        // Location
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
    maxAge,
    minTotalExp,
    minLeadershipExp,
    selectedLocation,
    sortBy
  ]);

  return (
    <div className="space-y-5">
      {/* Requirement Search & PDF Upload Component */}
      <PdfUploadParser
        promptText={promptText}
        onPromptChange={setPromptText}
        onApplyParsedFilters={handleApplyParsedFilters}
      />

      {/* Filter Control Bar */}
      <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-4 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Name, Qualifikation, Arbeitgeber, Stadt..."
              className="w-full pl-10 pr-4 py-2 bg-[#070E22] border border-[#1F3163] focus:border-[#1677FF] rounded-lg text-xs text-white placeholder:text-slate-500 outline-none"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto flex-wrap justify-end">
            {/* Target Role Selector */}
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value="all">Rolle: Alle Führungspositionen</option>
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>

            {/* Leadership Exp */}
            <select
              value={minLeadershipExp}
              onChange={(e) => setMinLeadershipExp(Number(e.target.value))}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Führung: Alle</option>
              <option value={8}>Führung: &gt; 8 Jahre</option>
              <option value={12}>Führung: &gt; 12 Jahre</option>
              <option value={15}>Führung: &gt; 15 Jahre</option>
            </select>

            {/* Age Range */}
            <select
              value={minAge}
              onChange={(e) => setMinAge(Number(e.target.value))}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value={0}>Alter: Beliebig</option>
              <option value={40}>Alter: &gt; 40 Jahre</option>
              <option value={45}>Alter: &gt; 45 Jahre</option>
              <option value={50}>Alter: &gt; 50 Jahre</option>
            </select>

            {/* Location */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-1.5 bg-[#0E1A3C] border border-[#1F3163] text-xs font-medium text-slate-200 rounded-lg outline-none focus:border-[#1677FF]"
            >
              <option value="all">Standort: DACH gesamt</option>
              {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
            </select>

            {(searchTerm || selectedRole !== 'all' || minAge > 0 || minLeadershipExp > 0 || selectedLocation !== 'all' || promptText) && (
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
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div className="flex items-center gap-3 font-mono">
          <span>Gefundene Kandidaten: <strong className="text-white">{filteredCandidates.length}</strong> Profile</span>
          {selectedCandidates.length > 0 && (
            <span className="bg-[#1677FF]/20 text-[#69B8FF] px-2 py-0.5 rounded border border-[#1677FF]/40">
              {selectedCandidates.length} markiert
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {selectedCandidates.length > 0 && (
            <button
              onClick={() => selectedCandidates.forEach(id => onToggleShortlist(id))}
              className="px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold flex items-center gap-1.5 transition-all shadow-md"
            >
              <Bookmark size={12} className="fill-amber-400 text-amber-400" />
              Zur Shortlist ({selectedCandidates.length})
            </button>
          )}

          <div className="flex items-center gap-1 bg-[#0B1633] border border-[#1F3163] rounded-lg px-2.5 py-1 text-slate-300">
            <ArrowUpDown size={12} className="text-[#1677FF]" />
            <span className="text-[11px]">Sortierung:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs font-semibold text-[#69B8FF] outline-none cursor-pointer"
            >
              <option value="match" className="bg-[#0B1633] text-white">Match Score (%)</option>
              <option value="leadership" className="bg-[#0B1633] text-white">Führungserfahrung</option>
              <option value="experience" className="bg-[#0B1633] text-white">Gesamterfahrung</option>
              <option value="age" className="bg-[#0B1633] text-white">Alter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Candidate Data Table */}
      <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#070E22] border-b border-[#1F3163] text-slate-300 font-semibold uppercase text-[10px] tracking-wider select-none">
                <th className="py-3.5 px-3 w-10 text-center">
                  <input
                    type="checkbox"
                    checked={selectedCandidates.length === filteredCandidates.length && filteredCandidates.length > 0}
                    onChange={toggleSelectAll}
                    className="rounded border-[#1F3163] bg-[#0E1A3C] text-[#1677FF] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4 min-w-[260px]">Kandidat &amp; Aktuelle Position</th>
                <th className="py-3.5 px-3 min-w-[140px]">Match-Score</th>
                <th className="py-3.5 px-3 min-w-[160px]">Erfahrung &amp; Führung</th>
                <th className="py-3.5 px-3 min-w-[160px]">Branchenfokus</th>
                <th className="py-3.5 px-3 text-center">Standort / Radius</th>
                <th className="py-3.5 px-3 text-center">Gehaltskorridor</th>
                <th className="py-3.5 px-4 text-center">Aktionen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F3163]/50 font-sans">
              {filteredCandidates.map((candidate) => {
                const isSelected = selectedCandidates.includes(candidate.id);

                return (
                  <tr
                    key={candidate.id}
                    onClick={() => onSelectCandidate(candidate)}
                    className={`cursor-pointer transition-colors duration-150 group ${
                      isSelected
                        ? 'bg-[#1677FF]/10 hover:bg-[#1677FF]/15'
                        : 'hover:bg-[#0E1A3C]'
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-3.5 px-3 text-center" onClick={(e) => toggleRow(candidate.id, e)}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="rounded border-[#1F3163] bg-[#0E1A3C] text-[#1677FF] focus:ring-0 cursor-pointer"
                      />
                    </td>

                    {/* Candidate Info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={candidate.avatarUrl}
                          alt={candidate.name}
                          className="w-10 h-10 rounded-xl object-cover border border-[#1677FF]/50 shrink-0 group-hover:border-[#1677FF] transition-colors"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-xs group-hover:text-[#69B8FF] transition-colors">
                              {candidate.name}
                            </span>
                            <span className="font-mono text-[10px] text-slate-400">({candidate.age} J.)</span>
                          </div>
                          <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                            {candidate.currentRole}
                          </p>
                          <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                            <Building2 size={11} className="text-[#69B8FF]" />
                            {candidate.currentCompany}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Match Score */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-[#0E1A3C] border border-[#1677FF]/40 flex items-center justify-center font-mono font-black text-sm text-[#69B8FF]">
                          {candidate.matchScore}%
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-bold uppercase text-emerald-400 block">Exzellenter Fit</span>
                          <span className="text-[10px] text-slate-400 font-mono">{candidate.status}</span>
                        </div>
                      </div>
                    </td>

                    {/* Experience & Leadership */}
                    <td className="py-3.5 px-3">
                      <div className="space-y-1 font-mono text-xs">
                        <div className="text-white font-semibold flex items-center gap-1.5">
                          <Briefcase size={12} className="text-[#1677FF]" />
                          <span>{candidate.totalExperienceYears} J. Gesamt</span>
                        </div>
                        <div className="text-[#69B8FF] text-[11px] flex items-center gap-1.5">
                          <Users size={12} className="text-[#69B8FF]" />
                          <span>davon {candidate.leadershipExperienceYears} J. Führung</span>
                        </div>
                      </div>
                    </td>

                    {/* Industries */}
                    <td className="py-3.5 px-3">
                      <div className="flex flex-wrap gap-1">
                        {candidate.industries.slice(0, 2).map((ind, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded bg-[#0E1A3C] text-[10px] text-slate-200 border border-[#1F3163]"
                          >
                            {ind}
                          </span>
                        ))}
                        {candidate.industries.length > 2 && (
                          <span className="text-[10px] text-slate-400 font-mono">+{candidate.industries.length - 2}</span>
                        )}
                      </div>
                    </td>

                    {/* Location */}
                    <td className="py-3.5 px-3 text-center">
                      <div className="font-medium text-white text-xs flex items-center justify-center gap-1">
                        <MapPin size={12} className="text-[#69B8FF]" />
                        {candidate.location}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">Radius {candidate.radiusKm} km</span>
                    </td>

                    {/* Salary Band */}
                    <td className="py-3.5 px-3 text-center font-mono text-emerald-400 text-xs font-bold">
                      {candidate.salaryExpectation.min}k – {candidate.salaryExpectation.max}k €
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => onSelectCandidate(candidate)}
                          className="p-1.5 rounded-md bg-[#0E1A3C] hover:bg-[#1677FF] text-slate-300 hover:text-white border border-[#1F3163] hover:border-[#1677FF] transition-all"
                          title="Kandidaten-Profil öffnen"
                        >
                          <ExternalLink size={13} />
                        </button>
                        <button
                          onClick={() => onToggleShortlist(candidate.id)}
                          className={`p-1.5 rounded-md border transition-all ${
                            candidate.shortlisted
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-[#0E1A3C] text-slate-400 hover:text-white border-[#1F3163]'
                          }`}
                          title={candidate.shortlisted ? 'In Shortlist' : 'Zur Shortlist'}
                        >
                          <Bookmark size={13} className={candidate.shortlisted ? 'fill-amber-400 text-amber-400' : ''} />
                        </button>
                        <button
                          className="p-1.5 rounded-md bg-[#0E1A3C] hover:bg-blue-600 text-slate-400 hover:text-white border border-[#1F3163] hover:border-blue-500 transition-all"
                          title="Direktansprache starten"
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
