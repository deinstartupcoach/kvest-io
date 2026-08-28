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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] glass-modal rounded-2xl flex flex-col overflow-hidden text-[#E9DFCF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="p-6 border-b border-[#1F3163] bg-gradient-to-r from-[#0B1633] via-[#0E1A3C] to-[#0B1633] flex items-start justify-between relative">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#162750] border border-[#1677FF]/50 flex items-center justify-center text-white shadow-lg shrink-0">
              <Building2 size={28} className="text-[#69B8FF]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="text-xl font-bold text-white tracking-tight">{company.name}</h2>
                <Badge variant="primary" size="md">{company.legalForm}</Badge>
                {company.successionScore === 'CRITICAL_HIGH' && (
                  <Badge variant="danger" size="md" icon={<AlertTriangle size={12} />}>
                    Hohe Nachfolgerelevanz (Eigner &gt;60 J.)
                  </Badge>
                )}
                {company.watchlistStatus && (
                  <Badge variant="warning" size="sm">★ Auf Watchlist</Badge>
                )}
              </div>

              <div className="flex items-center gap-4 mt-2 text-xs text-slate-300 flex-wrap font-mono">
                <span className="flex items-center gap-1 text-slate-400">
                  <MapPin size={13} className="text-[#69B8FF]" />
                  {company.postalCode} {company.city} ({company.state})
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Calendar size={13} className="text-[#69B8FF]" />
                  Gegründet {company.foundingYear} ({company.age} Jahre)
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Users size={13} className="text-[#69B8FF]" />
                  {company.employeeCount} Mitarbeiter
                </span>
                <a
                  href={company.registerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#69B8FF] hover:underline bg-[#1677FF]/15 px-2 py-0.5 rounded border border-[#1677FF]/30"
                >
                  <FileText size={12} />
                  {company.hrNumber} ({company.court})
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(company.id)}
              className={`p-2 rounded-lg border btn-transition flex items-center gap-1.5 text-xs font-semibold ${
                company.watchlistStatus
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-[#0E1A3C] text-slate-300 border-[#1F3163] hover:text-white hover:border-[#1677FF]'
              }`}
            >
              <BookmarkPlus size={15} />
              {company.watchlistStatus ? 'Gemerkt' : 'Watchlist'}
            </button>
            <button
              onClick={() => onExportCrm(company.id)}
              className="px-3 py-2 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold border border-blue-400/50 shadow-md flex items-center gap-1.5 btn-transition"
            >
              <Send size={14} />
              Export to CRM
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0E1A3C] text-slate-400 hover:text-white hover:bg-rose-900/40 hover:border-rose-500/50 border border-[#1F3163] btn-transition ml-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-[#091126] border-b border-[#1F3163] flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            1. Übersicht &amp; Kontakte
          </button>
          <button
            onClick={() => setActiveTab('graph')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'graph'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            2. Gesellschafter-Graph &amp; Holding
          </button>
          <button
            onClick={() => setActiveTab('financials')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors ${
              activeTab === 'financials'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            3. Bilanzen &amp; Kennzahlen
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'media'
                ? 'border-[#1677FF] text-[#69B8FF]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            4. Media-Check &amp; Reputation
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Succession Urgency Banner */}
              {company.successionScore === 'CRITICAL_HIGH' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                  <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="text-sm font-bold text-amber-300">
                      Nachfolge-Indikator: Hohe Transaktionswahrscheinlichkeit
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {company.successionReason}
                    </p>
                  </div>
                </div>
              )}

              {/* Grid: Contacts & Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Managing Directors */}
                <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#1F3163] pb-2">
                    <Briefcase size={16} className="text-[#1677FF]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Geschäftsführung (GF)
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {company.managingDirectors.map((md, idx) => (
                      <div key={idx} className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]/60">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">{md.name}</span>
                          <span className="text-xs font-mono text-amber-300 bg-[#0B1633] px-2 py-0.5 rounded border border-[#1F3163]">
                            {md.age} Jahre
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5">{md.title} (seit {md.sinceYear})</p>
                        <div className="mt-2.5 flex items-center gap-3 text-xs flex-wrap font-mono">
                          {md.email && (
                            <a href={`mailto:${md.email}`} className="flex items-center gap-1 text-[#69B8FF] hover:underline">
                              <Mail size={12} /> {md.email}
                            </a>
                          )}
                          {md.phone && (
                            <a href={`tel:${md.phone}`} className="flex items-center gap-1 text-slate-300 hover:underline">
                              <Phone size={12} /> {md.phone}
                            </a>
                          )}
                          {md.linkedinUrl && (
                            <a href={md.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-[#1677FF] hover:underline">
                              <LinkedinIcon size={12} /> LinkedIn Profil
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Owners / Shareholders */}
                <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#1F3163] pb-2">
                    <Users size={16} className="text-[#F59E0B]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Eignerstruktur &amp; Anteilsverteilung
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {company.owners.map((owner, idx) => (
                      <div key={idx} className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]/60 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-white">{owner.name}</span>
                            {owner.age >= 60 && (
                              <Badge variant="warning" size="sm">&gt;60 J.</Badge>
                            )}
                          </div>
                          <span className="text-xs text-slate-400">{owner.role || 'Gesellschafter'}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-mono font-bold text-[#69B8FF]">
                            {owner.sharePercentage}%
                          </span>
                          <span className="block text-[10px] text-slate-400 font-mono">Alter: {owner.age} J.</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Clients & Certifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#1F3163] pb-2">
                    <Award size={16} className="text-[#10B981]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Schlüsselkunden &amp; Referenzen
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.keyClients.map((client, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#0E1A3C] text-xs font-medium text-slate-200 border border-[#1F3163]"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3 border-b border-[#1F3163] pb-2">
                    <ShieldCheck size={16} className="text-[#8B5CF6]" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Zertifizierungen &amp; Qualitätsnormen
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications.map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#0E1A3C] text-xs font-mono text-[#A78BFA] border border-[#8B5CF6]/30"
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
            <div className="space-y-6">
              <FinancialChart
                financialHistory={company.financialHistory}
                equityRatio={company.equityRatio}
              />

              {/* Financial Breakdown Table */}
              <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Kennzahlen-Detailtabelle (G&amp;V &amp; Bilanz)
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-[#1F3163] text-slate-400 font-mono">
                        <th className="py-2 px-3">Jahr</th>
                        <th className="py-2 px-3">Umsatzerlöse</th>
                        <th className="py-2 px-3">Bilanzsumme</th>
                        <th className="py-2 px-3">Bilanzgewinn</th>
                        <th className="py-2 px-3">EBITDA</th>
                        <th className="py-2 px-3">Mitarbeiter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1F3163]/50 font-mono">
                      {company.financialHistory.map((row) => (
                        <tr key={row.year} className="hover:bg-[#0E1A3C]/80">
                          <td className="py-2 px-3 font-bold text-white">{row.year}</td>
                          <td className="py-2 px-3 text-slate-200">{row.revenue.toFixed(1)} Mio. €</td>
                          <td className="py-2 px-3 text-[#69B8FF]">{row.balanceTotal.toFixed(1)} Mio. €</td>
                          <td className="py-2 px-3 text-[#34D399] font-bold">{row.profit.toFixed(1)} Mio. €</td>
                          <td className="py-2 px-3 text-purple-300">{row.ebitda.toFixed(1)} Mio. €</td>
                          <td className="py-2 px-3 text-amber-300">{row.employees} MA</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'media' && (
            <div className="space-y-6">
              {/* Media Summary Box */}
              <div className="bg-[#0A132C] border border-[#1677FF]/40 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3 border-b border-[#1F3163] pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-[#69B8FF]" />
                    <h4 className="text-sm font-bold text-white">
                      Aggregierter Media-Check &amp; LinkedIn Sentiment
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={company.mediaRating} />
                    <TrendIndicator direction={company.mediaRatingTrend} />
                  </div>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {company.mediaSummary}
                </p>
              </div>

              {/* News & Press Feed */}
              <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Erfasste Fachpresse- und Registermeldungen
                </h4>
                <div className="space-y-2.5">
                  {company.newsItems.map((news, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163]/60 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-[#69B8FF]">{news.date}</span>
                          <span className="text-[11px] font-semibold text-slate-400">• {news.source}</span>
                        </div>
                        <p className="text-xs font-medium text-white mt-1">{news.headline}</p>
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
        <div className="p-4 bg-[#081024] border-t border-[#1F3163] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono">
            <span>Stand: Q1 2026</span>
            <span>•</span>
            <span>Datenquellen: Bundesanzeiger, Unternehmensregister, LinkedIn, Presse-Scraping</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0E1A3C] hover:bg-[#162750] text-slate-300 font-semibold border border-[#1F3163] btn-transition"
            >
              Schließen
            </button>
            <button
              onClick={() => onExportCrm(company.id)}
              className="px-4 py-2 rounded-lg bg-[#1677FF] hover:bg-[#1677FF]/90 text-white font-bold border border-blue-400/40 flex items-center gap-1.5 shadow-md btn-transition"
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
