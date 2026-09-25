import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAskOnWhatsApp = () => {
    const message = "Olá! Estava lendo as dúvidas frequentes no site da Cred Sempre + e ainda tenho uma pergunta sobre opções de crédito.";
    const url = createWhatsAppUrl(COMPANY_INFO.whatsappNumber, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-20 bg-slate-200/50 border-t border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-slate-300 text-[#020612] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#0c2f7c]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#020612] tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-800 font-semibold leading-relaxed">
            Respostas claras para as principais dúvidas sobre os nossos serviços e condições de crédito.
          </p>
        </div>

        {/* FAQ Accordion List (Reference: FAQ: 17px mobile, 17-18px desktop) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0c2f7c] bg-white shadow-md'
                    : 'border-slate-300 bg-white hover:border-slate-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer min-h-[56px]"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[17px] sm:text-[18px] font-bold leading-snug transition-colors ${
                    isOpen ? 'text-[#0c2f7c]' : 'text-[#020612]'
                  }`}>
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-blue-100 text-[#0c2f7c]'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-6 text-[17px] sm:text-[18px] text-slate-800 leading-relaxed border-t border-slate-200 pt-4 animate-in fade-in duration-150 font-normal">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ WhatsApp Support Box */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-300 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-[#020612]">
              Não encontrou a resposta para a sua dúvida?
            </h4>
            <p className="text-[15px] sm:text-[16px] text-slate-800 mt-1 font-medium">
              Nossa equipe está pronta para te atender de forma direta e sem formalidades no WhatsApp.
            </p>
          </div>

          <button
            onClick={handleAskOnWhatsApp}
            className="shrink-0 inline-flex items-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-[16px] text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md shadow-emerald-950/20 transition-all cursor-pointer border-b-2 border-[#1ca34d] min-h-[48px]"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Falar com Atendente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
