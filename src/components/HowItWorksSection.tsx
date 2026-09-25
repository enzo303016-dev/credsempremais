import { Calculator, MessageSquareText, ShieldCheck, Banknote, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/creditData';

interface HowItWorksSectionProps {
  onSimulateClick: () => void;
}

export function HowItWorksSection({ onSimulateClick }: HowItWorksSectionProps) {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-6 h-6 text-[#0c2f7c]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#0c2f7c]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0c2f7c]" />;
      case 'Banknote':
        return <Banknote className="w-6 h-6 text-[#0c2f7c]" />;
      default:
        return <Calculator className="w-6 h-6 text-[#0c2f7c]" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-white border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-[#020612] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5 border border-slate-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#020612] tracking-tight leading-tight">
            Como Funciona o Atendimento
          </h2>
          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-800 font-semibold leading-relaxed">
            Do primeiro contato até o dinheiro na sua conta: processo 100% digital, transparente e com acompanhamento humano em todas as etapas.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS.map((item, index) => (
            <div
              key={item.step}
              className="relative bg-white hover:bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-300 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between hover:border-[#0c2f7c]"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-300/80 flex items-center justify-center shrink-0">
                    {getStepIcon(item.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-400 font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#020612] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-slate-800 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Progress connector indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center text-sm font-bold text-[#0c2f7c]">
                <span>Etapa {index + 1} de 4</span>
                {index < 3 && <ArrowRight className="w-4 h-4 ml-1.5 hidden lg:block text-amber-600" />}
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance banner below steps */}
        <div className="mt-12 bg-slate-200/60 rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-black text-[#020612]">
              Pronto para descobrir as melhores condições para você?
            </h4>
            <p className="text-[15px] sm:text-[16px] text-slate-800 font-medium">
              A simulação leva menos de 1 minuto e não gera nenhum custo ou compromisso.
            </p>
          </div>

          <button
            onClick={onSimulateClick}
            className="shrink-0 inline-flex items-center gap-2.5 py-3.5 px-7 rounded-xl font-black text-[16px] text-[#020612] bg-amber-500 hover:bg-amber-600 shadow-md shadow-amber-600/25 transition-all cursor-pointer border-b-2 border-amber-800 min-h-[48px]"
          >
            <Calculator className="w-5 h-5 text-[#020612]" />
            <span>Fazer Minha Simulação Agora</span>
          </button>
        </div>
      </div>
    </section>
  );
}
