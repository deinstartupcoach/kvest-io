import React, { useState } from 'react';
import { FinancialYear } from '../../types';
import { BarChart3 } from 'lucide-react';

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
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs">
      <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <BarChart3 size={16} className="text-[#1677FF]" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1633]">
            Finanzielle Entwicklung (5-Jahres-Verlauf in Mio. €)
          </h4>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-700">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#0B1633]"></span> Bilanzsumme
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#10B981]"></span> Bilanzgewinn
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-[#6366F1]"></span> EBITDA
          </span>
        </div>
      </div>

      {/* Bar Chart Bars */}
      <div className="h-52 flex items-end justify-between gap-3 pt-6 pb-2 px-4 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
        {financialHistory.map((item) => {
          const isHovered = hoveredYear === item.year;
          const balanceHeight = (item.balanceTotal / maxBalance) * 140;
          const profitHeight = (item.profit / maxBalance) * 140 * 3.2;
          const ebitdaHeight = (item.ebitda / maxBalance) * 140 * 2.4;

          return (
            <div
              key={item.year}
              className="flex-1 flex flex-col items-center gap-2 relative group cursor-pointer"
              onMouseEnter={() => setHoveredYear(item.year)}
              onMouseLeave={() => setHoveredYear(null)}
            >
              {/* Tooltip on Hover */}
              {isHovered && (
                <div className="absolute -top-20 z-30 bg-white border border-slate-300 p-2.5 rounded shadow-lg text-left min-w-[150px] pointer-events-none">
                  <div className="font-bold text-xs text-slate-900 border-b border-slate-200 pb-1 mb-1 font-mono">
                    Geschäftsjahr {item.year}
                  </div>
                  <div className="text-[11px] text-slate-600 flex justify-between">
                    <span>Umsatz:</span>
                    <span className="font-mono font-bold text-slate-900">{item.revenue.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-[#1677FF] flex justify-between">
                    <span>Bilanzsumme:</span>
                    <span className="font-mono font-bold">{item.balanceTotal.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 flex justify-between">
                    <span>Bilanzgewinn:</span>
                    <span className="font-mono font-bold">{item.profit.toFixed(1)} Mio. €</span>
                  </div>
                  <div className="text-[11px] text-slate-700 flex justify-between">
                    <span>Mitarbeiter:</span>
                    <span className="font-mono font-bold">{item.employees} MA</span>
                  </div>
                </div>
              )}

              {/* Grouped Bars */}
              <div className="w-full flex items-end justify-center gap-1.5 h-[140px]">
                <div
                  style={{ height: `${balanceHeight}px` }}
                  className={`w-4 bg-[#0B1633] rounded-t-xs transition-all ${
                    isHovered ? 'bg-[#1677FF]' : ''
                  }`}
                ></div>
                <div
                  style={{ height: `${profitHeight}px` }}
                  className={`w-3 bg-[#10B981] rounded-t-xs transition-all ${
                    isHovered ? 'bg-emerald-400' : ''
                  }`}
                ></div>
                <div
                  style={{ height: `${ebitdaHeight}px` }}
                  className={`w-3 bg-[#6366F1] rounded-t-xs transition-all ${
                    isHovered ? 'bg-indigo-400' : ''
                  }`}
                ></div>
              </div>

              {/* Year Label */}
              <span className={`text-xs font-mono font-medium ${isHovered ? 'text-[#1677FF] font-bold' : 'text-slate-600'}`}>
                {item.year}
              </span>
            </div>
          );
        })}
      </div>

      {/* KPI Cards under Chart */}
      <div className="grid grid-cols-4 gap-3 mt-3">
        <div className="p-2.5 bg-[#F8FAFC] rounded border border-slate-200">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Eigenkapitalquote</span>
          <span className="text-sm font-mono font-bold text-emerald-800">{equityRatio}%</span>
        </div>
        <div className="p-2.5 bg-[#F8FAFC] rounded border border-slate-200">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Umsatzrentabilität</span>
          <span className="text-sm font-mono font-bold text-[#1677FF]">
            {((financialHistory[financialHistory.length - 1].profit / financialHistory[financialHistory.length - 1].revenue) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="p-2.5 bg-[#F8FAFC] rounded border border-slate-200">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">EBITDA Marge</span>
          <span className="text-sm font-mono font-bold text-indigo-900">
            {((financialHistory[financialHistory.length - 1].ebitda / financialHistory[financialHistory.length - 1].revenue) * 100).toFixed(1)}%
          </span>
        </div>
        <div className="p-2.5 bg-[#F8FAFC] rounded border border-slate-200">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Umsatz pro Kopf</span>
          <span className="text-sm font-mono font-bold text-slate-800">
            {Math.round((financialHistory[financialHistory.length - 1].revenue * 1000000) / financialHistory[financialHistory.length - 1].employees).toLocaleString('de-DE')} €
          </span>
        </div>
      </div>
    </div>
  );
};
