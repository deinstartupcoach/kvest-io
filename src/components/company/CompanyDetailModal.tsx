import React, { useState } from 'react';
import { Company } from '../../types';
import { OwnershipGraph } from './OwnershipGraph';
import { FinancialChart } from './FinancialChart';
import { StarRating } from '../common/StarRating';
import { TrendIndicator } from '../common/TrendIndicator';
import { Badge } from '../common/Badge';
import { LinkedinIcon } from '../common/LinkedinIcon';
import {
  X,
  Building2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  Briefcase,
  Sparkles,
  BookmarkPlus,
  Send,
  Download,
  AlertTriangle,
  Award,
  Globe,
  FileText
} from 'lucide-react';

interface CompanyDetailModalProps {
  company: Company | null;
  onClose: () => void;
  onToggleWatchlist: (id: string) => void;
  onExportCrm: (id: string) => void;
}

export const CompanyDetailModal: React.FC<CompanyDetailModalProps> = ({
  company,
  onClose,
  onToggleWatchlist,
  onExportCrm
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'graph' | 'financials' | 'media'>('overview');

  if (!company) return null;

  return (
    <div className="modal-backdrop animate-fadeIn" onClick={onClose}>
      <div
        className="relative w-full max-w-5xl max-h-[92vh] institutional-modal rounded-xl flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar (Dark Navy #0B1633) */}
        <div className="p-6 bg-[#0B1633] text-white border-b border-[#162750] flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#162750] border border-blue-400/40 flex items-center justify-center text-white shrink-0">
              <Building2 size={24} className="text-[#69B8FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl font-bold tracking-tight text-white">{company.name}</h2>
                <Badge variant="primary" size="sm">{company.legalForm}</Badge>
                {company.successionScore === 'CRITICAL_HIGH' && (
                  <Badge variant="warning" size="sm" icon={<AlertTriangle size={11} />}>
                    Nachfolgerelevanz (&gt;60 J. Eigner)
                  </Badge>
                )}
                {company.watchlistStatus && (
                  <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded">
                    ★ Auf Watchlist
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mt-2 text-xs text-slate-300 flex-wrap font-mono">
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin size={13} className="text-[#69B8FF]" />
                  {company.postalCode} {company.city} ({company.state})
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar size={13} className="text-[#69B8FF]" />
                  Gegr. {company.foundingYear} ({company.age} J.)
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Users size={13} className="text-[#69B8FF]" />
                  {company.employeeCount} Mitarbeiter
                </span>
                <a
                  href={company.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#69B8FF] hover:underline bg-[#162750] px-2 py-0.5 rounded border border-blue-400/30"
                >
                  <FileText size={11} />
                  {company.hrNumber} ({company.court})
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(company.id)}
              className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                company.watchlistStatus
                  ? 'bg-amber-400 text-slate-950 border-amber-400'
                  : 'bg-[#0E1A3C] text-slate-200 border-[#1F3163] hover:text-white'
              }`}
            >
              <BookmarkPlus size={14} />
              {company.watchlistStatus ? 'Gemerkt' : 'Watchlist'}
            </button>
            <button
              onClick={() => onExportCrm(company.id)}
              className="px-3 py-1.5 rounded bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Send size={13} />
              Export to CRM
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-[#0E1A3C] text-slate-400 hover:text-white border border-[#1F3163] transition-colors ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation (Clean Light) */}
        <div className="px-6 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            1. Übersicht &amp; Kontakte
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'graph'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            2. Gesellschafter-Graph &amp; Holding
          </button>
          <button
            onClick={() => setActiveTab('financials')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'financials'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            3. Bilanzen &amp; Kennzahlen
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`py-3 px-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'media'
                ? 'border-[#1677FF] text-[#1677FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            4. Media-Check &amp; Reputation
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6 bg-white">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              {/* Succession Urgency Banner */}
              {company.successionScore === 'CRITICAL_HIGH' && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <AlertTriangle className="text-amber-700 shrink-0 mt-0.5" size={18} />
                  <div>
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                      Nachfolge-Analyse &amp; Transaktionsindikator
                    </h4>
                    <p className="text-xs text-amber-800 mt-0.5 leading-relaxed font-medium">
                      {company.successionReason}
                    </p>
                  </div>
                </div>
              )}

              {/* Grid: Contacts & Ownership */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Managing Directors */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                    <Briefcase size={15} className="text-[#1677FF]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Geschäftsführung (GF)
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {company.managingDirectors.map((md, idx) => (
                      <div key={idx} className="p-3 bg-white rounded border border-slate-200 shadow-2xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">{md.name}</span>
                          <span className="text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            {md.age} Jahre
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">{md.title} (seit {md.sinceYear})</p>
                        <div className="mt-2 flex items-center gap-3 text-xs flex-wrap font-mono">
                          {md.email && (
                            <a href={`mailto:${md.email}`} className="flex items-center gap-1 text-[#1677FF] hover:underline">
                              <Mail size={11} /> {md.email}
                            </a>
                          )}
                          {md.phone && (
                            <a href={`tel:${md.phone}`} className="flex items-center gap-1 text-slate-700 hover:underline">
                              <Phone size={11} /> {md.phone}
                            </a>
                          )}
                          {md.linkedinUrl && (
                            <a href={md.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#0077B5] hover:underline">
                              <LinkedinIcon size={11} /> LinkedIn Profil
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Owners / Shareholders */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                    <Users size={15} className="text-amber-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Eignerstruktur &amp; Anteile
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {company.owners.map((owner, idx) => (
                      <div key={idx} className="p-3 bg-white rounded border border-slate-200 shadow-2xs flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-slate-900">{owner.name}</span>
                            {owner.age >= 60 && (
                              <span className="text-[10px] font-bold text-amber-900 bg-amber-100 px-1.5 py-0.2 rounded">
                                &gt;60 J.
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500">{owner.role || 'Gesellschafter'}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-mono font-bold text-[#1677FF]">
                            {owner.sharePercentage}%
                          </span>
                          <span className="block text-[10px] text-slate-500 font-mono">Alter: {owner.age} J.</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Clients & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
                    <Award size={15} className="text-emerald-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Schlüsselkunden &amp; Referenzen
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.keyClients.map((client, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white text-xs font-medium text-slate-800 border border-slate-200"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 border-b border-slate-200 pb-2">
                    <ShieldCheck size={15} className="text-indigo-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Zertifizierungen &amp; Normen
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {company.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-white text-xs font-mono text-indigo-900 border border-indigo-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'graph' && (
            <div>
              <OwnershipGraph company={company} />
            </div>
          )}

          {activeTab === 'financials' && (
            <div className="space-y-5">
              <FinancialChart
                financialHistory={company.financialHistory}
                equityRatio={company.equityRatio}
              />

              {/* Financial Detail Table */}
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Kennzahlen-Detailtabelle (G&amp;V &amp; Bilanzverlauf)
                </h4>
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-mono">
                      <th className="py-2 px-3">Jahr</th>
                      <th className="py-2 px-3">Umsatzerlöse</th>
                      <th className="py-2 px-3">Bilanzsumme</th>
                      <th className="py-2 px-3">Bilanzgewinn</th>
                      <th className="py-2 px-3">EBITDA</th>
                      <th className="py-2 px-3">Mitarbeiter</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-800">
                    {company.financialHistory.map((row) => (
                      <tr key={row.year} className="hover:bg-slate-50">
                        <td className="py-2 px-3 font-bold text-slate-900">{row.year}</td>
                        <td className="py-2 px-3">{row.revenue.toFixed(1)} Mio. €</td>
                        <td className="py-2 px-3 font-semibold text-[#1677FF]">{row.balanceTotal.toFixed(1)} Mio. €</td>
                        <td className="py-2 px-3 font-bold text-emerald-800">{row.profit.toFixed(1)} Mio. €</td>
                        <td className="py-2 px-3 text-indigo-900">{row.ebitda.toFixed(1)} Mio. €</td>
                        <td className="py-2 px-3 text-slate-700">{row.employees} MA</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-5">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <Sparkles size={16} className="text-[#1677FF]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                      Aggregierte Medienauswertung &amp; Branchenreputation
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={company.mediaRating} />
                    <TrendIndicator direction={company.mediaRatingTrend} />
                  </div>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-sans mt-2">
                  {company.mediaSummary}
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                  Erfasste Wirtschafts- und Registermeldungen
                </h4>
                <div className="space-y-2">
                  {company.newsItems.map((news, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono font-bold text-[#1677FF]">{news.date}</span>
                          <span className="text-[11px] text-slate-500 font-semibold">• {news.source}</span>
                        </div>
                        <p className="text-xs font-medium text-slate-800 mt-0.5">{news.headline}</p>
                      </div>
                      <Badge
                        variant={news.sentiment === 'positive' ? 'success' : 'neutral'}
                        size="sm"
                      >
                        {news.sentiment === 'positive' ? 'Positiv' : 'Neutral'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 font-sans">
          <div className="flex items-center gap-2 font-mono">
            <span>Stand: Q1 2026</span>
            <span>•</span>
            <span>Unternehmensregister, Bundesanzeiger, LinkedIn</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 font-semibold border border-slate-300 transition-colors"
            >
              Schließen
            </button>
            <button
              onClick={() => onExportCrm(company.id)}
              className="px-4 py-1.5 rounded bg-[#1677FF] hover:bg-[#1677FF]/90 text-white font-bold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Send size={13} />
              In CRM Pipeline übertragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
