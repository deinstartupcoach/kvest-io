import React, { useState } from 'react';
import { Upload, CheckCircle2, X } from 'lucide-react';

interface PdfUploadParserProps {
  promptText: string;
  onPromptChange: (text: string) => void;
  onApplyParsedFilters: (data: {
    targetRole?: string;
    industry?: string;
    minLeadershipYears?: number;
    minExperienceYears?: number;
  }) => void;
}

export const PdfUploadParser: React.FC<PdfUploadParserProps> = ({
  promptText,
  onPromptChange,
  onApplyParsedFilters
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [parsedData, setParsedData] = useState<{
    role: string;
    industry: string;
    leadership: number;
    exp: number;
    skills: string[];
  } | null>(null);

  const simulateUpload = (fileName: string) => {
    setUploadedFile(fileName);
    setIsParsing(true);
    setTimeout(() => {
      setIsParsing(false);
      const sampleParsed = {
        role: 'Chief Operating Officer (COO) / CEO-Nachfolge',
        industry: 'Maschinenbau & Präzisionstechnik',
        leadership: 10,
        exp: 18,
        skills: ['P&L Verantwortung >30M€', 'Shopfloor Transformation', 'SAP S/4HANA']
      };
      setParsedData(sampleParsed);
      onPromptChange(
        `Gesucht: ${sampleParsed.role} für mittelständischen ${sampleParsed.industry} mit mind. ${sampleParsed.leadership} Jahren Führungserfahrung.`
      );
      onApplyParsedFilters({
        targetRole: 'COO',
        industry: 'Maschinenbau',
        minLeadershipYears: 10,
        minExperienceYears: 18
      });
    }, 1000);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0].name);
    }
  };

  return (
    <div className="bg-[#E9DFCF]/25 border border-[#D8CCB9]/80 rounded-lg p-4 shadow-2xs space-y-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
        {/* Left: Free text prompt */}
        <div className="lg:col-span-7 flex flex-col">
          <label className="text-xs font-bold text-[#0B1633] mb-1">
            Such-Briefing &amp; Freitext-Anforderung:
          </label>
          <div className="relative flex-1">
            <textarea
              value={promptText}
              onChange={(e) => onPromptChange(e.target.value)}
              rows={2}
              placeholder="z.B. Erfahrener CEO / Nachfolge-Kandidat für mittelständischen Maschinenbauer mit Turnaround-Erfahrung..."
              className="w-full h-full p-2.5 bg-white/90 focus:bg-white border border-[#D8CCB9] focus:border-[#0B1633] rounded text-xs text-slate-900 placeholder:text-slate-500 outline-none resize-none leading-relaxed"
            />
          </div>
          <div className="flex items-center gap-2 mt-1.5 flex-wrap text-[11px]">
            <span className="text-slate-600 font-semibold">Vorschläge:</span>
            <button
              onClick={() => {
                const text = 'CEO / Nachfolge-Kandidat im Sondermaschinenbau mit P&L-Verantwortung in Baden-Württemberg (MBI)';
                onPromptChange(text);
                onApplyParsedFilters({ targetRole: 'CEO', minLeadershipYears: 12, minExperienceYears: 20 });
              }}
              className="text-[#0B1633] bg-white/90 hover:bg-white px-2 py-0.5 rounded border border-[#D8CCB9] transition-colors font-medium shadow-2xs"
            >
              MBI-Nachfolger Maschinenbau
            </button>
            <button
              onClick={() => {
                const text = 'CFO mit Private Equity Erfahrung, Post-Merger Integration und Konsortialkrediten';
                onPromptChange(text);
                onApplyParsedFilters({ targetRole: 'CFO', minLeadershipYears: 8, minExperienceYears: 15 });
              }}
              className="text-[#0B1633] bg-white/90 hover:bg-white px-2 py-0.5 rounded border border-[#D8CCB9] transition-colors font-medium shadow-2xs"
            >
              PE-erfahrener CFO
            </button>
          </div>
        </div>

        {/* Right: PDF Upload */}
        <div className="lg:col-span-5 flex flex-col">
          <label className="text-xs font-bold text-[#0B1633] mb-1">
            Stellenprofil (PDF) hochladen:
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => simulateUpload('Anforderungsprofil_CEO_2026.pdf')}
            className={`flex-1 border border-dashed rounded p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
              isDragging
                ? 'border-[#0B1633] bg-white'
                : uploadedFile
                ? 'border-emerald-400 bg-emerald-50/80'
                : 'border-[#D8CCB9] hover:border-[#0B1633] bg-white/80 hover:bg-white'
            }`}
          >
            {isParsing ? (
              <div className="flex flex-col items-center gap-1.5 py-1">
                <div className="w-5 h-5 border-2 border-[#0B1633] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-mono text-[#0B1633]">PDF wird analysiert...</span>
              </div>
            ) : uploadedFile ? (
              <div className="space-y-1 text-left w-full px-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
                    <CheckCircle2 size={14} />
                    <span className="truncate max-w-[180px]">{uploadedFile}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedFile(null);
                      setParsedData(null);
                    }}
                    className="text-slate-400 hover:text-black"
                  >
                    <X size={13} />
                  </button>
                </div>
                {parsedData && (
                  <div className="text-[11px] text-slate-700 bg-white p-1.5 rounded border border-emerald-200">
                    <div>Zielrolle: <strong>{parsedData.role}</strong></div>
                    <div>Führung: <strong className="text-[#0B1633]">{parsedData.leadership}+ Jahre</strong></div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1 py-1">
                <Upload size={18} className="text-[#5B534A]" />
                <span className="text-xs font-semibold text-slate-800">
                  PDF hier ablegen oder <span className="text-[#0B1633] underline">auswählen</span>
                </span>
                <span className="text-[10px] text-slate-500">
                  Extrahiert Qualifikationen und Rollenanforderungen automatisch
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
