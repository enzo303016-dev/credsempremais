import { MessageCircle, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';

interface CtaSectionProps {
  onSimulateClick: () => void;
}

export function CtaSection({ onSimulateClick }: CtaSectionProps) {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de fazer uma simulação de crédito com a Cred Sempre + agora.";
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#020612] via-[#051438] to-[#020612] text-white border-t border-blue-950">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 text-blue-200 border border-blue-800/40 text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Atendimento Ágil e Sem Burocracia</span>
        </div>

        <h2 className="text-[30px] sm:text-[40px] md:text-[46px] font-black tracking-tight leading-tight text-white max-w-3xl mx-auto">
          Pronto para encontrar o crédito ideal para o seu momento?
        </h2>

        <p className="mt-5 text-[17px] sm:text-[19px] md:text-[20px] text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
          Faça sua simulação online em menos de 1 minuto ou fale diretamente com um especialista no WhatsApp. Sem filas e sem taxas antecipadas.
        </p>

        {/* Action Buttons (botões: 16–17px, min-h-[52px]) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onSimulateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-black text-[16px] sm:text-[17px] text-[#020612] bg-amber-500 hover:bg-amber-600 shadow-xl shadow-amber-600/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-b-2 border-amber-800 min-h-[52px]"
          >
            <Calculator className="w-5 h-5 text-[#020612]" />
            <span>SIMULAR AGORA</span>
          </button>

          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-[16px] sm:text-[17px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-xl shadow-emerald-950/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer border-b-2 border-[#1ca34d] min-h-[52px]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>FALAR PELO WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-[#020612]" />
          </button>
        </div>

        {/* Trust disclaimer */}
        <div className="mt-8 text-xs sm:text-[13px] text-slate-400 max-w-xl mx-auto leading-relaxed">
          Atendimento seguro via WhatsApp oficial. Seus dados cadastrais não são compartilhados com empresas não autorizadas.
        </div>
      </div>
    </section>
  );
}
