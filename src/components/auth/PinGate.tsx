import React, { useState, useEffect, useRef } from 'react';
import { Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface PinGateProps {
  onUnlock: () => void;
}

export const PinGate: React.FC<PinGateProps> = ({ onUnlock }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pin === '0871') {
      sessionStorage.setItem('kvest_auth', 'true');
      onUnlock();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPin('');
      inputRef.current?.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setPin(val);
    if (error) setError(false);
    if (val === '0871') {
      sessionStorage.setItem('kvest_auth', 'true');
      onUnlock();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#070E22] overflow-hidden selection:bg-[#1677FF] selection:text-white">
      {/* Background Radial Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(22,119,255,0.18)_0%,rgba(11,22,51,0.95)_60%,#070E22_100%)] pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#1677FF]/10 blur-[120px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Main Lock Card */}
      <div
        className={`relative z-10 w-full max-w-sm mx-4 bg-[#0B1633]/90 backdrop-blur-xl border border-[#1F3163] p-8 rounded-2xl shadow-2xl text-center flex flex-col items-center transition-transform duration-200 ${
          isShaking ? 'translate-x-[-10px] animate-shake' : ''
        }`}
      >
        {/* Brand Logo */}
        <div className="mb-6">
          <img
            src="/assets/kvest-logo-white-with-emblem.png"
            alt="kvest.io"
            className="h-10 w-auto object-contain mx-auto drop-shadow-md"
          />
        </div>

        <div className="space-y-1 mb-6">
          <h2 className="text-sm font-bold text-white tracking-wide uppercase">
            Private Access Gate
          </h2>
          <p className="text-xs text-slate-400">
            Bitte 4-stelligen Zugangscode eingeben
          </p>
        </div>

        {/* PIN Input Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <input
              ref={inputRef}
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={handleChange}
              placeholder="••••"
              className={`w-full text-center text-2xl font-mono tracking-[0.5em] py-3 px-4 bg-[#070E22] border rounded-xl text-white outline-none transition-all ${
                error
                  ? 'border-rose-500 bg-rose-950/20 text-rose-300 focus:border-rose-500'
                  : 'border-[#1F3163] focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF]'
              }`}
            />
          </div>

          {error && (
            <div className="flex items-center justify-center gap-1.5 text-xs text-rose-400 font-medium">
              <AlertCircle size={13} />
              <span>Ungültiger Code. Bitte erneut versuchen.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-[#1677FF] hover:bg-blue-600 active:scale-[0.98] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Zugang entsperren</span>
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Footer Meta Note */}
        <div className="mt-8 pt-4 border-t border-[#162750] w-full flex items-center justify-center gap-2 text-[11px] text-slate-400 font-mono">
          <ShieldCheck size={13} className="text-[#69B8FF]" />
          <span>M&amp;A Intelligence Workstation</span>
        </div>
      </div>
    </div>
  );
};
