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
  },
  {
    id: 'CAND-7731',
    name: 'Dipl.-Ing. Markus Breitner',
    title: 'Dipl.-Ing. (TU) / MBA',
    currentRole: 'Managing Director / Sprecher der Geschäftsführung',
    currentCompany: 'Rhein-Main Präzisionsguss & Sensorik GmbH',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250',
    age: 54,
    location: 'Frankfurt am Main',
    state: 'Hessen',
    radiusKm: 120,
    mobilityDACH: true,
    totalExperienceYears: 27,
    leadershipExperienceYears: 16,
    industryExperienceYears: 22,
    targetRoles: ['CEO / Sprecher der Geschäftsführung', 'Managing Director (MBI / Nachfolge)', 'Beirat / Advisory Board'],
    industries: ['Maschinenbau', 'Automotive Tier-1', 'Gießereitechnik & Werkstoffkunde', 'Kältetechnik'],
    matchScore: 92,
    status: 'Aktiv suchend',
    salaryExpectation: {
      min: 240,
      max: 310,
      currency: 'EUR',
      packageDetails: 'Fixum 260k € + Bonus 30% + MBI Co-Investment / Equity Roll-Over Option'
    },
    contact: {
      email: 'm.breitner.exec@gmx.de',
      phone: '+49 172 6301928',
      linkedin: 'https://linkedin.com/in/markus-breitner-ceo'
    },
    executiveSummary: 'Vielseitiger Industrie-Geschäftsführer mit 16 Jahren P&L-Gesamtverantwortung im gehobenen Mittelstand (bis 90 Mio. € Umsatz). Herausragende Erfolge bei Werkserweiterungen in CEE und Effizienzsteigerungen im Mehrschichtbetrieb.',
    personalInsights: {
      interests: ['Oldtimer-Restaurierung (Porsche 911 G-Modell)', 'Alpines Bergwandern & Klettersteige', 'Mitglied im VDMA Fachausschuss Gießereitechnik'],
      leadershipStyle: 'Zielorientiert, partizipativ mit klarer KPI-Transparenz, starker Fokus auf Wertschöpfungstiefe.',
      personalityTraits: ['Pragmatisch', 'Unternehmerisch denkend', 'Verhandlungssicher', 'Hohe Belastbarkeit'],
      languages: ['Deutsch (Muttersprache)', 'Englisch (Verhandlungssicher)', 'Italienisch (Grundkenntnisse)'],
      education: ['Dipl.-Ing. Maschinenbau – TU Darmstadt', 'Executive MBA – Mannheim Business School'],
      toneOfVoice: 'Ruhig, souverän, industrieerfahren. Vermeidet Hype-Themen, fokussiert auf Rentabilität und Liquiditätssicherung.',
      crisisPostingAudit: 'Sehr professionell und zurückhaltend. Keine persönlichen Meinungsäußerungen zu tagespolitischen Themen.',
      employerLoyalty: {
        status: 'Auslaufender Vertrag / Geordneter Übergang',
        trend: 'declining',
        details: 'Gesellschafterkreis der Rhein-Main Präzisionsguss hat Verkauf an chinesischen Konzern beschlossen. Breitner lehnt Verbleib unter neuem Eigentümer ab und sucht gezielt buy-in MBI im deutschen Mittelstand.',
        recentPostingQuote: '„Unternehmerische Freiheit und regionale Wertschöpfung sind für mich das Fundament eines zukunftsfähigen Mittelstands.“ (Fachbeitrag vor 1 Monat)',
        lastCompanyMentionDate: '01.12.2025'
      }
    },
    employmentHistory: [
      {
        id: 'HIST-21',
        role: 'Managing Director / CEO',
        company: 'Rhein-Main Präzisionsguss & Sensorik GmbH',
        period: '2017 – Heute (9 Jahre)',
        isCurrent: true,
        revenueResponsibility: '85 Mio. € P&L Verantwortung',
        teamSize: '390 Mitarbeiter',
        keyAchievements: [
          'Steigerung der EBIT-Marge von 6,2% auf 11,8% durch Einführung automatisierter Entgratungs- und Prüfzellen',
          'Aufbau eines neuen Produktionsstandorts in Ungarn mit 120 Mitarbeitern im Zeit- und Budgetplan'
        ],
        kpiScore: 93
      },
      {
        id: 'HIST-22',
        role: 'Geschäftsführer Produktion & Technik',
        company: 'Honsel Umformtechnik GmbH',
        period: '2010 – 2017 (7 Jahre)',
        isCurrent: false,
        revenueResponsibility: '55 Mio. € Budget',
        teamSize: '270 Mitarbeiter',
        keyAchievements: [
          'Erfolgreiche Restrukturierung und Neuausrichtung auf Leichtbaukomponenten für die E-Mobilität'
        ],
        kpiScore: 91
      }
    ],
    employerIntelligence: {
      companyName: 'Rhein-Main Präzisionsguss & Sensorik GmbH',
      industry: 'Gießereitechnik & Automobilzulieferer',
      employees: 390,
      kununuScore: 3.5,
      kununuTrend: 'down',
      kununuDetails: 'Mitarbeiter verunsichert wegen anstehendem Eigentümerwechsel. GF genießt hohes Ansehen in der Belegschaft, wird jedoch nicht unter chinesischer Führung bleiben.',
      glassdoorSalaryEstimate: '220.000 € – 290.000 €',
      mediaSummary: 'FAZ berichtete über geplante Übernahme durch Ningbo Auto Parts; Kartellfreigabe steht noch aus.',
      revenueTrend: 'Solide bei 85 Mio. € (+3.1% YoY)',
      employeeGrowthYoY: '+1.5%',
      turnoverRisk: 'High'
    },
    shortlisted: false
  },
  {
    id: 'CAND-6190',
    name: 'Dr. rer. pol. Elena Richter',
    title: 'Dr. rer. pol. / Dipl.-Kffr.',
    currentRole: 'Chief Commercial Officer (CCO) / VP Global Sales',
    currentCompany: 'FrankenTech Automation SE',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
    age: 46,
    location: 'Nürnberg',
    state: 'Bayern',
    radiusKm: 90,
    mobilityDACH: true,
    totalExperienceYears: 20,
    leadershipExperienceYears: 11,
    industryExperienceYears: 16,
    targetRoles: ['CEO / Geschäftsführung Vertrieb & Internationalisierung', 'Managing Director', 'CCO'],
    industries: ['Maschinenbau & Intralogistik', 'Industrielle Sensorik', 'Robotik & Automation', 'B2B Tech'],
    matchScore: 91,
    status: 'Offen für Gespräche',
    salaryExpectation: {
      min: 195,
      max: 255,
      currency: 'EUR',
      packageDetails: 'Fixum 215k € + erfolgsabhängige Tantieme + Virtual Shares'
    },
    contact: {
      email: 'e.richter.executive@outlook.de',
      phone: '+49 151 7749021',
      linkedin: 'https://linkedin.com/in/elena-richter-phd'
    },
    executiveSummary: 'Vertriebsstarke Top-Managerin mit nachweisbarer Erfolgsbilanz in der Internationalisierung deutscher Maschinenbauer in Nordamerika und Asien. Führte globale Sales- und Service-Organisationen mit über 150 Mitarbeitern.',
    personalInsights: {
      interests: ['Dressurreiten (Turniererfahrung LK 3)', 'Moderne Kunst & Architektur', 'Keynote-Speakerin auf Automatisierungskongressen'],
      leadershipStyle: 'Inspirierend-fordernd, stark vertriebsorientiert, kundenzentriert mit agilen Vertriebsstrukturen.',
      personalityTraits: ['Extrem kommunikationsstark', 'Strategische Visionärin', 'Abschlussstark', 'Kulturelle Empathie'],
      languages: ['Deutsch (Muttersprache)', 'Englisch (C2)', 'Mandarin (Grundkenntnisse A2)'],
      education: ['Promotion Dr. rer. pol. (Internationales Marketing) – Universität Erlangen-Nürnberg', 'Diplom-Kauffrau – Universität Passau'],
      toneOfVoice: 'Dynamisch, optimistisch, wachstumsorientiert. Teilt Einblicke in Marktchancen und B2B-Skalierung.',
      crisisPostingAudit: 'Sehr diszipliniert. Nur geschäftliche Themen, keine privaten Kontroversen.',
      employerLoyalty: {
        status: 'Verdeckte Wechselabsicht (Strategiewechsel der US-Mutter)',
        trend: 'declining',
        details: 'Nach Übernahme der FrankenTech durch US-Finanzinvestor wurde europäisches Vertriebsbudget um 25% gekürzt. Richter sucht CEO/CCO-Mandat in mittelständischer Eigentümerstruktur mit echtem Gestaltungsspielraum.',
        recentPostingQuote: '„Kundenbindung im Spezialmaschinenbau entsteht durch Vertrauen vor Ort – nicht durch zentralisierte Callcenter.“ (LinkedIn vor 2 Wochen)',
        lastCompanyMentionDate: '15.11.2025'
      }
    },
    employmentHistory: [
      {
        id: 'HIST-31',
        role: 'Chief Commercial Officer (CCO)',
        company: 'FrankenTech Automation SE',
        period: '2020 – Heute (6 Jahre)',
        isCurrent: true,
        revenueResponsibility: '95 Mio. € weltweiter Auftragseingang',
        teamSize: '110 Mitarbeiter in Sales, Key Account Management & Field Service',
        keyAchievements: [
          'Aufbau der US-Vertriebsniederlassung in Charlotte, NC mit 18 Mio. $ Umsatz im 3. Geschäftsjahr',
          'Steigerung des margenstarken Service- und Wartungsvertragsgeschäfts um 42%'
        ],
        kpiScore: 94
      },
      {
        id: 'HIST-32',
        role: 'Head of Global Key Account Management',
        company: 'Krones AG',
        period: '2014 – 2020 (6 Jahre)',
        isCurrent: false,
        revenueResponsibility: '140 Mio. € Großkunden-Portfolio',
        teamSize: '45 Mitarbeiter',
        keyAchievements: [
          'Abschluss mehrjähriger Rahmenverträge mit multinationalen Getränkekonzernen'
        ],
        kpiScore: 92
      }
    ],
    employerIntelligence: {
      companyName: 'FrankenTech Automation SE',
      industry: 'Industrieautomation & Fördertechnik',
      employees: 480,
      kununuScore: 3.4,
      kununuTrend: 'down',
      kununuDetails: 'Kununu-Bewertungen spiegeln Unruhe nach Übernahme wider: „Zunehmender Margendruck aus den USA, Verlust mittelständischer Werte“.',
      glassdoorSalaryEstimate: '200.000 € – 250.000 €',
      mediaSummary: 'WirtschaftsWoche berichtete über Umbau der FrankenTech zur reinen Vertriebsplattform des US-Investors.',
      revenueTrend: 'Stagnierend bei 95 Mio. € (-0.8% YoY)',
      employeeGrowthYoY: '-2.1%',
      turnoverRisk: 'High'
    },
    shortlisted: false
  }
];
