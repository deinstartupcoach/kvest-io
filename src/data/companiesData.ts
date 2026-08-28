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
    mediaSummary: 'Ausgewertete Berichterstattung der letzten 24 Monate: Kontinuierlich positive Berichterstattung über technologische Marktführerschaft bei Titan-Implantaten. Deutliche Hinweise auf anstehenden Gesellschafterwechsel im Südkurier und Handelsblatt. Keine negativen Arbeitsgerichtsprozesse.',
    newsItems: [
      {
        date: '18.01.2026',
        source: 'Handelsblatt',
        headline: 'Mittelstands-Nachfolge im Südwesten: Medizintechnik-Pioniere vor Generationenwechsel',
        author: 'Martin Murphy, Korrespondent Baden-Württemberg',
        publicationUrl: 'https://www.handelsblatt.com/unternehmen/industrie/medizintechnik-vetter-nachfolge-2026',
        fullExcerpt: '„...Unternehmer Dr. Gerhard Vetter (65) bestätigt im Gespräch, dass die Weichen für die Zukunft gestellt werden: Eine familieninterne Nachfolge scheide aus. Ziel sei die Übergabe an einen strategischen Partner oder ein unternehmerisches Management-Team, das den US-Export weiter forciert...“',
        sentiment: 'positive',
        relevanceTag: 'Nachfolge & M&A'
      },
      {
        date: '04.11.2025',
        source: 'Südkurier Wirtschaft',
        headline: 'Vetter Präzision investiert 2,4 Mio. Euro in vollautomatisierte Reinraum-Fertigung',
        author: 'Stefan Hilser',
        publicationUrl: 'https://www.suedkurier.de/region/schwarzwald/villingen-schwenningen/vetter-praezision-investition-2025',
        fullExcerpt: '„...Mit der Inbetriebnahme von vier Fünf-Achs-CNC-Fräszentren sichert Vetter die Fertigung für OEM-Kunden wie Aesculap und Karl Storz. Die Jahreskapazität steigt um 25 Prozent bei gleichzeitiger Senkung der Stückkosten...“',
        sentiment: 'positive',
        relevanceTag: 'Kapazitätserweiterung'
      },
      {
        date: '12.06.2025',
        source: 'WirtschaftsWoche',
        headline: 'Hidden Champions im Profil: Die heimlichen Gewinner der MedTech-Lieferketten',
        author: 'Florian Güßgen',
        publicationUrl: 'https://www.wiwo.de/unternehmen/mittelstand/hidden-champions-vetter-praezision-medtech',
        fullExcerpt: '„...Mit einer Eigenkapitalquote von über 50 Prozent und einer EBITDA-Marge von 15,1 Prozent gehört das Unternehmen aus Villingen-Schwenningen zur Spitzengruppe im deutschen Feinmechanik-Sektor...“',
        sentiment: 'positive',
        relevanceTag: 'Finanzprofil'
      },
      {
        date: '15.02.2025',
        source: 'Bundesanzeiger',
        headline: 'Feststellung des Jahresabschlusses zum 31.12.2024: Bilanzgewinn 2.812.450 EUR',
        author: 'Elektronischer Bundesanzeiger',
        publicationUrl: 'https://www.bundesanzeiger.de/ebanzwww/wexsservlet?id=HRB602819-2024',
        fullExcerpt: '„...Der Jahresüberschuss in Höhe von 2.812 TEUR wird auf neue Rechnung vorgetragen. Die Liquiditätslage ist mit liquiden Mitteln in Höhe von 4,2 Mio. Euro überdurchschnittlich komfortabel...“',
        sentiment: 'neutral',
        relevanceTag: 'Bilanz-Offenlegung'
      }
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
      {
        date: '22.02.2026',
        source: 'Frankfurter Allgemeine Zeitung (FAZ)',
        headline: 'Autonome Fabriken: Fränkischer Fördertechnik-Spezialist rüstet Automobilwerke um',
        author: 'Holger Steltzner',
        publicationUrl: 'https://www.faz.net/aktuell/wirtschaft/unternehmen/hofmann-foerdertechnik-agv-schweinfurt-2026',
        fullExcerpt: '„...Mit 40 fahrerlosen Transportsystemen für ein neues Batteriewerk unterstreicht Hofmann & Söhne die Technologieführerschaft im gehobenen Anlagenbau...“',
        sentiment: 'positive',
        relevanceTag: 'Großauftrag'
      },
      {
        date: '10.11.2025',
        source: 'Main-Post Wirtschaft',
        headline: '40 Jahre Hofmann Fördertechnik: Klaus-Peter Hofmann kündigt mittelfristigen Stabswechsel an',
        author: 'Norbert Steiche',
        publicationUrl: 'https://www.mainpost.de/regional/schweinfurt/hofmann-foerdertechnik-jubilaeum-nachfolge',
        fullExcerpt: '„...Senior-Chef Klaus-Peter Hofmann (67) betonte auf dem Firmenjubiläum, dass der Fortbestand des Standorts Schweinfurt oberste Priorität hat. Die Suche nach einem kapitalkräftigen Mehrheitsgesellschafter läuft...“',
        sentiment: 'positive',
        relevanceTag: 'Nachfolge'
      }
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
    mediaSummary: 'Anerkannter Spezialist für Batterie-Zellmontagelinien und Halbleiter-Handling. Innovationspreis Ostwürttemberg. Stark wachsende Auftragspipelines aus Clean Energy.',
    newsItems: [
      {
        date: '05.02.2026',
        source: 'Produktion.de / VDI Verlag',
        headline: 'Bergmann & Krauss errichtet 4.000 qm Montagehalle für Batteriezell-Produktionsstraßen',
        author: 'Klaus Vollrath',
        publicationUrl: 'https://www.produktion.de/nachrichten/unternehmen/bergmann-krauss-batteriemontage-aalen-2026',
        fullExcerpt: '„...Das Unternehmen profitiert von massiven Investitionen der europäischen Zellfertiger und sichert sich Aufträge bis ins Jahr 2027...“',
        sentiment: 'positive',
        relevanceTag: 'Expansion'
      }
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
      {
        date: '18.01.2026',
        source: 'Elektronik Praxis / Vogel Communications',
        headline: 'OptiSens stellt ultrakompakten LiDAR-Distanzsensor mit 0.1 µm Auflösung vor',
        author: 'Gerd Kucera',
        publicationUrl: 'https://www.elektronikpraxis.de/optisens-lidar-sensor-halbleiter-inline-2026',
        fullExcerpt: '„...Der neue Sensor ermöglicht erstmals die 100-Prozent-Prüfung von Wafern direkt im Bearbeitungszentrum...“',
        sentiment: 'positive',
        relevanceTag: 'Produktneuheit'
      }
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
      {
        date: '10.12.2025',
        source: 'Kälte Klima Aktuell / Hüthig Verlag',
        headline: 'Kühn Thermotechnik rüstet Großkühlhaus im Nürnberger Hafen auf CO2-Kältemittel um',
        author: 'Rainer Schaal',
        publicationUrl: 'https://www.kka-online.info/artikel/kuehn-thermotechnik-co2-kuehlhaus-nuernberg-2025',
        fullExcerpt: '„...Mit modernster transkritischer CO2-Technik senkt Kühn den Energieverbrauch des Logistikzentrums um 30 Prozent...“',
        sentiment: 'positive',
        relevanceTag: 'Projektbericht'
      }
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
  }
];
