import React, { useState } from 'react';
import { Upload, FileText, Sparkles, CheckCircle2, ArrowRight, X, AlertCircle } from 'lucide-react';

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
        skills: ['P&L Verantwortung >30M€', 'Shopfloor Transformation', 'SAP S/4HANA', 'Post-Merger Integration']
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
    }, 1200);
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
    <div className="bg-[#0B1633] border border-[#1F3163] rounded-xl p-5 shadow-xl space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles size={18} className="text-[#1677FF]" />
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            AI Requirement Search &amp; PDF Anforderungsprofil-Matching
          </h3>
        </div>
        <span className="text-[11px] font-mono text-[#69B8FF] bg-[#1677FF]/15 px-2 py-0.5 rounded border border-[#1677FF]/30">
          Semantisches Profil-Scoring v2.4
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* Left Column: Natural Language Prompt */}
        <div className="lg:col-span-7 flex flex-col">
          <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
            <span>Freitext-Suchanforderung / Rollen-Briefing:</span>
            <span className="text-[11px] text-slate-400 font-normal">KI analysiert Branchen- &amp; Führungs-KPIs</span>
          </label>
          <div className="relative flex-1">
            <textarea
              value={promptText}
              onChange={(e) => onPromptChange(e.target.value)}
              rows={3}
              placeholder="z.B. Erfahrener CEO / COO für mittelständischen Maschinenbauer mit Turnaround-Erfahrung, Shopfloor-Kompetenz und Kenntnissen in Nachfolgesituationen..."
              className="w-full h-full p-3 bg-[#070E22] border border-[#1F3163] focus:border-[#1677FF] rounded-lg text-xs text-white placeholder:text-slate-500 outline-none resize-none transition-all font-sans leading-relaxed"
            />
          </div>
          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-2 mt-2 flex-wrap text-[11px]">
            <span className="text-slate-400 font-semibold">Beispiel-Briefings:</span>
            <button
              onClick={() => {
                const text = 'CEO / Geschäftsführer mit starkem Industrie-Track-Record für Nachfolgeregelung in Baden-Württemberg (MBI)';
                onPromptChange(text);
                onApplyParsedFilters({ targetRole: 'CEO', minLeadershipYears: 12, minExperienceYears: 20 });
              }}
              className="text-[#69B8FF] bg-[#0E1A3C] hover:bg-[#162750] px-2 py-0.5 rounded border border-[#1F3163] transition-colors"
            >
              MBI-Nachfolger Maschinenbau (BW)
            </button>
            <button
              onClick={() => {
                const text = 'CFO mit Private Equity Erfahrung, Post-Merger Integration und Konsortialkredit-Strukturierung';
                onPromptChange(text);
                onApplyParsedFilters({ targetRole: 'CFO', minLeadershipYears: 8, minExperienceYears: 15 });
              }}
              className="text-[#69B8FF] bg-[#0E1A3C] hover:bg-[#162750] px-2 py-0.5 rounded border border-[#1F3163] transition-colors"
            >
              CFO / PE-Integration
            </button>
          </div>
        </div>

        {/* Right Column: PDF Dropzone & Parsed Output */}
        <div className="lg:col-span-5 flex flex-col">
          <label className="text-xs font-semibold text-slate-300 mb-1.5">
            Stellenbeschreibung (PDF) hochladen:
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => simulateUpload('Anforderungsprofil_CEO_Nachfolge_2026.pdf')}
            className={`flex-1 border-2 border-dashed rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-[#1677FF] bg-[#1677FF]/15'
                : uploadedFile
                ? 'border-emerald-500/50 bg-emerald-950/20'
                : 'border-[#1F3163] hover:border-[#1677FF]/60 bg-[#070E22]/60'
            }`}
          >
            {isParsing ? (
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="w-6 h-6 border-2 border-[#1677FF] border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs font-mono text-[#69B8FF]">PDF wird semantisch extrahiert...</span>
              </div>
            ) : uploadedFile ? (
              <div className="space-y-1.5 text-left w-full px-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                    <CheckCircle2 size={15} />
                    <span className="truncate max-w-[200px]">{uploadedFile}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setUploadedFile(null);
                      setParsedData(null);
                    }}
                    className="text-slate-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                </div>
                {parsedData && (
                  <div className="text-[11px] text-slate-300 space-y-1 bg-[#0B1633] p-2 rounded border border-emerald-500/30">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Extrahierte Zielrolle:</span>
                      <strong className="text-white">{parsedData.role}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Min. Führungserfahrung:</span>
                      <strong className="text-[#69B8FF]">{parsedData.leadership}+ Jahre</strong>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5 py-1">
                <Upload size={20} className="text-[#1677FF]" />
                <span className="text-xs font-semibold text-slate-200">
                  PDF hier ablegen oder <span className="text-[#69B8FF] underline">auswählen</span>
                </span>
                <span className="text-[10px] text-slate-400">
                  Extrahiert Qualifikationen, Branchenkriterien &amp; Gehaltskorridor automatisch
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
