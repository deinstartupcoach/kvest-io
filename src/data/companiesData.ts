import { Company } from '../types';

export const mockCompanies: Company[] = [
  {
    id: 'COMP-7489',
    name: 'Vetter Präzisionsdrehteile & Medizintechnik GmbH',
    legalForm: 'GmbH',
    foundingYear: 1989,
    age: 37,
    state: 'Baden-Württemberg',
    city: 'Villingen-Schwenningen',
    postalCode: '78052',
    address: 'Wilhelm-Maybach-Straße 14',
    employeeCount: 142,
    employeeBracket: '50-199',
    industry: 'Medizintechnik & Feinmechanik',
    wzCode: 'C 28.29',
    wzDescription: 'Herstellung von sonstigen nicht wirtschaftszweigspezifischen Maschinen & Drehteilen',
    hrNumber: 'HRB 602819',
    court: 'Amtsgericht Freiburg i. Br.',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB602819',
    owners: [
      { name: 'Dr. Gerhard Vetter', age: 65, sharePercentage: 85, role: 'Hauptgesellschafter & GF', isSuccessionCandidate: true },
      { name: 'Christa Vetter', age: 62, sharePercentage: 15, role: 'Gesellschafterin', isSuccessionCandidate: true }
    ],
    managingDirectors: [
      { name: 'Dr. Gerhard Vetter', age: 65, title: 'Geschäftsführender Gesellschafter', sinceYear: 1989, email: 'g.vetter@vetter-praezision.de', phone: '+49 7721 8840-12', linkedinUrl: 'https://linkedin.com/in/dr-gerhard-vetter-example' },
      { name: 'Markus Eisele', age: 52, title: 'Geschäftsführer Technik & Produktion', sinceYear: 2018, email: 'm.eisele@vetter-praezision.de', phone: '+49 7721 8840-25' }
    ],
    balanceSheetTotal: 18.4,
    balanceSheetTotalTrend: 7.2,
    netProfit: 2.8,
    netProfitTrend: 14.1,
    ebitda: 3.6,
    revenue: 23.8,
    equityRatio: 52.4,
    financialHistory: [
      { year: 2020, revenue: 18.2, balanceTotal: 14.8, profit: 1.8, ebitda: 2.3, employees: 128 },
      { year: 2021, revenue: 19.6, balanceTotal: 15.6, profit: 2.1, ebitda: 2.7, employees: 132 },
      { year: 2022, revenue: 21.4, balanceTotal: 16.9, profit: 2.4, ebitda: 3.1, employees: 138 },
      { year: 2023, revenue: 22.8, balanceTotal: 17.5, profit: 2.6, ebitda: 3.4, employees: 140 },
      { year: 2024, revenue: 23.8, balanceTotal: 18.4, profit: 2.8, ebitda: 3.6, employees: 142 }
    ],
    mediaRating: 4.6,
    mediaRatingTrend: 'up',
    mediaSummary: 'Sehr stabiles Reputationsprofil in Fachmedien (DeviceMed, MedTech ZFF). Positiv hervorgehoben wird die ISO 13485 Reinraum-Erweiterung 2023 und die Partnerschaft mit B. Braun. Keine negativen Arbeitsrechtsprozesse auffindbar.',
    newsItems: [
      { date: '14.01.2026', source: 'Südkurier Wirtschaft', headline: 'Vetter Präzision investiert 2,4 Mio. € in neue Fünf-Achs-Fräszentren', sentiment: 'positive' },
      { date: '08.10.2025', source: 'MedTech Journal DACH', headline: 'Titan-Implantate: Vetter erhält FDA 510(k) Zertifizierung für US-Export', sentiment: 'positive' },
      { date: '12.04.2025', source: 'Handelsregister Bekanntmachung', headline: 'Gewinnabführung und Eigenkapital-Aufstockung um 1,2 Mio. €', sentiment: 'neutral' }
    ],
    keyClients: ['B. Braun Melsungen', 'Karl Storz SE', 'Aesculap AG', 'Stryker Trauma GmbH', 'Erbe Elektromedizin'],
    certifications: ['ISO 13485:2016 (Medizinprodukte)', 'ISO 9001:2015', 'FDA Registered Facility Class II/III', 'DIN EN ISO 14001'],
    shareholdings: [
      { entity: 'Vetter MedTech Holding GbR', type: 'parent', share: '100%', jurisdiction: 'Deutschland' },
      { entity: 'SwissVetter MicroMachining AG', type: 'subsidiary', share: '60%', jurisdiction: 'Kreuzlingen, Schweiz' },
      { entity: 'Schwarzwald Surface Finishing GmbH', type: 'sister', share: '25%', jurisdiction: 'Deutschland' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Hauptgesellschafter 65 Jahre alt, hält 85 % der Anteile. Keine familieninterne Nachfolge vorgesehen. Beratermandat für strategischen Partner oder MBO/MBI wird in Branchenkreisen sondiert.',
    website: 'https://vetter-praezision.de',
    phone: '+49 7721 8840-0',
    email: 'info@vetter-praezision.de',
    watchlistStatus: true,
    crmExported: false
  },
  {
    id: 'COMP-6204',
    name: 'Hofmann & Söhne Fördertechnik GmbH & Co. KG',
    legalForm: 'GmbH & Co. KG',
    foundingYear: 1986,
    age: 40,
    state: 'Bayern',
    city: 'Schweinfurt',
    postalCode: '97424',
    address: 'Industriestraße 8-12',
    employeeCount: 210,
    employeeBracket: '200-499',
    industry: 'Maschinenbau & Intralogistik',
    wzCode: 'C 28.22',
    wzDescription: 'Herstellung von Hebezeugen und Fördermitteln',
    hrNumber: 'HRA 4912 / HRB 3820',
    court: 'Amtsgericht Schweinfurt',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRA4912',
    owners: [
      { name: 'Klaus-Peter Hofmann', age: 67, sharePercentage: 75, role: 'Senior-Gesellschafter', isSuccessionCandidate: true },
      { name: 'Florian Hofmann', age: 34, sharePercentage: 25, role: 'Junior-Partner (stille Beteiligung)', isSuccessionCandidate: false }
    ],
    managingDirectors: [
      { name: 'Klaus-Peter Hofmann', age: 67, title: 'Geschäftsführer Vertrieb & Strategie', sinceYear: 1986, email: 'kp.hofmann@hofmann-foerdertechnik.de', phone: '+49 9721 654-10' },
      { name: 'Dipl.-Ing. Ralf Stegmann', age: 58, title: 'Geschäftsführer Operations', sinceYear: 2012, email: 'r.stegmann@hofmann-foerdertechnik.de', phone: '+49 9721 654-22' }
    ],
    balanceSheetTotal: 29.5,
    balanceSheetTotalTrend: 5.4,
    netProfit: 3.9,
    netProfitTrend: 8.7,
    ebitda: 5.1,
    revenue: 41.2,
    equityRatio: 48.0,
    financialHistory: [
      { year: 2020, revenue: 32.0, balanceTotal: 24.1, profit: 2.9, ebitda: 3.8, employees: 185 },
      { year: 2021, revenue: 34.5, balanceTotal: 25.8, profit: 3.2, ebitda: 4.2, employees: 194 },
      { year: 2022, revenue: 37.8, balanceTotal: 27.2, profit: 3.5, ebitda: 4.6, employees: 202 },
      { year: 2023, revenue: 39.4, balanceTotal: 28.3, profit: 3.7, ebitda: 4.8, employees: 206 },
      { year: 2024, revenue: 41.2, balanceTotal: 29.5, profit: 3.9, ebitda: 5.1, employees: 210 }
    ],
    mediaRating: 4.4,
    mediaRatingTrend: 'up',
    mediaSummary: 'Hohe Medienpräsenz bei LogiMAT und Automatisierungs-Fachmessen. Fokus auf Fahrerlose Transportsysteme (FTS/AGV). Mitarbeiterbewertungen auf Kununu bei 4.1 Sternen bei solider Weiterempfehlungsquote.',
    newsItems: [
      { date: '22.02.2026', source: 'Logistik Heute', headline: 'Hofmann liefert 40 autonome Flurförderzeuge an Automobil-Zulieferer', sentiment: 'positive' },
      { date: '19.11.2025', source: 'Main-Post Wirtschaft', headline: '40 Jahre Hofmann Fördertechnik: Rekordumsatz im Geschäftsjahr 2024/25', sentiment: 'positive' }
    ],
    keyClients: ['Schaeffler Technologies', 'ZF Friedrichshafen', 'BMW Group Dingolfing', 'Krones AG', 'KION Group Partner'],
    certifications: ['DIN EN ISO 9001:2015', 'CE Konformität Intralogistik', 'TÜV Rheinland Functional Safety SIL3'],
    shareholdings: [
      { entity: 'Hofmann Verwaltungs-GmbH', type: 'holding', share: 'Komplementärin (0% Kapital)', jurisdiction: 'Deutschland' },
      { entity: 'Hofmann Intralogistics Sp. z o.o.', type: 'subsidiary', share: '100%', jurisdiction: 'Breslau, Polen' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Senior-Inhaber (67 J.) sucht Nachfolgelösung zur Veräußerung der Mehrheitsanteile (75%). Sohn Florian strebt keine operative Gesamtführung an.',
    website: 'https://hofmann-foerdertechnik.de',
    phone: '+49 9721 654-0',
    email: 'zentrale@hofmann-foerdertechnik.de',
    watchlistStatus: true,
    crmExported: true
  },
  {
    id: 'COMP-8911',
    name: 'Bergmann & Krauss Sondermaschinenbau GmbH',
    legalForm: 'GmbH',
    foundingYear: 1995,
    age: 31,
    state: 'Baden-Württemberg',
    city: 'Aalen',
    postalCode: '73431',
    address: 'Robert-Bosch-Straße 22',
    employeeCount: 178,
    employeeBracket: '50-199',
    industry: 'Sondermaschinenbau & Robotik',
    wzCode: 'C 28.99',
    wzDescription: 'Herstellung von sonstigen Spezialmaschinen für spezifische Wirtschaftszweige',
    hrNumber: 'HRB 501934',
    court: 'Amtsgericht Ulm',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB501934',
    owners: [
      { name: 'Dr.-Ing. Heinrich Bergmann', age: 66, sharePercentage: 60, role: 'Senior-Gründer', isSuccessionCandidate: true },
      { name: 'Werner Krauss Erben GbR', age: 61, sharePercentage: 40, role: 'Erbengemeinschaft', isSuccessionCandidate: true }
    ],
    managingDirectors: [
      { name: 'Dr.-Ing. Heinrich Bergmann', age: 66, title: 'CEO / Technischer Geschäftsführer', sinceYear: 1995, email: 'h.bergmann@bergmann-krauss.de', phone: '+49 7361 998-11' },
      { name: 'Dipl.-Kfm. Thomas Völker', age: 48, title: 'CFO / Kaufmännischer Geschäftsführer', sinceYear: 2019, email: 't.voelker@bergmann-krauss.de', phone: '+49 7361 998-15' }
    ],
    balanceSheetTotal: 24.2,
    balanceSheetTotalTrend: 9.1,
    netProfit: 3.2,
    netProfitTrend: 12.4,
    ebitda: 4.4,
    revenue: 33.6,
    equityRatio: 46.8,
    financialHistory: [
      { year: 2020, revenue: 24.5, balanceTotal: 18.0, profit: 2.1, ebitda: 2.9, employees: 150 },
      { year: 2021, revenue: 26.8, balanceTotal: 19.5, profit: 2.4, ebitda: 3.3, employees: 158 },
      { year: 2022, revenue: 29.2, balanceTotal: 21.3, profit: 2.8, ebitda: 3.8, employees: 166 },
      { year: 2023, revenue: 31.5, balanceTotal: 22.8, profit: 3.0, ebitda: 4.1, employees: 172 },
      { year: 2024, revenue: 33.6, balanceTotal: 24.2, profit: 3.2, ebitda: 4.4, employees: 178 }
    ],
    mediaRating: 4.5,
    mediaRatingTrend: 'up',
    mediaSummary: 'Anerkannter Spezialist für Batterie-Zellmontagelinien und Halbleiter-Handling. Auszeichnung mit dem Innovationspreis Ostwürttemberg 2024. Stark wachsende Auftragspipelines aus Clean Energy.',
    newsItems: [
      { date: '05.02.2026', source: 'Produktion.de', headline: 'Bergmann & Krauss baut neue Montagehalle für Batteriepack-Fertigungsstraßen', sentiment: 'positive' },
      { date: '14.09.2025', source: 'Schwäbische Post', headline: 'Volle Auftragsbücher sichern Beschäftigung bis Q3 2027', sentiment: 'positive' }
    ],
    keyClients: ['VARTA Microbattery', 'Trumpf Gruppe', 'Carl Zeiss AG', 'Bosch Rexroth', 'Customcells Itzehoe'],
    certifications: ['DIN EN ISO 9001', 'ISO 14001', 'CE-Zertifizierung Sondermaschinenbau'],
    shareholdings: [
      { entity: 'BK Automation Services s.r.o.', type: 'subsidiary', share: '100%', jurisdiction: 'Brünn, Tschechien' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Dr. Bergmann (66) und Erbengemeinschaft (40%) streben vollständigen 100% Exit an. Professioneller CFO bereits an Bord zur MBI/PE-Übergabebegleitung.',
    website: 'https://bergmann-krauss-maschinen.de',
    phone: '+49 7361 998-0',
    email: 'kontakt@bergmann-krauss.de',
    watchlistStatus: true,
    crmExported: false
  },
  {
    id: 'COMP-5192',
    name: 'OptiSens Sensorik & Automation GmbH',
    legalForm: 'GmbH',
    foundingYear: 2007,
    age: 19,
    state: 'Hessen',
    city: 'Darmstadt',
    postalCode: '64293',
    address: 'Hilpertstraße 3',
    employeeCount: 85,
    employeeBracket: '50-199',
    industry: 'Industrielle Sensorik & IoT',
    wzCode: 'C 26.51',
    wzDescription: 'Herstellung von Mess-, Kontroll-, Navigations- u. ä. Instrumenten',
    hrNumber: 'HRB 94812',
    court: 'Amtsgericht Darmstadt',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB94812',
    owners: [
      { name: 'Dr. rer. nat. Martin Schöler', age: 61, sharePercentage: 50, role: 'Co-Gründer & CTO', isSuccessionCandidate: true },
      { name: 'Dipl.-Ing. Andreas Klein', age: 59, sharePercentage: 50, role: 'Co-Gründer & CEO', isSuccessionCandidate: true }
    ],
    managingDirectors: [
      { name: 'Dipl.-Ing. Andreas Klein', age: 59, title: 'CEO & Vertrieb', sinceYear: 2007, email: 'a.klein@optisens-sensorik.de', phone: '+49 6151 4490-10' },
      { name: 'Dr. Martin Schöler', age: 61, title: 'CTO & Forschung', sinceYear: 2007, email: 'm.schoeler@optisens-sensorik.de', phone: '+49 6151 4490-20' }
    ],
    balanceSheetTotal: 11.8,
    balanceSheetTotalTrend: 11.4,
    netProfit: 2.1,
    netProfitTrend: 18.2,
    ebitda: 2.7,
    revenue: 16.4,
    equityRatio: 58.2,
    financialHistory: [
      { year: 2020, revenue: 10.8, balanceTotal: 7.9, profit: 1.2, ebitda: 1.6, employees: 64 },
      { year: 2021, revenue: 12.1, balanceTotal: 8.8, profit: 1.4, ebitda: 1.9, employees: 70 },
      { year: 2022, revenue: 13.9, balanceTotal: 9.9, profit: 1.7, ebitda: 2.2, employees: 76 },
      { year: 2023, revenue: 15.2, balanceTotal: 10.7, profit: 1.9, ebitda: 2.5, employees: 81 },
      { year: 2024, revenue: 16.4, balanceTotal: 11.8, profit: 2.1, ebitda: 2.7, employees: 85 }
    ],
    mediaRating: 4.8,
    mediaRatingTrend: 'up',
    mediaSummary: 'Technologieführer bei optischer 3D-Inline-Inspektion für Halbleiter & Batteriefertigung. Exzellente Patente im Bereich Time-of-Flight Lasersensorik.',
    newsItems: [
      { date: '18.01.2026', source: 'Elektronik Praxis', headline: 'OptiSens stellt ultrakompakten LiDAR-Distanzsensor mit 0.1 µm Auflösung vor', sentiment: 'positive' }
    ],
    keyClients: ['Infineon Technologies', 'ASML Partner Ecosystem', 'KLA Tencor Germany', 'Siemens Digital Industries'],
    certifications: ['ISO 9001:2015', 'ATEX Explosionsschutz', 'CE / UL Zertifizierungen'],
    shareholdings: [
      { entity: 'OptiSens USA Inc.', type: 'subsidiary', share: '100%', jurisdiction: 'San Jose, CA, USA' }
    ],
    successionScore: 'MEDIUM',
    successionReason: 'Beide Gründer um die 60 Jahre. Offen für Mehrheitsübernahme durch strategischen Konzern oder Wachstums-Investor zur US-Skalierung.',
    website: 'https://optisens-sensorik.de',
    phone: '+49 6151 4490-0',
    email: 'info@optisens-sensorik.de',
    watchlistStatus: false,
    crmExported: false
  },
  {
    id: 'COMP-4310',
    name: 'Kühn Thermotechnik & Kälteanlagen GmbH & Co. KG',
    legalForm: 'GmbH & Co. KG',
    foundingYear: 1984,
    age: 42,
    state: 'Bayern',
    city: 'Nürnberg',
    postalCode: '90441',
    address: 'Dieselstraße 45',
    employeeCount: 160,
    employeeBracket: '50-199',
    industry: 'HVAC, Kältetechnik & Wärmepumpen',
    wzCode: 'C 28.25',
    wzDescription: 'Herstellung von kälte- und lufttechnischen Erzeugnissen',
    hrNumber: 'HRA 11284',
    court: 'Amtsgericht Nürnberg',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRA11284',
    owners: [
      { name: 'Hans-Joachim Kühn', age: 69, sharePercentage: 100, role: 'Alleininhaber & Geschäftsführer', isSuccessionCandidate: true }
    ],
    managingDirectors: [
      { name: 'Hans-Joachim Kühn', age: 69, title: 'Geschäftsführender Gesellschafter', sinceYear: 1984, email: 'hj.kuehn@kuehn-thermotechnik.de', phone: '+49 911 8120-10' },
      { name: 'Ingo Brandner', age: 54, title: 'Leiter Service & Kundendienst', sinceYear: 2015, email: 'i.brandner@kuehn-thermotechnik.de', phone: '+49 911 8120-30' }
    ],
    balanceSheetTotal: 22.0,
    balanceSheetTotalTrend: 4.8,
    netProfit: 2.7,
    netProfitTrend: 6.2,
    ebitda: 3.5,
    revenue: 28.5,
    equityRatio: 44.5,
    financialHistory: [
      { year: 2020, revenue: 21.0, balanceTotal: 17.5, profit: 1.9, ebitda: 2.6, employees: 140 },
      { year: 2021, revenue: 23.2, balanceTotal: 18.8, profit: 2.2, ebitda: 2.9, employees: 146 },
      { year: 2022, revenue: 25.4, balanceTotal: 20.1, profit: 2.4, ebitda: 3.1, employees: 152 },
      { year: 2023, revenue: 27.1, balanceTotal: 21.2, profit: 2.6, ebitda: 3.3, employees: 156 },
      { year: 2024, revenue: 28.5, balanceTotal: 22.0, profit: 2.7, ebitda: 3.5, employees: 160 }
    ],
    mediaRating: 4.2,
    mediaRatingTrend: 'neutral',
    mediaSummary: 'Hohe Marktstellung im fränkischen Gewerbe- und Industriekälte-Segment. Starke wiederkehrende Service- und Wartungsverträge (>40% Umsatzanteil).',
    newsItems: [
      { date: '10.12.2025', source: 'Kälte Klima Aktuell', headline: 'Kühn Thermotechnik rüstet Großkühlhaus im Nürnberger Hafen auf CO2-Kältemittel um', sentiment: 'positive' }
    ],
    keyClients: ['EDEKA Nordbayern', 'Universitätsklinikum Erlangen', 'Datev eG Rechenzentren', 'NürnbergMesse GmbH'],
    certifications: ['WHG § 19 l Fachbetrieb', 'Zertifizierter Kälte-Klima-Fachbetrieb nach ChemKlimaschutzV', 'ISO 9001'],
    shareholdings: [
      { entity: 'Kühn Verwaltungs GmbH', type: 'holding', share: 'Komplementärin (100%)', jurisdiction: 'Nürnberg, Deutschland' },
      { entity: 'Kühn Service & Wartung GmbH', type: 'subsidiary', share: '100%', jurisdiction: 'Deutschland' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Inhaber (69 Jahre) plant vollständigen Rückzug aus Altersgründen innerhalb der nächsten 12 Monate. 100% Anteile stehen zur Disposition.',
    website: 'https://kuehn-thermotechnik.de',
    phone: '+49 911 8120-0',
    email: 'zentrale@kuehn-thermotechnik.de',
    watchlistStatus: true,
    crmExported: true
  },
  {
    id: 'COMP-3021',
    name: 'Nordic Flow Systems AG',
    legalForm: 'AG',
    foundingYear: 2002,
    age: 24,
    state: 'Schleswig-Holstein',
    city: 'Lübeck',
    postalCode: '23556',
    address: 'Kanalstraße 18-20',
    employeeCount: 95,
    employeeBracket: '50-199',
    industry: 'Pumpen- & Strömungstechnik',
    wzCode: 'C 28.13',
    wzDescription: 'Herstellung von Pumpen und Kompressoren',
    hrNumber: 'HRB 8821 HL',
    court: 'Amtsgericht Lübeck',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB8821HL',
    owners: [
      { name: 'Dr. Jens Holgersen', age: 63, sharePercentage: 70, role: 'Vorstandsvorsitzender & Hauptaktionär', isSuccessionCandidate: true },
      { name: 'NordCapital Family Office', age: 55, sharePercentage: 30, role: 'Finanzinvestor', isSuccessionCandidate: false }
    ],
    managingDirectors: [
      { name: 'Dr. Jens Holgersen', age: 63, title: 'Vorstandsvorsitzender (CEO)', sinceYear: 2002, email: 'j.holgersen@nordic-flow.de', phone: '+49 451 980-11' },
      { name: 'Sönke Peters', age: 46, title: 'Vorstand Finanzen & Vertrieb (CFO)', sinceYear: 2021, email: 's.peters@nordic-flow.de', phone: '+49 451 980-15' }
    ],
    balanceSheetTotal: 14.1,
    balanceSheetTotalTrend: 6.8,
    netProfit: 1.9,
    netProfitTrend: 10.5,
    ebitda: 2.6,
    revenue: 20.4,
    equityRatio: 56.0,
    financialHistory: [
      { year: 2020, revenue: 15.0, balanceTotal: 10.9, profit: 1.2, ebitda: 1.7, employees: 80 },
      { year: 2021, revenue: 16.5, balanceTotal: 11.8, profit: 1.4, ebitda: 2.0, employees: 84 },
      { year: 2022, revenue: 18.0, balanceTotal: 12.6, profit: 1.6, ebitda: 2.3, employees: 88 },
      { year: 2023, revenue: 19.3, balanceTotal: 13.4, profit: 1.8, ebitda: 2.4, employees: 92 },
      { year: 2024, revenue: 20.4, balanceTotal: 14.1, profit: 1.9, ebitda: 2.6, employees: 95 }
    ],
    mediaRating: 4.3,
    mediaRatingTrend: 'up',
    mediaSummary: 'Spezialanbieter für korrosionsbeständige Industriepumpen in der maritimen Industrie und Chemie. Stabiles Wachstum und hohe Exportquote nach Skandinavien.',
    newsItems: [
      { date: '11.02.2026', source: 'Schiff & Hafen', headline: 'Nordic Flow stattet 6 Hybrid-Containerschiffe mit energieeffizienten Ballastwasserpumpen aus', sentiment: 'positive' }
    ],
    keyClients: ['Meyer Werft Papenburg', 'Wärtsilä Marine', 'BASF Werk Ludwigshafen', 'Aurubis AG Hamburg'],
    certifications: ['DNV-GL Marine Type Approval', 'ISO 9001:2015', 'ATEX Zone 1/2'],
    shareholdings: [
      { entity: 'Nordic Flow Danmark ApS', type: 'subsidiary', share: '100%', jurisdiction: 'Kopenhagen, Dänemark' }
    ],
    successionScore: 'MEDIUM',
    successionReason: 'CEO (63) beabsichtigt mittelfristige Übergabe an externen CEO oder Gesamtverkauf im Schulterschluss mit dem 30% Minderheitsinvestor.',
    website: 'https://nordic-flow-systems.de',
    phone: '+49 451 980-0',
    email: 'info@nordic-flow.de',
    watchlistStatus: false,
    crmExported: false
  },
  {
    id: 'COMP-1198',
    name: 'AeroMech Precision Components GmbH',
    legalForm: 'GmbH',
    foundingYear: 1991,
    age: 35,
    state: 'Bayern',
    city: 'Donauwörth',
    postalCode: '86609',
    address: 'Flugplatzstraße 7',
    employeeCount: 195,
    employeeBracket: '50-199',
    industry: 'Luft- & Raumfahrt Zulieferer',
    wzCode: 'C 30.30',
    wzDescription: 'Luft- und Raumfahrzeugbau & Komponentenfertigung',
    hrNumber: 'HRB 18920',
    court: 'Amtsgericht Augsburg',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB18920',
    owners: [
      { name: 'Dr. Walter Neumeier', age: 68, sharePercentage: 80, role: 'Mehrheitsgesellschafter', isSuccessionCandidate: true },
      { name: 'Sabine Neumeier-Bauer', age: 41, sharePercentage: 20, role: 'Minderheitsgesellschafterin', isSuccessionCandidate: false }
    ],
    managingDirectors: [
      { name: 'Dr. Walter Neumeier', age: 68, title: 'CEO', sinceYear: 1991, email: 'w.neumeier@aeromech.de', phone: '+49 906 7780-10' },
      { name: 'Jürgen Kraemer', age: 56, title: 'COO / Leitung Luftfahrtzertifizierung', sinceYear: 2014, email: 'j.kraemer@aeromech.de', phone: '+49 906 7780-25' }
    ],
    balanceSheetTotal: 31.2,
    balanceSheetTotalTrend: 8.5,
    netProfit: 4.1,
    netProfitTrend: 15.3,
    ebitda: 5.6,
    revenue: 44.8,
    equityRatio: 51.5,
    financialHistory: [
      { year: 2020, revenue: 31.5, balanceTotal: 23.4, profit: 2.6, ebitda: 3.8, employees: 165 },
      { year: 2021, revenue: 35.0, balanceTotal: 25.8, profit: 3.1, ebitda: 4.3, employees: 175 },
      { year: 2022, revenue: 39.2, balanceTotal: 27.9, profit: 3.5, ebitda: 4.9, employees: 182 },
      { year: 2023, revenue: 42.1, balanceTotal: 29.4, profit: 3.8, ebitda: 5.2, employees: 190 },
      { year: 2024, revenue: 44.8, balanceTotal: 31.2, profit: 4.1, ebitda: 5.6, employees: 195 }
    ],
    mediaRating: 4.7,
    mediaRatingTrend: 'up',
    mediaSummary: 'Tier-1 Lieferant für Hubschrauber-Strukturbauteile und Triebwerksgehäuse. Hohe Eintrittsbarrieren durch EN 9100 Zulassung und qualifizierte Sonderprozesse.',
    newsItems: [
      { date: '02.02.2026', source: 'Flug Revue Business', headline: 'Airbus Helicopters zeichnet AeroMech als Preferred Supplier of the Year aus', sentiment: 'positive' }
    ],
    keyClients: ['Airbus Helicopters Deutschland', 'MTU Aero Engines', 'Liebherr Aerospace', 'Diehl Aviation'],
    certifications: ['EN 9100:2018 (Luftfahrt)', 'NADCAP NonDestructive Testing & Chemical Processing', 'ISO 14001'],
    shareholdings: [
      { entity: 'AeroMech Surface Technologies GmbH', type: 'subsidiary', share: '100%', jurisdiction: 'Deutschland' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Gründer (68 Jahre) sucht strategischen Investor oder PE-Käufer, der das starke internationale Wachstum im Defence & Aerospace Sektor finanzieren kann.',
    website: 'https://aeromech-precision.de',
    phone: '+49 906 7780-0',
    email: 'info@aeromech.de',
    watchlistStatus: false,
    crmExported: false
  },
  {
    id: 'COMP-9082',
    name: 'Dr. Weiland Kunststofftechnik GmbH',
    legalForm: 'GmbH',
    foundingYear: 1981,
    age: 45,
    state: 'Bayern',
    city: 'Coburg',
    postalCode: '96450',
    address: 'Graf-Zeppelin-Straße 11',
    employeeCount: 130,
    employeeBracket: '50-199',
    industry: 'Kunststoff- & Spritzgusstechnik',
    wzCode: 'C 22.29',
    wzDescription: 'Herstellung von sonstigen Kunststoffwaren',
    hrNumber: 'HRB 2419',
    court: 'Amtsgericht Coburg',
    registerUrl: 'https://www.unternehmensregister.de/ureg/result.html?id=HRB2419',
    owners: [
      { name: 'Dr. Ulrich Weiland', age: 71, sharePercentage: 100, role: 'Alleingesellschafter', isSuccessionCandidate: true }
    ],
    managingDirectors: [
      { name: 'Dr. Ulrich Weiland', age: 71, title: 'Geschäftsführer', sinceYear: 1981, email: 'u.weiland@weiland-kunststoff.de', phone: '+49 9561 740-10' },
      { name: 'Corinna Seidel', age: 49, title: 'Prokuristin & Kaufmännische Leitung', sinceYear: 2011, email: 'c.seidel@weiland-kunststoff.de', phone: '+49 9561 740-18' }
    ],
    balanceSheetTotal: 17.8,
    balanceSheetTotalTrend: 3.2,
    netProfit: 2.4,
    netProfitTrend: 5.1,
    ebitda: 3.1,
    revenue: 22.5,
    equityRatio: 61.2,
    financialHistory: [
      { year: 2020, revenue: 19.0, balanceTotal: 15.2, profit: 2.0, ebitda: 2.6, employees: 122 },
      { year: 2021, revenue: 20.1, balanceTotal: 16.0, profit: 2.1, ebitda: 2.7, employees: 125 },
      { year: 2022, revenue: 21.2, balanceTotal: 16.8, profit: 2.3, ebitda: 2.9, employees: 128 },
      { year: 2023, revenue: 21.9, balanceTotal: 17.3, profit: 2.3, ebitda: 3.0, employees: 129 },
      { year: 2024, revenue: 22.5, balanceTotal: 17.8, profit: 2.4, ebitda: 3.1, employees: 130 }
    ],
    mediaRating: 4.1,
    mediaRatingTrend: 'neutral',
    mediaSummary: 'Sehr gesunde Bilanzstruktur und schuldenfrei. Spezialisiert auf hochpräzise Mehrkomponenten-Spritzgussteile für Medizingerätegehäuse und Industrieelektronik.',
    newsItems: [
      { date: '19.12.2025', source: 'K-Zeitung', headline: 'Weiland investiert in vollelektrische Spritzgussmaschinen der neuen Generation', sentiment: 'positive' }
    ],
    keyClients: ['Brose Fahrzeugteile', 'Drägerwerk AG', 'Rosenberger Hochfrequenztechnik', 'WAGO Kontakttechnik'],
    certifications: ['IATF 16949:2016', 'ISO 9001:2015', 'ISO 50001 Energiemanagement'],
    shareholdings: [
      { entity: 'Weiland Immobilien GbR', type: 'sister', share: '100%', jurisdiction: 'Coburg, Deutschland' }
    ],
    successionScore: 'CRITICAL_HIGH',
    successionReason: 'Inhaber ist 71 Jahre alt, kinderlos. Übernahmegespräche für vollständige Firmenübernahme inklusive Betriebsimmobilie werden aktiv gesucht.',
    website: 'https://weiland-kunststofftechnik.de',
    phone: '+49 9561 740-0',
    email: 'zentrale@weiland-kunststoff.de',
    watchlistStatus: false,
    crmExported: false
  }
];
