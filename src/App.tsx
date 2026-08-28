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
import { ApiConnectorsView } from './components/connectors/ApiConnectorsView';
import {
  Bookmark,
  Building2,
  Users,
  CheckCircle2
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
    showToast(`Target "${target?.name || id}" erfolgreich an CRM (HubSpot/Salesforce) gesendet.`);
  };

  const handleSelectMockup = (mockup: ActiveMockupView) => {
    if (mockup === 'company-list') {
      setSelectedCompany(null);
      setSelectedCandidate(null);
      setMainTab('companies');
    } else if (mockup === 'company-detail') {
      setMainTab('companies');
      setSelectedCandidate(null);
      setSelectedCompany(companies[0]);
    } else if (mockup === 'candidate-list') {
      setSelectedCompany(null);
      setSelectedCandidate(null);
      setMainTab('candidates');
    } else if (mockup === 'candidate-detail') {
      setMainTab('candidates');
      setSelectedCompany(null);
      setSelectedCandidate(candidates[0]);
    }
  };

  const watchlistCompanies = companies.filter(c => c.watchlistStatus);
  const shortlistedCandidates = candidates.filter(c => c.shortlisted);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-[#0B1633] selection:text-white">
      {/* Global Dark Navy Header with white-with-emblem Logo */}
      <Header
        activeTab={mainTab}
        onSelectTab={(tab) => {
          setMainTab(tab);
          setSelectedCompany(null);
          setSelectedCandidate(null);
        }}
        watchlistCount={watchlistCompanies.length + shortlistedCandidates.length}
      />

      {/* Mockup Quick Navigator Bar */}
      <MockupBar
        currentMockup={currentMockupView}
        onSelectMockup={handleSelectMockup}
      />

      {/* Layout Body: Slim Dark Sidebar + Light Workstation Area */}
      <div className="flex-1 flex min-w-0">
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

        <main className="flex-1 p-6 overflow-x-hidden min-w-0">
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
              <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                <h2 className="text-lg font-bold text-[#0B1633]">Geparkte M&amp;A Targets &amp; Shortlisted Executives</h2>
                <p className="text-xs text-slate-500 mt-0.5">Zentraler Workspace für selektierte Buyout-Targets und Management-Matches</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold text-[#0B1633] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building2 size={14} className="text-[#0B1633]" /> M&amp;A Watchlist ({watchlistCompanies.length} Targets)
                  </h3>
                  {watchlistCompanies.length > 0 ? (
                    <CompanyListView
                      companies={watchlistCompanies}
                      onSelectCompany={(company) => setSelectedCompany(company)}
                      onToggleWatchlist={handleToggleWatchlist}
                      onExportCrm={handleExportCrm}
                      hideHeader={true}
                    />
                  ) : (
                    <div className="p-8 text-center bg-white rounded-lg border border-slate-200 text-slate-500 text-xs">
                      Noch keine Targets auf der Watchlist.
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-xs font-bold text-[#0B1633] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Users size={14} className="text-[#0B1633]" /> Shortlisted C-Level Kandidaten ({shortlistedCandidates.length} Profile)
                  </h3>
                  {shortlistedCandidates.length > 0 ? (
                    <CandidateListView
                      candidates={shortlistedCandidates}
                      onSelectCandidate={(candidate) => setSelectedCandidate(candidate)}
                      onToggleShortlist={handleToggleShortlist}
                    />
                  ) : (
                    <div className="p-8 text-center bg-white rounded-lg border border-slate-200 text-slate-500 text-xs">
                      Noch keine Kandidaten in der Shortlist.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mainTab === 'connectors' && (
            <ApiConnectorsView />
          )}
        </main>
      </div>

      {/* Mockup 2: Company Detail Modal */}
      {selectedCompany && (
        <CompanyDetailModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
          onToggleWatchlist={handleToggleWatchlist}
          onExportCrm={handleExportCrm}
        />
      )}

      {/* Mockup 4: Candidate Detail Modal */}
      {selectedCandidate && (
        <CandidateDetailModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
          onToggleShortlist={handleToggleShortlist}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1633] text-white font-semibold text-xs py-2 px-4 rounded shadow-lg border border-slate-700 flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 size={15} className="text-[#69B8FF]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
