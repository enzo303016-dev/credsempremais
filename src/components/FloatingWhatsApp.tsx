import { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';

export function FloatingWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const [quickText, setQuickText] = useState('');

  const handleOpenDirect = () => {
    const text = quickText.trim()
      ? quickText.trim()
      : "Olá! Gostaria de tirar dúvidas sobre as opções de crédito da Cred Sempre +.";
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setShowPopup(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* WhatsApp Quick Chat Bubble / Card */}
      {showPopup && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          {/* Header in deep navy */}
          <div className="bg-[#020612] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  src="/icon.jpg"
                  alt="Cred Sempre +"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-500 bg-white"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="w-9 h-9 rounded-full bg-blue-700 text-white font-bold items-center justify-center text-xs ring-2 ring-amber-500"
                >
                  CS+
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-[#020612] rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight text-white">Cred Sempre +</h4>
                <span className="text-xs text-blue-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Online
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowPopup(false);
                setHasInteracted(true);
              }}
              className="text-blue-300 hover:text-white p-1.5 cursor-pointer rounded-lg hover:bg-white/10"
              aria-label="Fechar mensagem"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-[#e5ddd5] space-y-2.5">
            <div className="bg-white p-3.5 rounded-xl rounded-tl-none shadow-xs text-slate-900 space-y-1.5 border border-slate-200">
              <p className="font-bold text-[#020612] text-xs sm:text-[13px]">
                Consultora Karina:
              </p>
              <p className="text-[13.5px] sm:text-[14px] text-slate-800 leading-relaxed font-normal">
                Olá! Precisa de simulação de crédito hoje? Podemos te orientar sobre FGTS, Consignado, INSS e Conta de Luz sem compromisso.
              </p>
              <div className="text-[11px] text-slate-500 text-right">Agora mesmo</div>
            </div>
          </div>

          {/* Quick interactive input inside floating widget */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Digite sua dúvida..."
              value={quickText}
              onChange={(e) => setQuickText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleOpenDirect()}
              className="flex-1 px-3.5 py-2.5 text-[14px] rounded-xl border border-slate-300 focus:outline-none focus:border-[#25D366] text-slate-900"
            />
            <button
              onClick={handleOpenDirect}
              className="p-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xs cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center border-b-2 border-[#1ca34d]"
              title="Enviar para o WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          <div className="px-3.5 py-2 bg-slate-100 text-xs text-slate-700 text-center flex items-center justify-center gap-1.5 font-medium border-t border-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            <span>Canal oficial seguro da Cred Sempre +</span>
          </div>
        </div>
      )}

      {/* Main Floating Button in WhatsApp Green */}
      <button
        onClick={() => setShowPopup((prev) => !prev)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none ring-4 ring-[#25D366]/30 cursor-pointer"
        aria-label="Abrir conversa no WhatsApp"
      >
        {/* Pulse beacon effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
}
