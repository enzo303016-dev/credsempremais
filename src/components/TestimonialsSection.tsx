import { Briefcase, Wrench, HeartHandshake, Wallet, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function TestimonialsSection() {
  const situations = [
    {
      icon: Briefcase,
      title: "Trabalhador CLT & Carteira Assinada",
      subtitle: "Reorganização de Dívidas",
      desc: "Trabalhadores com registro em carteira que precisam de crédito consignado para substituir juros altos de cartão ou cheque especial por parcelas com desconto em folha.",
      highlight: "Desconto direto em folha",
      audience: "Consignado CLT"
    },
    {
      icon: Wallet,
      title: "Saldo do FGTS para Necessidades Pontuais",
      subtitle: "Recursos Próprios Sem Boleto",
      desc: "Quem possui saldo no Saque-Aniversário do FGTS e prefere utilizar seu próprio fundo para quitar compromissos urgentes sem gerar novas parcelas mensais.",
      highlight: "Regras vigentes do FGTS",
      audience: "Antecipação FGTS"
    },
    {
      icon: Wrench,
      title: "Imprevistos do Carro ou da Casa",
      subtitle: "Despesas Inesperadas",
      desc: "Situações urgentes do dia a dia, como conserto mecânico do veículo de trabalho, saúde ou reparos residenciais que exigem resposta ágil.",
      highlight: "Atendimento ágil no WhatsApp",
      audience: "Soluções Rápidas"
    },
    {
      icon: HeartHandshake,
      title: "Aposentados, Pensionistas & Famílias",
      subtitle: "Atendimento Paciente e Seguro",
      desc: "Pessoas que valorizam um consultor humano para explicar cada detalhe de prazos e taxas, sem pressão, sem letras miúdas e com tolerância zero a fraudes.",
      highlight: "Zero taxa antecipada",
      audience: "Atendimento Humanizado"
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 text-[#020612] text-xs sm:text-[13px] font-bold uppercase tracking-wider mb-3.5 border border-slate-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Transparência & Situações Reais</span>
          </div>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-black text-[#020612] tracking-tight leading-tight">
            Como a Cred Sempre + Apoia o Seu Dia a Dia
          </h2>
          <p className="mt-3.5 text-[17px] sm:text-[18px] text-slate-800 font-semibold leading-relaxed">
            Entenda os momentos em que nossos consultores podem orientar você a encontrar uma alternativa adequada para organizar sua vida financeira.
          </p>
        </div>

        {/* Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {situations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between hover:border-[#0c2f7c] hover:-translate-y-0.5"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs text-[#0c2f7c]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0c2f7c] block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-[17px] sm:text-[18px] font-black text-[#020612] leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">{item.audience}</span>
                  <span className="font-bold text-[#0c2f7c] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    <span>{item.highlight}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Neutral Compliance & Trust Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-4 px-6 rounded-2xl bg-slate-100 border border-slate-300 shadow-xs text-sm sm:text-[15px] text-slate-800 font-medium">
            <span className="flex items-center gap-2 font-bold text-[#020612]">
              <ShieldCheck className="w-4 h-4 text-[#0c2f7c]" />
              Compromisso com a Verdade
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span>Espaço preparado para relatos verificados de clientes atendidos oficialmente</span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-[#0c2f7c] font-bold">Sem dados inventados</span>
          </div>
        </div>
      </div>
    </section>
  );
}
