export interface Owner {
  name: string;
  age: number;
  sharePercentage: number;
  role?: string;
  isSuccessionCandidate?: boolean;
}

export interface ManagingDirector {
  name: string;
  age: number;
  title: string;
  sinceYear: number;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
}

export interface FinancialYear {
  year: number;
  revenue: number; // in Mio €
  balanceTotal: number; // in Mio €
  profit: number; // in Mio €
  ebitda: number; // in Mio €
  employees: number;
}

export interface NewsItem {
  date: string;
  source: string;
  headline: string;
  sentiment: 'positive' | 'neutral' | 'negative';
}

export interface Shareholding {
  entity: string;
  type: 'subsidiary' | 'parent' | 'sister' | 'holding';
  share: string;
  jurisdiction: string;
}

export interface Company {
  id: string;
  name: string;
  legalForm: 'GmbH' | 'GmbH & Co. KG' | 'AG' | 'e.K.' | 'KG';
  foundingYear: number;
  age: number;
  state: string; // Bundesland
  city: string;
  postalCode: string;
  address: string;
  employeeCount: number;
  employeeBracket: '10-49' | '50-199' | '200-499' | '500+';
  industry: string;
  wzCode: string; // WZ 2008
  wzDescription: string;
  hrNumber: string;
  court: string;
  registerUrl: string;
  owners: Owner[];
  managingDirectors: ManagingDirector[];
  balanceSheetTotal: number; // Mio €
  balanceSheetTotalTrend: number; // %
  netProfit: number; // Mio €
  netProfitTrend: number; // %
  ebitda: number;
  revenue: number;
  equityRatio: number; // %
  financialHistory: FinancialYear[];
  mediaRating: number; // 1.0 - 5.0
  mediaRatingTrend: 'up' | 'down' | 'neutral';
  mediaSummary: string;
  newsItems: NewsItem[];
  keyClients: string[];
  certifications: string[];
  shareholdings: Shareholding[];
  successionScore: 'CRITICAL_HIGH' | 'MEDIUM' | 'SECURED';
  successionReason: string;
  website: string;
  phone: string;
  email: string;
  watchlistStatus: boolean;
  crmExported: boolean;
}

export interface CareerStation {
  id: string;
  role: string;
  company: string;
  period: string;
  isCurrent: boolean;
  revenueResponsibility?: string;
  teamSize?: string;
  keyAchievements: string[];
  kpiScore: number;
}

export interface EmployerIntelligence {
  companyName: string;
  industry: string;
  employees: number;
  kununuScore: number;
  kununuTrend: 'up' | 'down' | 'stable';
  kununuDetails: string;
  glassdoorSalaryEstimate: string;
  mediaSummary: string;
  revenueTrend: string;
  employeeGrowthYoY: string;
  turnoverRisk: 'High' | 'Medium' | 'Low';
}

export interface Candidate {
  id: string;
  name: string;
  title: string;
  currentRole: string;
  currentCompany: string;
  avatarUrl: string;
  age: number;
  location: string;
  state: string;
  radiusKm: number;
  mobilityDACH: boolean;
  totalExperienceYears: number;
  leadershipExperienceYears: number;
  industryExperienceYears: number;
  targetRoles: string[];
  industries: string[];
  matchScore: number; // 0-100%
  status: 'Offen für Gespräche' | 'Aktiv suchend' | 'Exklusiv gelistet';
  salaryExpectation: {
    min: number; // in €k
    max: number; // in €k
    currency: string;
    packageDetails: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  executiveSummary: string;
  personalInsights: {
    interests: string[];
    leadershipStyle: string;
    personalityTraits: string[];
    socialMediaNotes: string;
    languages: string[];
    education: string[];
  };
  employmentHistory: CareerStation[];
  employerIntelligence: EmployerIntelligence;
  shortlisted: boolean;
}

export type ActiveMockupView = 
  | 'company-list' 
  | 'company-detail' 
  | 'candidate-list' 
  | 'candidate-detail';

export type MainTab = 'companies' | 'candidates' | 'watchlist' | 'intelligence' | 'pipeline' | 'settings';
