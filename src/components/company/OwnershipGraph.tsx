import React, { useState } from 'react';
import { Company } from '../../types';
import { Share2, Layers, AlertCircle } from 'lucide-react';

interface OwnershipGraphProps {
  company: Company;
}

export const OwnershipGraph: React.FC<OwnershipGraphProps> = ({ company }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('target');

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Share2 size={16} className="text-[#1677FF]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1633]">
            Gesellschafter- &amp; Beteiligungsstruktur (M&amp;A Organigramm)
          </h4>
        </div>
        <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Eigner &gt;60 J. (Nachfolge-Fokus)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0B1633]"></span> Zielgesellschaft
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Tochtergesellschaft
          </span>
        </div>
      </div>

      {/* SVG Canvas for Light Theme */}
      <div className="relative w-full h-[340px] bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] flex items-center justify-center p-4">
        <svg className="w-full h-full" viewBox="0 0 800 320">
          {/* Connection Lines: Owners to Target */}
          {company.owners.map((_, index) => {
            const total = company.owners.length;
            const xPos = total === 1 ? 400 : 260 + (index * (280 / (total - 1 || 1)));
            return (
              <g key={`line-owner-${index}`}>
                <path
                  d={`M ${xPos} 70 L 400 160`}
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                />
                <circle cx={(xPos + 400) / 2} cy="115" r="11" fill="#FFFFFF" stroke="#1677FF" strokeWidth="1.5" />
                <text
                  x={(xPos + 400) / 2}
                  y="119"
                  textAnchor="middle"
                  fill="#1677FF"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {company.owners[index].sharePercentage}%
                </text>
              </g>
            );
          })}

          {/* Connection Lines: Target to Subsidiaries */}
          {company.shareholdings.map((_, index) => {
            const total = company.shareholdings.length;
            const xPos = total === 1 ? 400 : 200 + (index * (400 / (total - 1 || 1)));
            return (
              <g key={`line-sub-${index}`}>
                <path
                  d={`M 400 190 L ${xPos} 260`}
                  stroke="#10B981"
                  strokeWidth="1.5"
                />
                <circle cx={(xPos + 400) / 2} cy="225" r="11" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.5" />
                <text
                  x={(xPos + 400) / 2}
                  y="229"
                  textAnchor="middle"
                  fill="#059669"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {company.shareholdings[index].share}
                </text>
              </g>
            );
          })}

          {/* Top Row: Owners */}
          {company.owners.map((owner, idx) => {
            const total = company.owners.length;
            const xPos = total === 1 ? 400 : 260 + (idx * (280 / (total - 1 || 1)));
            const isSelected = selectedNode === `owner-${idx}`;
            const isSenior = owner.age >= 60;
            return (
              <g
                key={`node-owner-${idx}`}
                transform={`translate(${xPos - 85}, 18)`}
                onClick={() => setSelectedNode(`owner-${idx}`)}
                className="cursor-pointer"
              >
                <rect
                  width="170"
                  height="52"
                  rx="6"
                  fill={isSenior ? '#FFFBEB' : '#FFFFFF'}
                  stroke={isSelected ? '#1677FF' : isSenior ? '#F59E0B' : '#CBD5E1'}
                  strokeWidth={isSelected ? '2' : '1.5'}
                />
                <circle cx="20" cy="26" r="11" fill={isSenior ? '#F59E0B' : '#0B1633'} />
                <text x="20" y="29.5" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
                  {owner.age}
                </text>
                <text x="36" y="22" fill="#0B1633" fontSize="11" fontWeight="bold">
                  {owner.name.length > 18 ? owner.name.substring(0, 16) + '…' : owner.name}
                </text>
                <text x="36" y="37" fill="#64748B" fontSize="9.5">
                  {owner.role || 'Gesellschafter'} • {owner.sharePercentage}%
                </text>
                {owner.isSuccessionCandidate && (
                  <rect x="135" y="6" width="28" height="13" rx="3" fill="#DC2626" />
                )}
                {owner.isSuccessionCandidate && (
                  <text x="149" y="15" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold">
                    EXIT
                  </text>
                )}
              </g>
            );
          })}

          {/* Center: Target Company */}
          <g
            transform="translate(290, 135)"
            onClick={() => setSelectedNode('target')}
            className="cursor-pointer"
          >
            <rect
              width="220"
              height="60"
              rx="8"
              fill="#0B1633"
              stroke="#1677FF"
              strokeWidth="2"
            />
            <text x="110" y="24" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
              {company.name.length > 24 ? company.name.substring(0, 22) + '…' : company.name}
            </text>
            <text x="110" y="39" textAnchor="middle" fill="#69B8FF" fontSize="10" fontWeight="semibold">
              {company.legalForm} • {company.employeeCount} MA • {company.city}
            </text>
            <text x="110" y="51" textAnchor="middle" fill="#E9DFCF" fontSize="9" fontFamily="monospace">
              Bilanz: {company.balanceSheetTotal} Mio. € | Gewinn: {company.netProfit} Mio. €
            </text>
          </g>

          {/* Bottom Row: Subsidiaries */}
          {company.shareholdings.map((holding, idx) => {
            const total = company.shareholdings.length;
            const xPos = total === 1 ? 400 : 200 + (idx * (400 / (total - 1 || 1)));
            const isSelected = selectedNode === `holding-${idx}`;
            return (
              <g
                key={`node-holding-${idx}`}
                transform={`translate(${xPos - 90}, 245)`}
                onClick={() => setSelectedNode(`holding-${idx}`)}
                className="cursor-pointer"
              >
                <rect
                  width="180"
                  height="46"
                  rx="6"
                  fill="#F0FDF4"
                  stroke={isSelected ? '#10B981' : '#A7F3D0'}
                  strokeWidth={isSelected ? '2' : '1.2'}
                />
                <text x="12" y="19" fill="#065F46" fontSize="10.5" fontWeight="bold">
                  {holding.entity.length > 20 ? holding.entity.substring(0, 18) + '…' : holding.entity}
                </text>
                <text x="12" y="33" fill="#047857" fontSize="9">
                  {holding.type.toUpperCase()} • {holding.share} • {holding.jurisdiction}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs text-slate-700">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-[#1677FF]" />
          <span>Nachfolge-Indikation:</span>
          <strong>
            {company.owners.some((o) => o.age >= 60)
              ? `Handlungsbedarf: Ältester Eigner ${Math.max(...company.owners.map((o) => o.age))} Jahre (Mehrheitsbeteiligung).`
              : 'Eignerstruktur stabil / keine akute Nachfolgelücke.'}
          </strong>
        </div>
        <span className="font-mono text-slate-600">
          Handelsregister: {company.hrNumber} ({company.court})
        </span>
      </div>
    </div>
  );
};
