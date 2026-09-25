import { Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import heroPersonImg from '../assets/images/hero_person_real_1790357819661.jpg';

export function HeroRealPersonPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[500px]">
      {/* Decorative dynamic geometric accents inspired by official brand identity (Navy & Gold) */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0c2f7c]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Diagonal decorative gold and navy graphic stripes behind photo */}
      <div className="absolute -top-3 -right-3 w-28 h-28 border-r-8 border-t-8 border-amber-500 rounded-tr-3xl pointer-events-none opacity-80" />
      <div className="absolute -bottom-3 -left-3 w-28 h-28 border-l-8 border-b-8 border-[#0c2f7c] rounded-bl-3xl pointer-events-none opacity-80" />

      {/* Main Large Photo Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
        {/* Real Person Photo */}
        <img
          src={heroPersonImg}
          alt="Cliente da Cred Sempre + tranquila e sorridente com seu notebook em casa"
          className="w-full h-auto aspect-[4/4.2] sm:aspect-[4/4.4] object-cover transition-transform duration-700 group-hover:scale-103"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Subtle bottom gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020612]/75 via-transparent to-transparent pointer-events-none" />

        {/* Floating Top Badge: Atendimento Humanizado */}
        <div className="absolute top-4 left-4 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#020612] text-xs font-black shadow-lg border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Pessoas Reais • Atendimento Humano</span>
          </div>
        </div>

        {/* Floating Bottom Card: Tranquilidade & Alívio Financeiro */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-[#020612]/90 backdrop-blur-md text-white p-3.5 sm:p-4 rounded-2xl border border-white/15 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                Vida Financeira Organizada
              </span>
              <span className="text-[11px] text-slate-300 font-medium">
                Sem promessa milagrosa
              </span>
            </div>
            <p className="text-[13px] sm:text-[14px] text-slate-100 font-semibold leading-snug">
              "Encontrei a opção ideal para o meu momento com orientação clara e sem burocracia."
            </p>
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                Correspondente Bacen nº 3.954
              </span>
              <span className="text-amber-400 font-bold">Cred Sempre +</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
