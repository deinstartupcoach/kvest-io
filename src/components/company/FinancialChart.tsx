import React, { useState } from 'react';
import { FinancialYear } from '../../types';
import { BarChart3, TrendingUp, DollarSign, Users, Award } from 'lucide-react';

interface FinancialChartProps {
  financialHistory: FinancialYear[];
  equityRatio: number;
}

export const FinancialChart: React.FC<FinancialChartProps> = ({
  financialHistory,
  equityRatio
}) => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const maxBalance = Math.max(...financialHistory.map((f) => f.balanceTotal), 35);

  return (
    <div className="bg-[#0A132C] border border-[#1F3163] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4 border-b border-[#1F3163]/60 pb-3">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-[#1677FF]" />
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E9DFCF]">
            Finanzielle Entwicklung (5-Jahres-Verlauf in Mio. €)
          </h4>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-3 h-3 rounded bg-[#1677FF]"></span> Bilanzsumme
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-3 h-3 rounded bg-[#10B981]"></span> Bilanzgewinn
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-3 h-3 rounded bg-[#8B5CF6]"></span> EBITDA
          </span>
        </div>
      </div>

      {/* Bar Chart Bars */}
      <div className="h-56 flex items-end justify-between gap-3 pt-6 pb-2 px-4 bg-[#070E22]/70 rounded-lg border border-[#162750]">
        {financialHistory.map((item) => {
          const isHovered = hoveredYear === item.year;
          const balanceHeight = (item.balanceTotal / maxBalance) * 160;
          const profitHeight = (item.profit / maxBalance) * 160 * 3.2; // visual scaling for profit
          const ebitdaHeight = (item.ebitda / maxBalance) * 160 * 2.4;

          return (
            <div
              key={item.year}
              className="flex-1 flex flex-col items-center gap-2 relative group cursor-pointer"
              onMouseEnter={() => setHoveredYear(item.year)}
              onMouseLeave={() => setHoveredYear(null)}
            >
              {/* Tooltip on Hover */}
              {isHovered && (
                <div className="absolute -top-20 z-30 bg-[#0E1A3C] border border-[#1677FF] p-2.5 rounded-lg shadow-xl text-left min-w-[150px] pointer-events-none animate-fadeIn">
                  <div className="font-bold text-xs text-white border-b border-[#1F3163] pb-1 mb-1">
                    Geschäftsjahr {item.year}
                  </div>
                  <div className="text-[11px] text-slate-300 flex justify-between">
                    <span>Umsatz:</span>
                    <span className="font-mono font-semibold text-white">{item.revenue.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-[#69B8FF] flex justify-between">
                    <span>Bilanzsumme:</span>
                    <span className="font-mono font-semibold">{item.balanceTotal.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-[#34D399] flex justify-between">
                    <span>Bilanzgewinn:</span>
                    <span className="font-mono font-semibold">{item.profit.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-amber-300 flex justify-between">
                    <span>Mitarbeiter:</span>
                    <span className="font-mono font-semibold">{item.employees} MA</span>
                  </div>
                </div>
              )}

              {/* Grouped Bars */}
              <div className="w-full flex items-end justify-center gap-1.5 h-[160px]">
                {/* Balance Total Bar */}
                <div
                  style={{ height: `${balanceHeight}px` }}
                  className={`w-4 bg-gradient-to-t from-[#0B1633] to-[#1677FF] rounded-t-sm transition-all duration-300 ${
                    isHovered ? 'brightness-125 shadow-[0_0_8px_#1677FF]' : ''
                  }`}
                ></div>
                {/* Profit Bar */}
                <div
                  style={{ height: `${profitHeight}px` }}
                  className={`w-3 bg-gradient-to-t from-[#064E3B] to-[#10B981] rounded-t-sm transition-all duration-300 ${
                    isHovered ? 'brightness-125 shadow-[0_0_8px_#10B981]' : ''
                  }`}
                ></div>
                {/* EBITDA Bar */}
                <div
                  style={{ height: `${ebitdaHeight}px` }}
                  className={`w-3 bg-gradient-to-t from-[#4C1D95] to-[#8B5CF6] rounded-t-sm transition-all duration-300 ${
                    isHovered ? 'brightness-125 shadow-[0_0_8px_#8B5CF6]' : ''
                  }`}
                ></div>
              </div>

              {/* Year Label */}
              <span className={`text-xs font-mono font-medium ${isHovered ? 'text-[#1677FF] font-bold' : 'text-slate-400'}`}>
                {item.year}
              </span>
            </div>
          );
        })}
      </div>

      {/* KPI Cards under Chart */}
      <div className="grid grid-cols-4 gap-3 mt-3">
        <div className="p-2.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
          <span className="text-[10px] text-slate-400 block uppercase font-medium">Eigenkapitalquote</span>
          <span className="text-sm font-mono font-bold text-emerald-400">{equityRatio}%</span>
        </div>
        <div className="p-2.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
          <span className="text-[10px] text-slate-400 block uppercase font-medium">Umsatzrentabilität</span>
          <span className="text-sm font-mono font-bold text-[#69B8FF]">
            {((financialHistory[financialHistory.length - 1].profit / financialHistory[financialHistory.length - 1].revenue) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="p-2.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
          <span className="text-[10px] text-slate-400 block uppercase font-medium">EBITDA Marge</span>
          <span className="text-sm font-mono font-bold text-purple-300">
            {((financialHistory[financialHistory.length - 1].ebitda / financialHistory[financialHistory.length - 1].revenue) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="p-2.5 bg-[#0E1A3C] rounded-lg border border-[#1F3163]">
          <span className="text-[10px] text-slate-400 block uppercase font-medium">Umsatz pro Kopf</span>
          <span className="text-sm font-mono font-bold text-amber-300">
            {Math.round((financialHistory[financialHistory.length - 1].revenue * 1000000) / financialHistory[financialHistory.length - 1].employees).toLocaleString('de-DE')} €
          </span>
        </div>
      </div>
    </div>
  );
};
