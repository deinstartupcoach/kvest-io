import React, { useState } from 'react';
import { Company } from '../../types';
import { Building2, User, Share2, Layers, AlertCircle, CheckCircle2 } from 'lucide-react';

interface OwnershipGraphProps {
  company: Company;
}

export const OwnershipGraph: React.FC<OwnershipGraphProps> = ({ company }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('target');

  return (
    <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-5 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4 border-b border-[#1F3163]/60 pb-3">
        <div className="flex items-center gap-2">
          <Share2 size={18} className="text-[#1677FF]" />
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E9DFCF]">
            Beteiligungs- & Gesellschafterstruktur (Graph)
          </h4>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Eigner / Natürliche Person (&gt;60 J.)
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1677FF]"></span> Zielgesellschaft
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span> Tochtergesellschaft / Beteiligung
          </span>
        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="relative w-full h-[360px] bg-[#070E22]/90 rounded-lg border border-[#162750] flex items-center justify-center p-4">
        <svg className="w-full h-full" viewBox="0 0 800 320">
          <defs>
            <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1677FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B1633" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0B1633" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0B1633" stopOpacity="0.9" />
            </linearGradient>
            <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#1F3163" />
            </marker>
          </defs>

          {/* Connection Lines */}
          {/* Owners to Center */}
          {company.owners.map((_, index) => {
            const total = company.owners.length;
            const xPos = total === 1 ? 400 : 260 + (index * (280 / (total - 1 || 1)));
            return (
              <g key={`line-owner-${index}`}>
                <path
                  d={`M ${xPos} 70 L 400 160`}
                  stroke="#1677FF"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  strokeOpacity="0.6"
                />
                <circle cx={(xPos + 400) / 2} cy="115" r="10" fill="#0B1633" stroke="#1677FF" strokeWidth="1" />
                <text
                  x={(xPos + 400) / 2}
                  y="118"
                  textAnchor="middle"
                  fill="#69B8FF"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {company.owners[index].sharePercentage}%
                </text>
              </g>
            );
          })}

          {/* Center to Subsidiaries */}
          {company.shareholdings.map((_, index) => {
            const total = company.shareholdings.length;
            const xPos = total === 1 ? 400 : 200 + (index * (400 / (total - 1 || 1)));
            return (
              <g key={`line-sub-${index}`}>
                <path
                  d={`M 400 180 L ${xPos} 260`}
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                />
                <circle cx={(xPos + 400) / 2} cy="220" r="10" fill="#0B1633" stroke="#10B981" strokeWidth="1" />
                <text
                  x={(xPos + 400) / 2}
                  y="223"
                  textAnchor="middle"
                  fill="#34D399"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {company.shareholdings[index].share}
                </text>
              </g>
            );
          })}

          {/* Top Layer: Owners */}
          {company.owners.map((owner, idx) => {
            const total = company.owners.length;
            const xPos = total === 1 ? 400 : 260 + (idx * (280 / (total - 1 || 1)));
            const isSelected = selectedNode === `owner-${idx}`;
            return (
              <g
                key={`node-owner-${idx}`}
                transform={`translate(${xPos - 85}, 20)`}
                onClick={() => setSelectedNode(`owner-${idx}`)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <rect
                  width="170"
                  height="54"
                  rx="8"
                  fill={owner.age >= 60 ? 'url(#amberGrad)' : '#0E1A3C'}
                  stroke={isSelected ? '#F59E0B' : owner.age >= 60 ? '#F59E0B' : '#1F3163'}
                  strokeWidth={isSelected ? '2.5' : '1.5'}
                />
                <circle cx="20" cy="27" r="10" fill="#0B1633" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="20" y="30.5" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="bold">
                  {owner.age}
                </text>
                <text x="36" y="22" fill="#E9DFCF" fontSize="11" fontWeight="bold">
                  {owner.name.length > 18 ? owner.name.substring(0, 16) + '…' : owner.name}
                </text>
                <text x="36" y="37" fill="#8A8176" fontSize="9.5">
                  {owner.role || 'Gesellschafter'} • {owner.sharePercentage}%
                </text>
                {owner.isSuccessionCandidate && (
                  <rect x="135" y="6" width="28" height="13" rx="3" fill="#EF4444" opacity="0.9" />
                )}
                {owner.isSuccessionCandidate && (
                  <text x="149" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                    EXIT
                  </text>
                )}
              </g>
            );
          })}

          {/* Center Layer: Target Company */}
          <g
            transform="translate(290, 135)"
            onClick={() => setSelectedNode('target')}
            className="cursor-pointer"
          >
            <rect
              width="220"
              height="62"
              rx="10"
              fill="url(#blueGrad)"
              stroke="#1677FF"
              strokeWidth="2.5"
              className="filter drop-shadow-[0_0_12px_rgba(22,119,255,0.4)]"
            />
            <text x="110" y="24" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
              {company.name.length > 24 ? company.name.substring(0, 22) + '…' : company.name}
            </text>
            <text x="110" y="40" textAnchor="middle" fill="#69B8FF" fontSize="10" fontWeight="600">
              {company.legalForm} • {company.employeeCount} MA • {company.city}
            </text>
            <text x="110" y="53" textAnchor="middle" fill="#E9DFCF" fontSize="9" fontFamily="monospace">
              Bilanz: {company.balanceSheetTotal} Mio. € | Gewinn: {company.netProfit} Mio. €
            </text>
          </g>

          {/* Bottom Layer: Subsidiaries / Holdings */}
          {company.shareholdings.map((holding, idx) => {
            const total = company.shareholdings.length;
            const xPos = total === 1 ? 400 : 200 + (idx * (400 / (total - 1 || 1)));
            const isSelected = selectedNode === `holding-${idx}`;
            return (
              <g
                key={`node-holding-${idx}`}
                transform={`translate(${xPos - 90}, 245)`}
                onClick={() => setSelectedNode(`holding-${idx}`)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <rect
                  width="180"
                  height="48"
                  rx="8"
                  fill="url(#greenGrad)"
                  stroke={isSelected ? '#10B981' : '#1F3163'}
                  strokeWidth={isSelected ? '2' : '1.2'}
                />
                <text x="12" y="20" fill="#E9DFCF" fontSize="10.5" fontWeight="bold">
                  {holding.entity.length > 20 ? holding.entity.substring(0, 18) + '…' : holding.entity}
                </text>
                <text x="12" y="35" fill="#34D399" fontSize="9">
                  {holding.type.toUpperCase()} • {holding.share} • {holding.jurisdiction}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-3 p-3 bg-[#0E1A3C] rounded-lg border border-[#1F3163] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-[#69B8FF]" />
          <span className="text-slate-400">Fokus-Analyse:</span>
          <span className="font-semibold text-[#E9DFCF]">
            {company.owners.some((o) => o.age >= 60)
              ? `Nachfolge-Handlungsbedarf identifiziert: Ältester Eigner ${Math.max(...company.owners.map((o) => o.age))} Jahre.`
              : 'Eignerstruktur stabil / Mehrgenerationen-Führung.'}
          </span>
        </div>
        <span className="font-mono text-[#69B8FF] bg-[#1677FF]/10 px-2 py-0.5 rounded border border-[#1677FF]/30">
          Unternehmensregister: {company.hrNumber} ({company.court})
        </span>
      </div>
    </div>
  );
};
