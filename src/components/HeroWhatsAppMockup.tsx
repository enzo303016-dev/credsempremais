import { useState } from 'react';
import { CheckCheck, MessageCircle, Phone, MoreVertical, Send, ShieldCheck, ArrowRight, Zap, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';

interface HeroWhatsAppMockupProps {
  onSelectProductForSim?: (productId: string) => void;
}

export function HeroWhatsAppMockup() {
  const [activeTab, setActiveTab] = useState<'fgts' | 'energia' | 'consignado'>('fgts');
  const [typing, setTyping] = useState(false);

  // Switch tabs smoothly with typing indicator effect
  const handleTabChange = (tab: 'fgts' | 'energia' | 'consignado') => {
    if (tab === activeTab) return;
    setTyping(true);
    setActiveTab(tab);
    setTimeout(() => {
      setTyping(false);
    }, 450);
  };

  const getClientMessage = () => {
    switch (activeTab) {
      case 'energia':
        return "Olá! Queria saber se consigo crédito debitado na minha conta de energia. Não tenho conta em banco.";
      case 'consignado':
        return "Boa tarde! Sou aposentado do INSS e gostaria de saber as taxas para crédito consignado.";
      case 'fgts':
      default:
        return "Oi, boa tarde! Gostaria de antecipar o meu Saque Aniversário do FGTS. Como funciona?";
    }
  };

  const getAttendantResponse = () => {
    switch (activeTab) {
      case 'energia':
        return {
          text: "Olá! Perfeito! O empréstimo na conta de luz não exige conta em banco e as parcelas vêm na fatura mensal. Temos valores de R$ 500 a R$ 4.000 para consulta imediata.",
          highlight: "Sem conta em banco necessária • Parcelas na fatura",
          badge: "Conta de Energia"
        };
      case 'consignado':
        return {
          text: "Olá! Com certeza! O crédito consignado possui as menores taxas do mercado, com desconto automático e parcelamento em até 96x, mesmo com restrição.",
          highlight: "Menores taxas de juros • Sem consulta SPC/Serasa*",
          badge: "Crédito Consignado INSS"
        };
      case 'fgts':
      default:
        return {
          text: "Olá! Excelente escolha! Você pode antecipar até 10 parcelas do seu FGTS sem comprometer seu salário mensal. O dinheiro cai via PIX em até 2 horas.",
          highlight: "Liberação rápida via PIX • Não afeta seu salário",
          badge: "Antecipação FGTS"
        };
    }
  };

  const currentResponse = getAttendantResponse();

  const handleStartWhatsAppChat = () => {
    const text = `Olá, Cred Sempre +! Vi a simulação de ${currentResponse.badge} no site e gostaria de atendimento especializado.`;
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative mx-auto w-full max-w-[430px] rounded-3xl bg-slate-900/5 p-2.5 sm:p-3 shadow-2xl backdrop-blur-sm border border-slate-200/80">
      {/* Decorative glow behind phone with blue and gold hints */}
      <div className="absolute -inset-1.5 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-600/15 to-amber-500/20 blur-xl opacity-80" />

      {/* Main WhatsApp Phone Frame */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-300 flex flex-col">
        {/* WhatsApp Top Navigation Bar in deep brand navy */}
        <div className="bg-[#020612] text-white px-3.5 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            {/* Avatar with icon and status indicator */}
            <div className="relative">
              <img
                src="/icon.jpg"
                alt="Cred Sempre +"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-500 bg-white"
                onError={(e) => {
                  // Fallback to text initials if icon fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  if (target.nextElementSibling) {
                    (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-[#020612] items-center justify-center text-white font-black text-xs ring-2 ring-amber-500"
              >
                CS+
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#020612] rounded-full" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[15px] sm:text-base leading-tight text-white">
                  Cred Sempre + Oficial
                </span>
                {/* Verified golden checkmark */}
                <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center shrink-0" title="Atendimento Oficial">
                  <Check className="w-2.5 h-2.5 text-[#020612] stroke-[3]" />
                </div>
              </div>
              <span className="text-xs text-blue-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                online agora (Atendente Karina)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-blue-300">
            <button
              onClick={handleStartWhatsAppChat}
              className="p-1 hover:text-white transition-colors"
              title="Ligar ou chamar"
            >
              <Phone className="w-4 h-4" />
            </button>
            <MoreVertical className="w-4 h-4 text-blue-300" />
          </div>
        </div>

        {/* Quick Product Switcher within WhatsApp View */}
        <div className="bg-slate-100 border-b border-slate-300 px-3 py-2.5 flex items-center justify-between text-xs">
          <span className="font-bold text-[#020612] text-xs">Exemplo:</span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handleTabChange('fgts')}
              className={`px-2.5 py-1 rounded-md font-bold text-xs sm:text-[13px] transition-all cursor-pointer ${
                activeTab === 'fgts'
                  ? 'bg-[#0c2f7c] text-white shadow-xs'
                  : 'text-slate-800 hover:text-[#0c2f7c] hover:bg-slate-200'
              }`}
            >
              FGTS
            </button>
            <button
              onClick={() => handleTabChange('energia')}
              className={`px-2.5 py-1 rounded-md font-bold text-xs sm:text-[13px] transition-all cursor-pointer ${
                activeTab === 'energia'
                  ? 'bg-[#0c2f7c] text-white shadow-xs'
                  : 'text-slate-800 hover:text-[#0c2f7c] hover:bg-slate-200'
              }`}
            >
              Conta de Luz
            </button>
            <button
              onClick={() => handleTabChange('consignado')}
              className={`px-2.5 py-1 rounded-md font-bold text-xs sm:text-[13px] transition-all cursor-pointer ${
                activeTab === 'consignado'
                  ? 'bg-[#0c2f7c] text-white shadow-xs'
                  : 'text-slate-800 hover:text-[#0c2f7c] hover:bg-slate-200'
              }`}
            >
              Consignado
            </button>
          </div>
        </div>

        {/* WhatsApp Chat Body */}
        <div className="p-3.5 bg-[#e5ddd5] flex flex-col space-y-3 min-h-[320px] text-xs relative overflow-hidden">
          {/* Watermark / security note inside chat */}
          <div className="self-center bg-[#fef3c7] text-[#92400e] text-[11px] sm:text-xs px-3 py-1 rounded-md shadow-xs flex items-center gap-1.5 border border-[#fde68a]">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-800 shrink-0" />
            <span className="font-semibold">Atendimento oficial verificado • Sem taxas prévias</span>
          </div>

          {/* Client Message (Right bubble) */}
          <div className="self-end max-w-[88%] bg-[#c7ebb1] text-slate-900 rounded-xl rounded-tr-none p-3 shadow-sm border border-emerald-300/40">
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed font-normal">
              {getClientMessage()}
            </p>
            <div className="flex items-center justify-end gap-1 mt-1 text-[11px] text-slate-600 font-medium">
              <span>14:32</span>
              <CheckCheck className="w-3.5 h-3.5 text-blue-700" />
            </div>
          </div>

          {/* Attendant Typing or Response */}
          {typing ? (
            <div className="self-start bg-white text-slate-600 rounded-xl rounded-tl-none p-3 shadow-sm flex items-center gap-1.5 w-24">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:0.4s]" />
            </div>
          ) : (
            <div className="self-start max-w-[90%] bg-white text-slate-900 rounded-xl rounded-tl-none p-3 shadow-sm border border-slate-300 transition-all duration-200">
              <div className="flex items-center gap-1 text-[11px] font-bold text-[#0c2f7c] mb-1">
                <span>Karina • Consultora Cred Sempre +</span>
              </div>
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-slate-900">
                {currentResponse.text}
              </p>

              {/* Dynamic feature snapshot card inside message */}
              <div className="mt-2.5 p-2.5 bg-slate-100 rounded-lg border border-slate-300 text-xs">
                <div className="font-bold text-[#020612] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-600 shrink-0" />
                  <span>Destaque da Modalidade:</span>
                </div>
                <div className="text-slate-900 mt-0.5 text-xs sm:text-[13px] font-semibold">
                  {currentResponse.highlight}
                </div>
              </div>

              <div className="flex items-center justify-end gap-1 mt-1.5 text-[11px] text-slate-500">
                <span>14:33</span>
              </div>
            </div>
          )}

          {/* Action CTA Bubble inside Chat */}
          <div className="self-center w-full mt-auto pt-1">
            <button
              onClick={handleStartWhatsAppChat}
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 group transition-all cursor-pointer border-b-2 border-[#1ca34d] min-h-[46px]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="text-[13px] sm:text-[14px]">Chamar no WhatsApp Oficial</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#020612]" />
            </button>
          </div>
        </div>

        {/* WhatsApp Input bar */}
        <div className="bg-[#e9ecef] px-3 py-2 border-t border-slate-300 flex items-center gap-2">
          <div className="flex-1 bg-white text-slate-500 px-3 py-1.5 rounded-full text-xs flex items-center border border-slate-300">
            <span>Mensagem para Cred Sempre +...</span>
          </div>
          <button
            onClick={handleStartWhatsAppChat}
            className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center transition-colors cursor-pointer border border-[#1ca34d]"
            title="Enviar mensagem"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

      {/* Floating Trust Indicator beneath mockup */}
      <div className="mt-2 text-center">
        <p className="text-[11px] text-slate-600 flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          Tempo médio de resposta: <strong className="font-bold text-[#0B1E48]">menos de 3 minutos</strong>
        </p>
      </div>
    </div>
  );
}
