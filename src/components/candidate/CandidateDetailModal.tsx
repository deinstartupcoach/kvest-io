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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] glass-modal rounded-2xl flex flex-col overflow-hidden text-[#E9DFCF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-[#1F3163] bg-gradient-to-r from-[#0B1633] via-[#0E1A3C] to-[#0B1633] flex items-start justify-between relative">
          <div className="flex items-start gap-4">
            {/* LinkedIn Avatar */}
            <div className="relative">
              <img
                src={candidate.avatarUrl}
                alt={candidate.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#1677FF] shadow-lg"
              />
              <div className="absolute -bottom-1.5 -right-1.5 bg-[#0077B5] text-white p-1 rounded-full border border-white/40 shadow">
                <LinkedinIcon size={12} />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-xl font-bold text-white tracking-tight">{candidate.name}</h2>
                <span className="font-mono text-xs text-slate-300 bg-[#0B1633] px-2 py-0.5 rounded border border-[#1F3163]">
                  {candidate.age} Jahre
                </span>
                <Badge variant="primary" size="md">{candidate.currentRole}</Badge>
                <Badge variant="success" size="md" icon={<Sparkles size={11} />}>
                  {candidate.matchScore}% Match
                </Badge>
                {candidate.shortlisted && (
                  <Badge variant="warning" size="sm">★ In Shortlist</Badge>
                )}
              </div>

              <p className="text-xs text-slate-300 font-medium mt-1">
                Aktuell bei <strong className="text-white">{candidate.currentCompany}</strong> • {candidate.location} ({candidate.radiusKm} km Radius)
              </p>

              {/* Direct Contacts */}
              <div className="flex items-center gap-4 mt-2.5 text-xs text-slate-300 flex-wrap font-mono">
                <a href={`mailto:${candidate.contact.email}`} className="flex items-center gap-1 text-[#69B8FF] hover:underline">
                  <Mail size={12} /> {candidate.contact.email}
                </a>
                <a href={`tel:${candidate.contact.phone}`} className="flex items-center gap-1 text-slate-300 hover:underline">
                  <Phone size={12} /> {candidate.contact.phone}
                </a>
                <a href={candidate.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#0077B5] hover:underline">
                  <LinkedinIcon size={12} /> LinkedIn Profil
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleShortlist(candidate.id)}
              className={`p-2 rounded-lg border btn-transition flex items-center gap-1.5 text-xs font-semibold ${
                candidate.shortlisted
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-[#0E1A3C] text-slate-300 border-[#1F3163] hover:text-white hover:border-[#1677FF]'
              }`}
            >
              <BookmarkPlus size={15} />
              {candidate.shortlisted ? 'In Shortlist' : 'Auf Shortlist'}
            </button>
            <button className="px-3.5 py-2 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold border border-blue-400/50 shadow-md flex items-center gap-1.5 btn-transition">
              <Send size={14} />
              Direkt ansprechen
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0E1A3C] text-slate-400 hover:text-white hover:bg-rose-900/40 hover:border-rose-500/50 border border-[#1F3163] btn-transition ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 bg-[#091126] border-b border-[#1F3163] flex items-center gap-2">
          <button
            onClick={() => setActiveSection('timeline')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'timeline'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase size={14} />
            1. LinkedIn Werdegang &amp; Stationen
          </button>
          <button
            onClick={() => setActiveSection('insights')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'insights'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart size={14} />
            2. Personal Summary &amp; Social Insights
          </button>
          <button
            onClick={() => setActiveSection('employer')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeSection === 'employer'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Building2 size={14} />
            3. Derzeitiger Arbeitgeber (Kununu / Media Intelligence)
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {/* Executive Summary Pitch */}
          <div className="p-4 bg-[#0A132C] rounded-xl border border-[#1677FF]/40">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-[#69B8FF]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#69B8FF]">
                Executive Summary &amp; Eignungsprofil
              </h4>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-sans">
              {candidate.executiveSummary}
            </p>
            {/* KPI Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5 pt-3 border-t border-[#1F3163]/60 font-mono text-xs">
              <div className="bg-[#0E1A3C] p-2 rounded border border-[#1F3163]">
                <span className="text-[10px] text-slate-400 block">GESAMTERFAHRUNG</span>
                <strong className="text-white">{candidate.totalExperienceYears} Jahre</strong>
              </div>
              <div className="bg-[#0E1A3C] p-2 rounded border border-[#1F3163]">
                <span className="text-[10px] text-slate-400 block">FÜHRUNGSERFAHRUNG</span>
                <strong className="text-[#69B8FF]">{candidate.leadershipExperienceYears} Jahre C-Level / VP</strong>
              </div>
              <div className="bg-[#0E1A3C] p-2 rounded border border-[#1F3163]">
                <span className="text-[10px] text-slate-400 block">GEHALTSKORRIDOR</span>
                <strong className="text-emerald-400">{candidate.salaryExpectation.min}k – {candidate.salaryExpectation.max}k €</strong>
              </div>
              <div className="bg-[#0E1A3C] p-2 rounded border border-[#1F3163]">
                <span className="text-[10px] text-slate-400 block">STATUS</span>
                <strong className="text-amber-300">{candidate.status}</strong>
              </div>
            </div>
          </div>

          {/* Section 1: Employment History Timeline */}
          {activeSection === 'timeline' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Chronologischer Werdegang (LinkedIn &amp; Referenzen)
                </h4>
                <span className="text-[11px] text-slate-400 font-mono">
                  {candidate.employmentHistory.length} verifizierte Stationen
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#1F3163]">
                {candidate.employmentHistory.map((station, index) => (
                  <div key={station.id} className="relative group">
                    {/* Timeline Node Point */}
                    <div className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      station.isCurrent
                        ? 'bg-[#1677FF] border-white shadow-[0_0_8px_#1677FF]'
                        : 'bg-[#0B1633] border-[#69B8FF]'
                    }`}>
                      {station.isCurrent && <span className="w-1.5 h-1.5 bg-white rounded-full"></span>}
                    </div>

                    <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4.5 hover:border-[#1677FF]/60 transition-colors space-y-2.5">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-sm font-bold text-white">{station.role}</h5>
                            {station.isCurrent && (
                              <Badge variant="primary" size="sm">Aktuelle Position</Badge>
                            )}
                          </div>
                          <span className="text-xs font-semibold text-[#69B8FF] block mt-0.5">
                            {station.company}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-slate-300 bg-[#0E1A3C] px-2 py-0.5 rounded border border-[#1F3163]">
                            {station.period}
                          </span>
                          <div className="text-[10px] text-emerald-400 font-mono font-bold mt-1">
                            KPI Score: {station.kpiScore}/100
                          </div>
                        </div>
                      </div>

                      {/* Revenue & Team scope */}
                      {(station.revenueResponsibility || station.teamSize) && (
                        <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-[#0E1A3C] p-2 rounded border border-[#1F3163]/60">
                          {station.revenueResponsibility && (
                            <span className="flex items-center gap-1">
                              <DollarSign size={13} className="text-emerald-400" />
                              {station.revenueResponsibility}
                            </span>
                          )}
                          {station.teamSize && (
                            <span className="flex items-center gap-1">
                              <User size={13} className="text-[#69B8FF]" />
                              {station.teamSize}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Key Achievements */}
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Wesentliche Erfolge &amp; Transformationen:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-200">
                          {station.keyAchievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Personal Insights & Psychometrics */}
          {activeSection === 'insights' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Interests & Social Notes */}
              <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#1F3163] pb-2">
                  <Heart size={16} className="text-rose-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Persönlichkeit &amp; Social Media Intelligence
                  </h4>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Hobbys &amp; Persönliche Interessen:
                  </span>
                  <div className="space-y-1.5">
                    {candidate.personalInsights.interests.map((interest, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#0E1A3C] p-2 rounded border border-[#1F3163]/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Social Media &amp; Background Check:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed bg-[#0E1A3C] p-2.5 rounded border border-[#1F3163]/60">
                    {candidate.personalInsights.socialMediaNotes}
                  </p>
                </div>
              </div>

              {/* Leadership Style & Education */}
              <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4 space-y-4">
                <div className="flex items-center gap-2 border-b border-[#1F3163] pb-2">
                  <GraduationCap size={16} className="text-[#1677FF]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Führungsstil, Werte &amp; Ausbildung
                  </h4>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Führungsphilosophie:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed bg-[#0E1A3C] p-2.5 rounded border border-[#1F3163]/60">
                    {candidate.personalInsights.leadershipStyle}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Akademische Ausbildung &amp; Executive Education:
                  </span>
                  <div className="space-y-1.5">
                    {candidate.personalInsights.education.map((edu, idx) => (
                      <div key={idx} className="text-xs font-mono text-[#69B8FF] bg-[#0E1A3C] p-2 rounded border border-[#1F3163]/60">
                        {edu}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Sprachkenntnisse:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {candidate.personalInsights.languages.map((lang, idx) => (
                      <Badge key={idx} variant="sand" size="sm">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Current Employer Intelligence Block */}
          {activeSection === 'employer' && (
            <div className="space-y-5">
              <div className="bg-[#0A132C] border border-[#1677FF]/40 rounded-xl p-5 relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-[#1F3163] pb-3">
                  <div className="flex items-center gap-2">
                    <Building2 size={20} className="text-[#1677FF]" />
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Arbeitgeber-Analyse: {candidate.employerIntelligence.companyName}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">
                        {candidate.employerIntelligence.industry} • {candidate.employerIntelligence.employees} MA
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant={
                      candidate.employerIntelligence.turnoverRisk === 'High'
                        ? 'danger'
                        : candidate.employerIntelligence.turnoverRisk === 'Medium'
                        ? 'warning'
                        : 'success'
                    }
                    size="md"
                    icon={<AlertTriangle size={12} />}
                  >
                    Wechselwahrscheinlichkeit: {candidate.employerIntelligence.turnoverRisk}
                  </Badge>
                </div>

                {/* 4 KPI Grid Cards for Employer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 font-mono">
                  {/* Kununu Card */}
                  <div className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
                    <span className="text-[10px] text-slate-400 block uppercase">Kununu Score</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-bold text-amber-400">
                        {candidate.employerIntelligence.kununuScore} ★
                      </span>
                      <TrendIndicator direction={candidate.employerIntelligence.kununuTrend} />
                    </div>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {candidate.employerIntelligence.kununuTrend === 'down' ? 'Fallende Tendenz' : 'Stabiler Trend'}
                    </span>
                  </div>

                  {/* Glassdoor Salary Band */}
                  <div className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
                    <span className="text-[10px] text-slate-400 block uppercase">Glassdoor Benchmark</span>
                    <span className="text-xs font-bold text-emerald-400 block mt-1">
                      {candidate.employerIntelligence.glassdoorSalaryEstimate}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Geschätztes C-Level Band</span>
                  </div>

                  {/* Revenue Trend */}
                  <div className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
                    <span className="text-[10px] text-slate-400 block uppercase">Umsatzentwicklung</span>
                    <span className="text-xs font-bold text-[#69B8FF] block mt-1">
                      {candidate.employerIntelligence.revenueTrend}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Letztes Geschäftsjahr</span>
                  </div>

                  {/* Employee Growth */}
                  <div className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
                    <span className="text-[10px] text-slate-400 block uppercase">Headcount YoY</span>
                    <span className="text-xs font-bold text-amber-300 block mt-1">
                      {candidate.employerIntelligence.employeeGrowthYoY}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Personalwachstum</span>
                  </div>
                </div>

                {/* Kununu Sentiment Details */}
                <div className="p-3.5 bg-[#070E22] rounded-lg border border-[#1F3163]/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Kununu Sentiment-Audit &amp; Kündigungstreiber:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {candidate.employerIntelligence.kununuDetails}
                  </p>
                </div>

                {/* Media Intelligence Summary */}
                <div className="p-3.5 bg-[#070E22] rounded-lg border border-[#1F3163]/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#69B8FF] block mb-1">
                    Wirtschaftsmedien &amp; Branchen-Scraping Summary:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {candidate.employerIntelligence.mediaSummary}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#081024] border-t border-[#1F3163] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Profil-ID: {candidate.id}</span>
            <span>•</span>
            <span>DSGVO-konforme Aggregation aus offenen Business-Netzwerken</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0E1A3C] hover:bg-[#162750] text-slate-300 font-semibold border border-[#1F3163] btn-transition"
            >
              Schließen
            </button>
            <button className="px-4 py-2 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 text-white font-bold border border-blue-400/40 flex items-center gap-1.5 shadow-md btn-transition">
              <Send size={13} />
              In Executive Search Pipeline übernehmen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
