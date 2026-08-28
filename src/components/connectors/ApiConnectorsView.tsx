import React from 'react';
import { RefreshCw } from 'lucide-react';

interface Connector {
  id: string;
  name: string;
  category: 'Unternehmensregister' | 'Social & Executive Scraping' | 'Employer Reviews' | 'CRM & Pipeline' | 'Market Data';
  logoUrl: string;
  status: 'connected' | 'syncing';
  lastSync: string;
  recordsCount: string;
  description: string;
  endpoint: string;
  logoClass?: string;
}

export const ApiConnectorsView: React.FC = () => {
  const connectors: Connector[] = [
    {
      id: 'northdata',
      name: 'North Data API',
      category: 'Unternehmensregister',
      logoUrl: '/assets/api-logos/northdata logo.png',
      status: 'connected',
      lastSync: 'Heute, 04:12 Uhr',
      recordsCount: '3.420.000 Entitäten',
      description: 'Handelsregister-Bekanntmachungen, Gesellschafterlisten, Jahresabschlüsse und Liquiditätskennzahlen.',
      endpoint: 'https://api.northdata.com/v1/entities',
      logoClass: 'h-7 max-w-[130px]'
    },
    {
      id: 'openregister',
      name: 'Unternehmensregister (BReg)',
      category: 'Unternehmensregister',
      logoUrl: '/assets/api-logos/openregister logo.png',
      status: 'connected',
      lastSync: 'Heute, 03:00 Uhr',
      recordsCount: '100% DACH Abdeckung',
      description: 'Amtliche Veröffentlichungen des Bundesanzeigers, Handelsregisterauszüge (HRB/HRA) und Einreichungen.',
      endpoint: 'https://api.unternehmensregister.de/v2/sync',
      logoClass: 'h-6 max-w-[130px]'
    },
    {
      id: 'brightdata',
      name: 'Bright Data Web Scraper',
      category: 'Social & Executive Scraping',
      logoUrl: '/assets/api-logos/meta logo.png',
      status: 'connected',
      lastSync: 'Vor 18 Minuten',
      recordsCount: '68.416 C-Level Profile',
      description: 'Automatisierte Proxies zur Extraktion von Organigrammen, Headcount-Wachstum und offenen Stellen.',
      endpoint: 'https://api.brightdata.com/dca/trigger',
      logoClass: 'h-5 max-w-[90px]'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn Executive Intelligence',
      category: 'Social & Executive Scraping',
      logoUrl: '/assets/api-logos/linkedin-logo.png',
      status: 'connected',
      lastSync: 'Vor 42 Minuten',
      recordsCount: '124.500 Profile',
      description: 'Tracking von Management-Wechseln, Werdegängen, Post-Aktivitäten und Sentiment-Indikatoren.',
      endpoint: 'https://api.linkedin.com/v2/talent-enrich',
      logoClass: 'h-12 max-w-[170px] scale-150 origin-left' // +30% bigger
    },
    {
      id: 'kununu',
      name: 'Kununu Employer Rating Feed',
      category: 'Employer Reviews',
      logoUrl: '/assets/api-logos/KUNUNU-Logo-Vector.svg-.png',
      status: 'connected',
      lastSync: 'Gestern, 23:45 Uhr',
      recordsCount: '89.200 Arbeitgeber-Reviews',
      description: 'Audit von Mitarbeiterzufriedenheit, Führungswechseln und Kündigungstreibern zur Wechselwilligkeits-Früherkennung.',
      endpoint: 'https://api.kununu.com/v3/company-scores',
      logoClass: 'h-5 max-w-[100px]'
    },
    {
      id: 'glassdoor',
      name: 'Glassdoor Salary & Benchmark',
      category: 'Employer Reviews',
      logoUrl: '/assets/api-logos/glassdoor.png',
      status: 'connected',
      lastSync: 'Gestern, 22:10 Uhr',
      recordsCount: '45.100 Gehaltsbänder',
      description: 'C-Level und VP Gehaltsbenchmarks (Fixum, Bonus, Tantiemen) für verlässliche Executive Search Verhandlungen.',
      endpoint: 'https://api.glassdoor.com/v1/salary-insights',
      logoClass: 'h-10 max-w-[160px] scale-135 origin-left'
    },
    {
      id: 'coleo',
      name: 'Coleo M&A Intelligence',
      category: 'Market Data',
      logoUrl: '/assets/api-logos/coleo logo.png',
      status: 'connected',
      lastSync: 'Heute, 06:30 Uhr',
      recordsCount: '18.400 Transaktionen',
      description: 'Vergleichbare Private Equity Multiples (EV/EBITDA, EV/Sales) für deutsche Mittelstandstransaktionen.',
      endpoint: 'https://api.coleo-intelligence.com/v1/multiples',
      logoClass: 'h-7 max-w-[110px]'
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM Pipeline Sync',
      category: 'CRM & Pipeline',
      logoUrl: '/assets/api-logos/HubSpot-Logo.png',
      status: 'connected',
      lastSync: 'Heute, 11:30 Uhr',
      recordsCount: '34 Deals synchronisiert',
      description: 'Automatisierter 2-Wege-Sync für selektierte M&A Targets und Shortlisted Candidates direkt in Ihre Deal-Pipeline.',
      endpoint: 'https://api.hubapi.com/crm/v3/deals',
      logoClass: 'h-8 max-w-[140px] scale-125 origin-left' // +25% bigger
    }
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg font-bold text-[#0B1633]">API Connectors &amp; Data Pipeline Status</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Zentrales Gateway für behördliche Register, Scraping-Engines, Arbeitgeber-Reviews und CRM-Schnittstellen
          </p>
        </div>

        <button className="px-4 py-2 rounded bg-[#1677FF] hover:bg-blue-600 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition-colors">
          <RefreshCw size={13} />
          <span>Sync jetzt anstoßen</span>
        </button>
      </div>

      {/* Grid of Connectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {connectors.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-lg border border-slate-200 p-4.5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors shadow-2xs"
          >
            {/* Top: Logo & Green Live Indicator with Slow Pulse */}
            <div>
              <div className="flex items-start justify-between min-h-[46px]">
                <div className="h-10 w-36 flex items-center overflow-visible">
                  <img
                    src={c.logoUrl}
                    alt={c.name}
                    className={`${c.logoClass || 'h-7 max-w-full'} object-contain`}
                  />
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-green-pulse"></span>
                  CONNECTED
                </div>
              </div>

              <div className="mt-3">
                <h3 className="text-xs font-bold text-[#0B1633]">{c.name}</h3>
                <span className="text-[10px] text-slate-400 font-mono block">{c.category}</span>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>

            {/* Bottom: Meta Metrics & Endpoint */}
            <div className="pt-3 border-t border-slate-100 space-y-1.5 font-mono text-[10px]">
              <div className="flex justify-between text-slate-500">
                <span>Datensatzbestand:</span>
                <strong className="text-slate-900">{c.recordsCount}</strong>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Letzter Sync:</span>
                <span className="text-slate-700">{c.lastSync}</span>
              </div>
              <div className="text-[9px] text-slate-400 truncate pt-1">
                {c.endpoint}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
