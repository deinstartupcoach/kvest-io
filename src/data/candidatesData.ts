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
      socialMediaNotes: 'Sehr professioneller LinkedIn-Auftritt mit Beiträgen zu Lean Production und Industrie 4.0; privat engagiert im Rotary Club Stuttgart-Solitude; verheiratet, 2 erwachsene Kinder.',
      languages: ['Deutsch (Muttersprache)', 'Englisch (Verhandlungssicher / C2)', 'Französisch (Fließend / B2)'],
      education: ['Promotion Dr.-Ing. (Produktionstechnik) – RWTH Aachen', 'Dipl.-Wirtsch.-Ing. – Karlsruher Institut für Technologie (KIT)', 'Executive Management Program – INSEAD Fontainebleau']
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
      },
      {
        id: 'HIST-3',
        role: 'Leiter Produktion & Continuous Improvement',
        company: 'Festo SE & Co. KG',
        period: '2010 – 2016 (6 Jahre)',
        isCurrent: false,
        revenueResponsibility: '35 Mio. €',
        teamSize: '120 Mitarbeiter',
        keyAchievements: [
          'Auszeichnung mit dem Factory of the Year Award (Kategorie Schlanke Produktion)',
          'Reduktion der Ausschussrate von 2,4% auf 0,6%'
        ],
        kpiScore: 91
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
      socialMediaNotes: 'Aktives Mitglied im Verband der Finanzexperten (VFE); Gastdozentin für Corporate Finance an der LMU München; keine auffälligen privaten Kontroversen.',
      languages: ['Deutsch (Muttersprache)', 'Englisch (C2)', 'Spanisch (Grundkenntnisse)'],
      education: ['Diplom-Kauffrau – Ludwig-Maximilians-Universität München (LMU)', 'MBA – IE Business School Madrid', 'CFA Charterholder Level 2']
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
      },
      {
        id: 'HIST-12',
        role: 'Director Corporate Controlling & Treasury',
        company: 'Infineon Technologies AG',
        period: '2014 – 2019 (5 Jahre)',
        isCurrent: false,
        revenueResponsibility: 'Division Automotive Power (240 Mio. €)',
        teamSize: '15 Mitarbeiter',
        keyAchievements: [
          'Aufbau eines Predictive Forecasting Modells für volatile Halbleitermärkte',
          'Leitung der Budgetplanung für internationale F&E Standorte'
        ],
        kpiScore: 92
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
  },
  {
    id: 'CAND-7821',
    name: 'Dipl.-Ing. Carsten Böttcher',
    title: 'Dipl.-Ing. Maschinenbau',
    currentRole: 'Geschäftsführer Vertrieb & Marketing (CSO)',
    currentCompany: 'ThermaTec Kältesysteme GmbH',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    age: 54,
    location: 'Nürnberg',
    state: 'Bayern',
    radiusKm: 80,
    mobilityDACH: true,
    totalExperienceYears: 27,
    leadershipExperienceYears: 16,
    industryExperienceYears: 22,
    targetRoles: ['CEO / Alleingeschäftsführer', 'CSO / Geschäftsführer Vertrieb & Internationalisierung'],
    industries: ['Kältetechnik & HVAC', 'Anlagenbau', 'Energietechnik', 'Gebäudeautomation'],
    matchScore: 92,
    status: 'Aktiv suchend',
    salaryExpectation: {
      min: 190,
      max: 240,
      currency: 'EUR',
      packageDetails: '195k € Fixum + 25% variable Tantieme'
    },
    contact: {
      email: 'c.boettcher.exec@t-online.de',
      phone: '+49 172 6194820',
      linkedin: 'https://linkedin.com/in/carsten-boettcher-industrial'
    },
    executiveSummary: 'Vertriebsstarker Ingenieur mit tiefem Verständnis für komplexe technische B2B-Investitionsgüter. Führte Vertriebsorganisationen von 15 Mio. auf 50 Mio. € Umsatz durch Erschließung von DACH- und US-Märkten.',
    personalInsights: {
      interests: ['Mountainbiken im Frankenwald', 'Hobby-Imker (12 Bienenvölker)', 'Historische Architektur'],
      leadershipStyle: 'Unternehmerisch, kundenfokussiert, inspirierend, fördert Eigenverantwortung.',
      personalityTraits: ['Kommunikativ', 'Akquisitionsstark', 'Hohe Resilienz', 'Bodenständig'],
      socialMediaNotes: 'Moderates Profil, Fokus auf B2B-Kundenpflege und Verbandsarbeit (VDMA Kälte- und Klimatechnik).',
      languages: ['Deutsch (Muttersprache)', 'Englisch (Verhandlungssicher)', 'Italienisch (Konversationssicher)'],
      education: ['Dipl.-Ing. Maschinenbau – TU Dresden', 'Aufbaustudium Internationales Marketing – FH Nürnberg']
    },
    employmentHistory: [
      {
        id: 'HIST-21',
        role: 'Geschäftsführer Vertrieb & Marketing (CSO)',
        company: 'ThermaTec Kältesysteme GmbH',
        period: '2017 – Heute (9 Jahre)',
        isCurrent: true,
        revenueResponsibility: '42 Mio. € Vertriebsbudget',
        teamSize: '35 Mitarbeiter (Vertrieb & Service Außendienst)',
        keyAchievements: [
          'Verdopplung des Auftragseingangs im Bereich Wärmepumpen-Großanlagen',
          'Aufbau eines Key-Account-Management-Systems für europäische Food & Retail Ketten'
        ],
        kpiScore: 93
      }
    ],
    employerIntelligence: {
      companyName: 'ThermaTec Kältesysteme GmbH',
      industry: 'Industriekälte & Wärmepumpen',
      employees: 190,
      kununuScore: 3.1,
      kununuTrend: 'down',
      kununuDetails: 'Übernahme durch ausländischen Konzern führte zu starker Bürokratisierung und Entmachtung des lokalen Managements. Böttcher sucht daher gezielt mittelständisches Eigentümerumfeld.',
      glassdoorSalaryEstimate: '175.000 € – 215.000 €',
      mediaSummary: 'Berichte über Restrukturierungsprogramm der Muttergesellschaft in den Medien.',
      revenueTrend: 'Stagnation',
      employeeGrowthYoY: '-5.0%',
      turnoverRisk: 'High'
    },
    shortlisted: false
  },
  {
    id: 'CAND-6319',
    name: 'Dr. Michael Staudt',
    title: 'Dr. rer. nat. / Master of Science',
    currentRole: 'Chief Technology Officer (CTO)',
    currentCompany: 'OptoGrid Inspection Systems GmbH',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250',
    age: 45,
    location: 'Frankfurt am Main',
    state: 'Hessen',
    radiusKm: 60,
    mobilityDACH: true,
    totalExperienceYears: 19,
    leadershipExperienceYears: 9,
    industryExperienceYears: 16,
    targetRoles: ['CTO / Geschäftsführer F&E', 'Geschäftsführer Tech / DeepTech MD'],
    industries: ['Optoelektronik', 'Industrielle Bildverarbeitung', 'KI-basierte Robotik', 'Sondermaschinenbau'],
    matchScore: 91,
    status: 'Offen für Gespräche',
    salaryExpectation: {
      min: 185,
      max: 230,
      currency: 'EUR',
      packageDetails: '190k € Grundgehalt + Beteiligungsprogramm'
    },
    contact: {
      email: 'm.staudt.tech@gmail.com',
      phone: '+49 173 5519821',
      linkedin: 'https://linkedin.com/in/dr-michael-staudt'
    },
    executiveSummary: 'Technologie-Pionier mit über 20 Patenten in industrieller Bildverarbeitung und Machine Vision. Bringt State-of-the-Art KI-Algorithmen erfolgreich in robuste Industrieanwendungen auf den Shopfloor.',
    personalInsights: {
      interests: ['Klassische Gitarre', 'Segelfliegen (Luftsportverein Langen)', 'Open-Source Hardware Projekte'],
      leadershipStyle: 'Agil, forschend, ermutigend, enge Verzahnung von F&E mit Vertrieb und Kunden.',
      personalityTraits: ['Präzise', 'Innovationshungrig', 'Teamorientiert', 'Problemlöser'],
      socialMediaNotes: 'Veröffentlicht regelmäßig wissenschaftliche Papers auf arXiv & SPIE Konferenzen; hohe Vernetzung mit Fraunhofer Instituten.',
      languages: ['Deutsch (Muttersprache)', 'Englisch (C2)'],
      education: ['Promotion Physik / Optik – Universität Heidelberg', 'M.Sc. Technische Physik – TU Darmstadt']
    },
    employmentHistory: [
      {
        id: 'HIST-31',
        role: 'Chief Technology Officer (CTO)',
        company: 'OptoGrid Inspection Systems GmbH',
        period: '2020 – Heute (6 Jahre)',
        isCurrent: true,
        revenueResponsibility: '8,5 Mio. € F&E Budget',
        teamSize: '45 Ingenieure und Software-Entwickler',
        keyAchievements: [
          'Entwicklung der patentierten 3D-Kameraserie HyperSight mit 10-facher Bildrate',
          'Erhöhung der Software-Margen durch Einführung eines SaaS-Lizenzmodells'
        ],
        kpiScore: 96
      }
    ],
    employerIntelligence: {
      companyName: 'OptoGrid Inspection Systems GmbH',
      industry: 'Industrielle Bildverarbeitung',
      employees: 110,
      kununuScore: 4.1,
      kununuTrend: 'stable',
      kununuDetails: 'Gute Unternehmenskultur, jedoch Begrenzung der unternehmerischen Freiheit durch Mehrheitsinvestor.',
      glassdoorSalaryEstimate: '170.000 € – 210.000 €',
      mediaSummary: 'Positiv in Branchenmedien (Vision Systems Design, InVISION).',
      revenueTrend: 'Stark wachsend (+14% YoY)',
      employeeGrowthYoY: '+9.0%',
      turnoverRisk: 'Low'
    },
    shortlisted: false
  }
];
