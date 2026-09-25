import { MessageCircle, Calculator, ShieldCheck, UserCheck, CheckCircle2, Zap, Smartphone } from 'lucide-react';
import { HeroRealPersonPhoto } from './HeroRealPersonPhoto';
import { COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';

interface HeroSectionProps {
  onSimulateClick: () => void;
  onOpenQuickChat: () => void;
}

export function HeroSection({ onSimulateClick }: HeroSectionProps) {
  const handleWhatsAppHero = () => {
    const message = "Olá! Gostaria de falar com a Cred Sempre + para conhecer as opções de crédito disponíveis para o meu perfil.";
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative pt-36 pb-16 sm:pt-40 md:pt-48 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-200/70 via-slate-100 to-white border-b border-slate-300"
    >
      {/* Background subtle light ambient glows with deep blue and gold */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, subheadline, CTAs, trust points */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 text-[#020612] text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span>ATENDIMENTO PERSONALIZADO & SEGURO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[52px] md:text-[60px] lg:text-[66px] font-black text-[#020612] tracking-tight leading-[1.08]">
              Crédito do seu jeito
            </h1>

            {/* Subheading: Rápido • Digital • Seguro with modern elegant pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#020612] text-white font-extrabold text-[15px] sm:text-[18px] shadow-sm">
                <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                Rápido
              </span>
              <span className="text-amber-500 font-black text-xl">•</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c2f7c] text-white font-extrabold text-[15px] sm:text-[18px] shadow-sm">
                <Smartphone className="w-4 h-4 text-amber-400" />
                Digital
              </span>
              <span className="text-amber-500 font-black text-xl">•</span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 text-white font-extrabold text-[15px] sm:text-[18px] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-200" />
                Seguro
              </span>
            </div>

            {/* Subtext */}
            <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-slate-800 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold pt-1">
              Consulte as opções disponíveis para o seu perfil com total transparência e faça sua simulação sem compromisso.
            </p>

            {/* Action buttons with high visual contrast */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-3">
              {/* Button: SIMULAR AGORA - Golden Amber */}
              <button
                onClick={onSimulateClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-[16px] sm:text-[17px] text-[#020612] bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-600/30 border-b-2 border-amber-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer min-h-[52px]"
              >
                <Calculator className="w-5 h-5 text-[#020612]" />
                <span>SIMULAR AGORA</span>
              </button>

              {/* Button: FALAR PELO WHATSAPP - WhatsApp Green */}
              <button
                onClick={handleWhatsAppHero}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[16px] sm:text-[17px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-600/25 border-b-2 border-[#1ca34d] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>FALAR PELO WHATSAPP</span>
              </button>
            </div>

            {/* Trust checkmarks list */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-300 text-left text-[14px] sm:text-[15px] text-slate-900 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0c2f7c] shrink-0" />
                <span>Zero taxa antecipada</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0c2f7c] shrink-0" />
                <span>Proteção total LGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Consultor real, sem robô</span>
              </div>
            </div>

            {/* Regulatory transparency note */}
            <p className="text-[13px] text-slate-700 text-center lg:text-left leading-relaxed italic font-medium pt-1">
              *Todas as propostas estão sujeitas à análise cadastral e margem pelas instituições financeiras parceiras. Não cobramos nenhuma taxa prévia de contratação.
            </p>
          </div>

          {/* Right Column: FOTO GRANDE PESSOA REAL */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroRealPersonPhoto />
          </div>
        </div>
      </div>
    </section>
  );
}
