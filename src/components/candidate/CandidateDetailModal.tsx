import React, { useState } from 'react';
import { Candidate } from '../../types';
import { Badge } from '../common/Badge';
import { TrendIndicator } from '../common/TrendIndicator';
import { StarRating } from '../common/StarRating';
import { LinkedinIcon } from '../common/LinkedinIcon';
import {
  X,
  User,
  Briefcase,
  GraduationCap,
  Heart,
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Award,
  DollarSign,
  Send,
  BookmarkPlus,
  Compass,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface CandidateDetailModalProps {
  candidate: Candidate | null;
  onClose: () => void;
  onToggleShortlist: (id: string) => void;
}

export const CandidateDetailModal: React.FC<CandidateDetailModalProps> = ({
  candidate,
  onClose,
  onToggleShortlist
}) => {
  const [activeSection, setActiveSection] = useState<'timeline' | 'insights' | 'employer'>('timeline');

  if (!candidate) return null;

  return (
    <div className="modal-backdrop animate-fadeIn" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl max-h-[92vh] institutional-modal rounded-xl flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar (Dark Navy #0B1633) */}
        <div className="p-6 bg-[#0B1633] text-white border-b border-[#162750] flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="relative">
              <img
                src={candidate.avatarUrl}
                alt={candidate.name}
                className="w-14 h-14 rounded-lg object-cover border-2 border-blue-400/50 shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#0077B5] text-white p-0.5 rounded border border-white">
                <LinkedinIcon size={11} />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-bold tracking-tight text-white">{candidate.name}</h2>
                <span className="font-mono text-xs text-slate-300 bg-[#162750] px-2 py-0.5 rounded">
                  {candidate.age} Jahre
                </span>
                <Badge variant="primary" size="sm">{candidate.currentRole}</Badge>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  {candidate.matchScore}% Match
                </span>
                {candidate.shortlisted && (
                  <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">
                    ★ In Shortlist
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 mt-1">
                Aktuell bei <strong className="text-white">{candidate.currentCompany}</strong> • {candidate.location} ({candidate.radiusKm} km Radius)
              </p>

              {/* Direct Contacts */}
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-300 flex-wrap font-mono">
                <a href={`mailto:${candidate.contact.email}`} className="flex items-center gap-1 text-[#69B8FF] hover:underline">
                  <Mail size={11} /> {candidate.contact.email}
                </a>
                <a href={`tel:${candidate.contact.phone}`} className="flex items-center gap-1 text-slate-300 hover:underline">
                  <Phone size={11} /> {candidate.contact.phone}
                </a>
                <a href={candidate.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#69B8FF] hover:underline">
                  <LinkedinIcon size={11} /> LinkedIn Profil
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleShortlist(candidate.id)}
              className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                candidate.shortlisted
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-[#0E1A3C] text-slate-200 border-[#1F3163] hover:text-white'
              }`}
            >
              <BookmarkPlus size={14} />
              {candidate.shortlisted ? 'In Shortlist' : 'Auf Shortlist'}
            </button>
            <button className="px-3.5 py-1.5 rounded bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors">
              <Send size={13} />
              Direkt ansprechen
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#0E1A3C] text-slate-400 hover:text-white border border-[#1F3163] transition-colors ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <button
            onClick={() => setActiveSection('timeline')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'timeline'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase size={13} />
            1. LinkedIn Werdegang &amp; Stationen
          </button>
          <button
            onClick={() => setActiveSection('insights')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'insights'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Heart size={13} />
            2. Personal Summary &amp; Background
          </button>
          <button
            onClick={() => setActiveSection('employer')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'employer'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 size={13} />
            3. Derzeitiger Arbeitgeber (Kununu Intelligence)
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-5 bg-white">
          {/* Executive Summary */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1633] mb-1.5">
              Executive Summary &amp; Eignungsprofil
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed font-sans">
              {candidate.executiveSummary}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 pt-2.5 border-t border-slate-200 font-mono text-xs">
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block font-sans">GESAMTERFAHRUNG</span>
                <strong className="text-slate-900">{candidate.totalExperienceYears} Jahre</strong>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block font-sans">FÜHRUNGSERFAHRUNG</span>
                <strong className="text-[#1677FF]">{candidate.leadershipExperienceYears} Jahre C-Level / GF</strong>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block font-sans">GEHALT (BENCHMARK)</span>
                <strong className="text-emerald-800">{candidate.salaryExpectation.min}k – {candidate.salaryExpectation.max}k €</strong>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200">
                <span className="text-[10px] text-slate-500 block font-sans">STATUS</span>
                <strong className="text-slate-800">{candidate.status}</strong>
              </div>
            </div>
          </div>

          {/* Section 1: Employment History */}
          {activeSection === 'timeline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Chronologischer Werdegang (LinkedIn &amp; Referenzen)
                </h4>
                <span className="text-[11px] text-slate-500 font-mono">
                  {candidate.employmentHistory.length} Stationen
                </span>
              </div>

              <div className="space-y-3">
                {candidate.employmentHistory.map((station) => (
                  <div key={station.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-slate-900">{station.role}</h5>
                          {station.isCurrent && (
                            <Badge variant="primary" size="sm">Aktuell</Badge>
                          )}
                        </div>
                        <span className="text-xs font-semibold text-[#1677FF]">
                          {station.company}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {station.period}
                        </span>
                      </div>
                    </div>

                    {(station.revenueResponsibility || station.teamSize) && (
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-700 bg-white p-2 rounded border border-slate-200">
                        {station.revenueResponsibility && <span>P&amp;L: <strong>{station.revenueResponsibility}</strong></span>}
                        {station.teamSize && <span>Team: <strong>{station.teamSize}</strong></span>}
                      </div>
                    )}

                    <ul className="space-y-1 text-xs text-slate-700 pt-1">
                      {station.keyAchievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Personal Insights */}
          {activeSection === 'insights' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5">
                  Interessen &amp; Persönliches Profil
                </h4>
                <div className="space-y-1.5">
                  {candidate.personalInsights.interests.map((interest, idx) => (
                    <div key={idx} className="text-xs text-slate-700 bg-white p-2 rounded border border-slate-200">
                      • {interest}
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">Social Media Background:</span>
                  <p className="text-xs text-slate-700 bg-white p-2 rounded border border-slate-200">
                    {candidate.personalInsights.socialMediaNotes}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5">
                  Führungsstil &amp; Ausbildung
                </h4>
                <p className="text-xs text-slate-700 bg-white p-2 rounded border border-slate-200">
                  {candidate.personalInsights.leadershipStyle}
                </p>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">Ausbildung:</span>
                  {candidate.personalInsights.education.map((edu, idx) => (
                    <div key={idx} className="text-xs font-mono text-[#0B1633] bg-white p-1.5 rounded border border-slate-200">
                      {edu}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Employer Intelligence */}
          {activeSection === 'employer' && (
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Arbeitgeber-Audit: {candidate.employerIntelligence.companyName}
                  </h4>
                  <span className="text-xs text-slate-500 font-mono">
                    {candidate.employerIntelligence.industry} • {candidate.employerIntelligence.employees} MA
                  </span>
                </div>
                <Badge
                  variant={
                    candidate.employerIntelligence.turnoverRisk === 'High'
                      ? 'danger'
                      : 'warning'
                  }
                  size="md"
                >
                  Wechselbereitschaft: {candidate.employerIntelligence.turnoverRisk}
                </Badge>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-sans">Kununu Rating</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-base font-bold text-amber-600">{candidate.employerIntelligence.kununuScore} ★</span>
                    <TrendIndicator direction={candidate.employerIntelligence.kununuTrend} />
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-sans">Glassdoor Benchmark</span>
                  <span className="text-xs font-bold text-emerald-800 block mt-1">{candidate.employerIntelligence.glassdoorSalaryEstimate}</span>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-sans">Umsatztrend</span>
                  <span className="text-xs font-bold text-slate-800 block mt-1">{candidate.employerIntelligence.revenueTrend}</span>
                </div>

                <div className="p-3 bg-white rounded border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase font-sans">Headcount YoY</span>
                  <span className="text-xs font-bold text-amber-800 block mt-1">{candidate.employerIntelligence.employeeGrowthYoY}</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded border border-slate-200">
                <span className="text-[11px] font-bold text-amber-900 uppercase block mb-1">Kununu Kündigungstreiber &amp; Sentiment:</span>
                <p className="text-xs text-slate-700 leading-relaxed">{candidate.employerIntelligence.kununuDetails}</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <span className="font-mono">Kandidaten-ID: {candidate.id}</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 transition-colors"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
