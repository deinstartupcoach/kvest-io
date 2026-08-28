import { Candidate } from '../types';

export const mockCandidates: Candidate[] = [
  {
    id: 'CAND-9104',
    name: 'Dr.-Ing. Maximilian von Berg',
    title: 'Dr.-Ing. Dipl.-Wirtsch.-Ing.',
    currentRole: 'Chief Operating Officer (COO)',
    currentCompany: 'Kraus & Meissner Antriebstechnik GmbH',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=250',
    age: 51,
    location: 'Stuttgart',
    state: 'Baden-Württemberg',
    radiusKm: 75,
    mobilityDACH: true,
    totalExperienceYears: 24,
    leadershipExperienceYears: 14,
    industryExperienceYears: 18,
    targetRoles: ['CEO / Sprecher der Geschäftsführung', 'Managing Director (MBI)', 'COO / Werkleiter'],
    industries: ['Maschinenbau', 'Präzisionsfertigung', 'Automotive Tier-1', 'Medizintechnik'],
    matchScore: 97,
    status: 'Offen für Gespräche',
    salaryExpectation: {
      min: 220,
      max: 280,
      currency: 'EUR',
      packageDetails: 'Fixum 240k € + 30% performanceabhängiger Bonus + MBI Beteiligungsoption erwünscht'
    },
    contact: {
      email: 'm.vonberg.exec@gmail.com',
      phone: '+49 171 4928104',
      linkedin: 'https://linkedin.com/in/maximilian-von-berg-phd'
    },
    executiveSummary: 'Erfahrener Industrie-Manager mit Doppelqualifikation in Maschinenbau & Betriebswirtschaft. Ausgewiesener Turnaround- und Skalierungsexperte im inhabergeführten Mittelstand sowie in Konzernstrukturen (Festo, TRUMPF). Sucht gezielt MBI-Opportunität oder CEO-Nachfolge.',
    personalInsights: {
      interests: ['Leidenschaftlicher Touren-Motorradfahrer (BMW R1250 GS Adventure)', 'Marathonläufer (Bestzeit 3:28h)', 'Ehrenamtlicher Mentor bei Start-up BW'],
      leadershipStyle: 'Kooperativ-leistungsorientiert, ausgeprägte Shopfloor-Präsenz (Gemba Walk), strukturierte OKR-Führung.',
      personalityTraits: ['Analytisch stark', 'Verhandlungsfest', 'Hohe emotionale Intelligenz', 'Krisenerprobt'],
      languages: ['Deutsch (Muttersprache)', 'Englisch (Verhandlungssicher / C2)', 'Französisch (Fließend / B2)'],
      education: ['Promotion Dr.-Ing. (Produktionstechnik) – RWTH Aachen', 'Dipl.-Wirtsch.-Ing. – Karlsruher Institut für Technologie (KIT)', 'Executive Management Program – INSEAD Fontainebleau'],
      toneOfVoice: 'Sachlich-technokratisch, stark faktenorientiert (OEE- und Lean-Kennzahlen). Keine polemischen oder emotional aufgeladenen Statements.',
      crisisPostingAudit: 'Sehr hohe Medienhygiene. Keine privaten Eskapaden, keine politische Polarisierung. Privater Content beschränkt sich strikt auf sportliche Meilensteine.',
      employerLoyalty: {
        status: 'Deutliche Distanzierung / Starker Wechselindikator',
        trend: 'declining',
        details: 'Bis Mai 2025 regelmäßige Reposts von Firmen-News der Kraus & Meissner GmbH. Seit Juni 2025 vollständiger Stopp von Arbeitgeber-Erwähnungen. Gleichzeitig sprunghafter Anstieg von Interaktionen mit Private-Equity-Investoren und M&A-Boutiquen auf LinkedIn.',
        recentPostingQuote: '„Erfolgreiche operative Transformation scheitert selten an der Mannschaft auf dem Shopfloor – meist am Mut der Gesellschafter, notwendige Capex freizugeben.“ (LinkedIn vor 3 Wochen)',
        lastCompanyMentionDate: '14.05.2025'
      }
    },
    employmentHistory: [
      {
        id: 'HIST-1',
        role: 'Chief Operating Officer (COO)',
        company: 'Kraus & Meissner Antriebstechnik GmbH',
        period: '2021 – Heute (5 Jahre)',
        isCurrent: true,
        revenueResponsibility: '48 Mio. € P&L',
        teamSize: '240 Mitarbeiter (3 Werke in DE, CZ, PL)',
        keyAchievements: [
          'Steigerung der Gesamtanlageneffektivität (OEE) um 18,4% über alle Fertigungsstandorte',
          'Erfolgreiche Einführung eines einheitlichen ERP- und MES-Systems (SAP S/4HANA)',
          'Senkung der Durchlaufzeiten im Sondermaschinenbau von 14 auf 8,5 Wochen'
        ],
        kpiScore: 94
      },
      {
        id: 'HIST-2',
        role: 'Vice President Global Manufacturing',
        company: 'TRUMPF Werkzeugmaschinen SE + Co. KG',
        period: '2016 – 2021 (5 Jahre)',
        isCurrent: false,
        revenueResponsibility: '120 Mio. € Budgetverantwortung',
        teamSize: '480 Mitarbeiter',
        keyAchievements: [
          'Leitung des Leitwerks für Laserschneidanlagen mit internationaler Ramp-up Verantwortung',
          'Umsetzung eines 12 Mio. € Automatisierungsprogramms inklusive fahrerloser Transportsysteme'
        ],
        kpiScore: 96
      }
    ],
    employerIntelligence: {
      companyName: 'Kraus & Meissner Antriebstechnik GmbH',
      industry: 'Elektrische Antriebstechnik & Mechatronik',
      employees: 310,
      kununuScore: 3.3,
      kununuTrend: 'down',
      kununuDetails: 'Kununu-Score im letzten Halbjahr von 3.9 auf 3.3 gesunken. Häufige Kritikpunkte: „Mangelnde Investitionsbereitschaft der Alt-Gesellschafter, Blockadehaltung der Gründerfamilie“. Indiziert hohe Wechselbereitschaft im Management!',
      glassdoorSalaryEstimate: '190.000 € – 245.000 € Gesamtvergütung',
      mediaSummary: 'Presseberichte über Stockung bei der geplanten Werkserweiterung in Polen; Gesellschafterkreis zerstritten über strategische Ausrichtung (Wasserstoff-Antriebe vs. klassischer Getriebebau).',
      revenueTrend: 'Stagnierend bei 48 Mio. € (-1.2% YoY)',
      employeeGrowthYoY: '-3.5% (Einstellungsstopp auf Managementebene)',
      turnoverRisk: 'High'
    },
    shortlisted: true
  },
  {
    id: 'CAND-8402',
    name: 'Dipl.-Kffr. Sandra Lindemann',
    title: 'Dipl.-Kffr. (Univ.) / Certified M&A Advisor',
    currentRole: 'Chief Financial Officer (CFO)',
    currentCompany: 'Vanguard Sensor Solutions AG',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250',
    age: 47,
    location: 'München',
    state: 'Bayern',
    radiusKm: 100,
    mobilityDACH: true,
    totalExperienceYears: 21,
    leadershipExperienceYears: 11,
    industryExperienceYears: 15,
    targetRoles: ['CFO / Kaufmännische Geschäftsführung', 'Managing Director Finance & Operations'],
    industries: ['Sensorik & Halbleiter', 'Industrial Tech', 'B2B Software', 'Medizintechnik'],
    matchScore: 94,
    status: 'Exklusiv gelistet',
    salaryExpectation: {
      min: 200,
      max: 250,
      currency: 'EUR',
      packageDetails: 'Fixum 210k € + Bonus bis zu 35% + Exit-Partizipation'
    },
    contact: {
      email: 's.lindemann.cfo@finance-network.de',
      phone: '+49 160 8829011',
      linkedin: 'https://linkedin.com/in/sandra-lindemann-cfo'
    },
    executiveSummary: 'Kapitalmarkterfahrene CFO mit umfassendem Track-Record in Post-Merger-Integration, Carve-Outs und Unternehmensfinanzierung im Technologiesektor. Begleitete zwei erfolgreiche Private-Equity-Transaktionen.',
    personalInsights: {
      interests: ['Regattasegeln (Starnberger See, Dragon-Klasse)', 'Klassische Musik & Opernbesuche', 'Förderin von Female Leadership in Finance'],
      leadershipStyle: 'Transparente Zahlenkultur, datengestützte Entscheidungsfindung, pragmatisch und lösungsorientiert.',
      personalityTraits: ['Verhandlungsstark', 'Strategischer Weitblick', 'Hohe Durchsetzungsstärke', 'Integrität'],
      languages: ['Deutsch (Muttersprache)', 'Englisch (C2)', 'Spanisch (Grundkenntnisse)'],
      education: ['Diplom-Kauffrau – Ludwig-Maximilians-Universität München (LMU)', 'MBA – IE Business School Madrid', 'CFA Charterholder Level 2'],
      toneOfVoice: 'Präzise, hochprofessionell, zurückhaltend. Verwendet fundierte Finanzterminologie, publiziert nur zu Fachthemen.',
      crisisPostingAudit: 'Makellos. Keine unbedachten Kommentare, keine privaten Äußerungen im beruflichen Netzwerk.',
      employerLoyalty: {
        status: 'Strategisch neutral (Post-Merger-Phase abgeschlossen)',
        trend: 'neutral',
        details: 'Hält sich bei Unternehmenslob bewusst zurück; sucht nach erfolgreicher Konsortialkredit-Strukturierung die nächste PE-Buyout Herausforderung.',
        recentPostingQuote: '„Erfolgreiche Post-Merger-Integration verlangt vor allem Disziplin im Working Capital Management.“ (Fachartikel vor 2 Monaten)',
        lastCompanyMentionDate: '10.01.2026'
      }
    },
    employmentHistory: [
      {
        id: 'HIST-11',
        role: 'Chief Financial Officer (CFO)',
        company: 'Vanguard Sensor Solutions AG',
        period: '2019 – Heute (7 Jahre)',
        isCurrent: true,
        revenueResponsibility: '65 Mio. € Konzernumsatz',
        teamSize: '28 Mitarbeiter in Finance, Controlling, HR & Legal',
        keyAchievements: [
          'Restrukturierung der Bankkredite und Konsortialfinanzierung über 25 Mio. € zu Top-Konditionen',
          'Vollständige Digitalisierung der Monatsabschlüsse (Fast-Close innerhalb von 4 Werktagen)',
          'Erfolgreicher Zukauf und Integration eines Schweizer Messtechnik-Unternehmens'
        ],
        kpiScore: 95
      }
    ],
    employerIntelligence: {
      companyName: 'Vanguard Sensor Solutions AG',
      industry: 'Sensorik & Messtechnik',
      employees: 280,
      kununuScore: 3.8,
      kununuTrend: 'stable',
      kununuDetails: 'Stabile Bewertung mit solider Arbeitskultur; Geschäftsleitung plant jedoch Mehrheitseinstieg eines US-Konzerns, weshalb CFO nach neuem PE/Mittelstands-Mandat sucht.',
      glassdoorSalaryEstimate: '210.000 € – 260.000 €',
      mediaSummary: 'Regelmäßige Erwähnung im Handelsblatt als Vorzeige-Mittelständler im Bereich Halbleiter-Messtechnik; solide Bonitätsbewertung Creditreform Index 142.',
      revenueTrend: 'Wachstum +8.4% YoY',
      employeeGrowthYoY: '+4.2%',
      turnoverRisk: 'Medium'
    },
    shortlisted: true
  }
];
