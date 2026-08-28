import React, { useState } from 'react';
import { mockCompanies } from './data/companiesData';
import { mockCandidates } from './data/candidatesData';
import { Company, Candidate, MainTab, ActiveMockupView } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { MockupBar } from './components/layout/MockupBar';
import { CompanyListView } from './components/company/CompanyListView';
import { CompanyDetailModal } from './components/company/CompanyDetailModal';
import { CandidateListView } from './components/candidate/CandidateListView';
import { CandidateDetailModal } from './components/candidate/CandidateDetailModal';
import {
  Bookmark,
  Send,
  Database,
  Settings,
  Sparkles,
  Building2,
  Users,
  CheckCircle2,
  Download,
  Share2
} from 'lucide-react';

export const App: React.FC = () => {
  // Data State
  const [companies, setCompanies] = useState<Company[]>(mockCompanies);
  const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);

  // Navigation State
  const [mainTab, setMainTab] = useState<MainTab>('companies');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active Mockup View calculation
  const currentMockupView: ActiveMockupView = selectedCompany
    ? 'company-detail'
    : selectedCandidate
    ? 'candidate-detail'
    : mainTab === 'candidates'
    ? 'candidate-list'
    : 'company-list';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Action Handlers
  const handleToggleWatchlist = (id: string) => {
    setCompanies(prev =>
      prev.map(c => (c.id === id ? { ...c, watchlistStatus: !c.watchlistStatus } : c))
    );
    const target = companies.find(c => c.id === id);
    if (target) {
      showToast(!target.watchlistStatus ? `"${target.name}" zur Watchlist hinzugefügt.` : `"${target.name}" von Watchlist entfernt.`);
    }
  };

  const handleToggleShortlist = (id: string) => {
    setCandidates(prev =>
      prev.map(c => (c.id === id ? { ...c, shortlisted: !c.shortlisted } : c))
    );
    const target = candidates.find(c => c.id === id);
    if (target) {
      showToast(!target.shortlisted ? `${target.name} zur Shortlist hinzugefügt.` : `${target.name} aus Shortlist entfernt.`);
    }
  };

  const handleExportCrm = (id: string) => {
    setCompanies(prev =>
      prev.map(c => (c.id === id ? { ...c, crmExported: true } : c))
    );
    const target = companies.find(c => c.id === id);
    showToast(`Target "${target?.name || id}" erfolgreich in CRM (HubSpot/Salesforce) übertragen!`);
  };

  // Mockup Switcher direct Jump
  const handleSelectMockup = (mockup: ActiveMockupView) => {
    if (mockup === 'company-list') {
      setSelectedCompany(null);
      setSelectedCandidate(null);
      setMainTab('companies');
    } else if (mockup === 'company-detail') {
      setMainTab('companies');
      setSelectedCandidate(null);
      setSelectedCompany(companies[0]); // Select first company (Vetter Präzision)
    } else if (mockup === 'candidate-list') {
      setSelectedCompany(null);
      setSelectedCandidate(null);
      setMainTab('candidates');
    } else if (mockup === 'candidate-detail') {
      setMainTab('candidates');
      setSelectedCompany(null);
      setSelectedCandidate(candidates[0]); // Select first candidate (Dr. Maximilian von Berg)
    }
  };

  const watchlistCompanies = companies.filter(c => c.watchlistStatus);
  const shortlistedCandidates = candidates.filter(c => c.shortlisted);

  return (
    <div className="flex min-h-screen bg-[#070E22] text-[#E9DFCF] selection:bg-[#1677FF] selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar
        currentTab={mainTab}
        onSelectTab={(tab) => {
          setMainTab(tab);
          setSelectedCompany(null);
          setSelectedCandidate(null);
        }}
        watchlistCount={watchlistCompanies.length}
        shortlistCount={shortlistedCandidates.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Global Header */}
        <Header activeTab={mainTab} />

        {/* Mockup Navigator Bar for 1-Click Demonstration */}
        <MockupBar
          currentMockup={currentMockupView}
          onSelectMockup={handleSelectMockup}
        />

        {/* Dynamic Page Views */}
        <main className="p-6 flex-1 overflow-x-hidden">
          {mainTab === 'companies' && (
            <CompanyListView
              companies={companies}
              onSelectCompany={(company) => setSelectedCompany(company)}
              onToggleWatchlist={handleToggleWatchlist}
              onExportCrm={handleExportCrm}
            />
          )}

          {mainTab === 'candidates' && (
            <CandidateListView
              candidates={candidates}
              onSelectCandidate={(candidate) => setSelectedCandidate(candidate)}
              onToggleShortlist={handleToggleShortlist}
            />
          )}

          {mainTab === 'watchlist' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Geparkte M&amp;A Targets &amp; Shortlisted Executives</h2>
                  <p className="text-xs text-slate-400 mt-1">Zentraler Arbeitsbereich für selektierte Buyout-Targets und Management-Matches</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#69B8FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Building2 size={16} /> M&amp;A Watchlist ({watchlistCompanies.length} Targets)
                  </h3>
                  {watchlistCompanies.length > 0 ? (
                    <CompanyListView
                      companies={watchlistCompanies}
                      onSelectCompany={(company) => setSelectedCompany(company)}
                      onToggleWatchlist={handleToggleWatchlist}
                      onExportCrm={handleExportCrm}
                    />
                  ) : (
                    <div className="p-8 text-center bg-[#0B1633] rounded-xl border border-[#1F3163] text-slate-400 text-xs">
                      Noch keine Targets auf der Watchlist. Klicke auf das Lesezeichen-Symbol in der Firmensuche.
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#69B8FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Users size={16} /> Shortlisted C-Level Kandidaten ({shortlistedCandidates.length} Profile)
                  </h3>
                  {shortlistedCandidates.length > 0 ? (
                    <CandidateListView
                      candidates={shortlistedCandidates}
                      onSelectCandidate={(candidate) => setSelectedCandidate(candidate)}
                      onToggleShortlist={handleToggleShortlist}
                    />
                  ) : (
                    <div className="p-8 text-center bg-[#0B1633] rounded-xl border border-[#1F3163] text-slate-400 text-xs">
                      Noch keine Kandidaten in der Shortlist.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mainTab === 'pipeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">CRM Pipeline &amp; Deal Flow Connector</h2>
                  <p className="text-xs text-slate-400 mt-1">Automatisierter Datenabgleich mit HubSpot, Salesforce und DealRoom</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">HubSpot CRM Sync</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">VERBUNDEN</span>
                  </div>
                  <p className="text-xs text-slate-300">Synchronisiert Firmenstammdaten, Gesellschafter und Kontaktdaten als Deal-Cards in Ihre Pipeline.</p>
                  <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-[#1F3163]">
                    Letzter Push: Heute, 11:30 Uhr (8 Leads)
                  </div>
                </div>

                <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">Salesforce M&amp;A Cloud</span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">BEREIT</span>
                  </div>
                  <p className="text-xs text-slate-300">Direkter 2-Wege Sync für Due Diligence Dossiers und NDA-Tracking.</p>
                  <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-[#1F3163]">
                    API Endpunkt: Aktiver Webhook
                  </div>
                </div>

                <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">PDF One-Pager Export</span>
                    <span className="text-[10px] font-mono text-[#69B8FF] bg-[#1677FF]/20 px-2 py-0.5 rounded border border-[#1677FF]/30">TEMPLATE V3</span>
                  </div>
                  <p className="text-xs text-slate-300">Erzeugt gebrandete Teaser &amp; Management Profile auf Knopfdruck für Investoren-Komitees.</p>
                  <button className="px-3 py-1.5 rounded bg-[#1677FF] hover:bg-[#1677FF]/90 text-white text-xs font-bold flex items-center gap-1.5">
                    <Download size={13} /> Muster-Teaser laden
                  </button>
                </div>
              </div>
            </div>
          )}

          {mainTab === 'intelligence' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Datafeeds, BrightData &amp; SSOT Pipeline</h2>
                  <p className="text-xs text-slate-400 mt-1">Multi-Source Datenaggregation (Handelsregister, Bundesanzeiger, LinkedIn, Wirtschaftspresse)</p>
                </div>
              </div>

              <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Aktive Scraping- und Aggregations-Pipelines</h3>
                <div className="space-y-3">
                  <div className="p-3.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs text-white">Handelsregister &amp; Unternehmensregister (BReg)</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Erfassung von Neuanmeldungen, GF-Wechseln und Bilanzhinterlegungen</p>
                    </div>
                    <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">100% Sync (Täglich)</span>
                  </div>

                  <div className="p-3.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs text-white">BrightData LinkedIn Executive Enrichment</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Tracking von C-Level Wechseln, Organigrammen und Headcount-Trends</p>
                    </div>
                    <span className="font-mono text-xs text-[#69B8FF] bg-[#1677FF]/20 px-2.5 py-1 rounded border border-[#1677FF]/30">68.416 Profile</span>
                  </div>

                  <div className="p-3.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-xs text-white">Kununu &amp; Glassdoor Sentiment Scraper</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">Früherkennung von Management-Krisen und Wechselwilligkeit</p>
                    </div>
                    <span className="font-mono text-xs text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30">Live Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {mainTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white">Systemeinstellungen &amp; Konfiguration</h2>
                <p className="text-xs text-slate-400 mt-1">Konfiguration für kvest.io B2B SaaS Mockup-Umgebung</p>
              </div>

              <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 space-y-4 max-w-2xl">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Standard-Suchradius (km):</label>
                    <input type="number" defaultValue={75} className="p-2 bg-[#070E22] border border-[#1F3163] rounded-lg text-xs text-white w-48 font-mono" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Nachfolge-Altersgrenze Eigner (Jahre):</label>
                    <input type="number" defaultValue={60} className="p-2 bg-[#070E22] border border-[#1F3163] rounded-lg text-xs text-white w-48 font-mono" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">Standard Export CRM:</label>
                    <select className="p-2 bg-[#070E22] border border-[#1F3163] rounded-lg text-xs text-white w-48">
                      <option>HubSpot</option>
                      <option>Salesforce</option>
                      <option>Pipedrive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mockup 2: Company Detail Modal (Blurred Backdrop) */}
      {selectedCompany && (
        <CompanyDetailModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
          onToggleWatchlist={handleToggleWatchlist}
          onExportCrm={handleExportCrm}
        />
      )}

      {/* Mockup 4: Candidate Detail Modal (Blurred Backdrop) */}
      {selectedCandidate && (
        <CandidateDetailModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
          onToggleShortlist={handleToggleShortlist}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1677FF] text-white font-semibold text-xs py-2.5 px-4 rounded-xl shadow-2xl border border-blue-400 flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={16} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
