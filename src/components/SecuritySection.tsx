import { ShieldAlert, Lock, CheckCircle2, FileCheck, ShieldCheck } from 'lucide-react';

export function SecuritySection() {
  return (
    <section id="seguranca" className="py-16 bg-[#020612] text-white relative overflow-hidden border-t border-blue-950">
      {/* Background glow in deep blue & gold */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Anti-Fraud Warning Box in Amber & Deep Navy */}
          <div className="lg:col-span-7 bg-[#030b1c] border-2 border-amber-500/50 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-amber-400 block">
                  Segurança do Consumidor
                </span>
                <h3 className="text-2xl sm:text-[26px] md:text-[28px] font-black text-white leading-snug">
                  Cuidado com Golpes: Tolerância Zero a Cobranças Prévias
                </h3>
              </div>
            </div>

            <p className="text-[17px] sm:text-[18px] text-slate-200 leading-relaxed font-normal">
              A <strong>Cred Sempre +</strong> informa enfaticamente:{' '}
              <span className="text-amber-400 font-bold underline decoration-amber-500">
                JAMAIS solicitamos depósitos antecipados
              </span>
              , taxas de cadastro, fiador, seguro fiança ou chaves PIX para liberação de qualquer empréstimo.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-5 border-t border-amber-500/20 text-[15px] sm:text-[16px] text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Nenhum pagamento prévio sai do seu bolso</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Cobrança antecipada de empréstimo é crime</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Atendimento apenas pelos nossos canais oficiais</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>Assinatura digital e biometria oficial</span>
              </div>
            </div>
          </div>

          {/* Right: Security & Regulatory Badges */}
          <div className="lg:col-span-5 space-y-4">
            {/* LGPD Card */}
            <div className="bg-[#030b1c] rounded-2xl p-5 sm:p-6 border border-blue-950/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-blue-600/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18px] font-bold text-white leading-snug">Privacidade e Proteção LGPD</h4>
                <p className="text-[15px] sm:text-[16px] text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Seus dados são protegidos com sigilo bancário estrito e jamais comercializados com terceiros.
                </p>
              </div>
            </div>

            {/* Bacen Resolution 3.954 Card */}
            <div className="bg-[#030b1c] rounded-2xl p-5 sm:p-6 border border-blue-950/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18px] font-bold text-white leading-snug">Correspondente Regulamentado</h4>
                <p className="text-[15px] sm:text-[16px] text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Atuamos estritamente como correspondente de instituições financeiras conforme as diretrizes da <strong>Resolução nº 3.954 do Banco Central do Brasil</strong>.
                </p>
              </div>
            </div>

            {/* Support guarantee */}
            <div className="bg-[#030b1c] rounded-2xl p-5 sm:p-6 border border-blue-950/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-indigo-500/20 text-blue-300 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18px] font-bold text-white leading-snug">Transparência em Cada Parcela</h4>
                <p className="text-[15px] sm:text-[16px] text-slate-300 mt-1.5 leading-relaxed font-normal">
                  Todas as condições (CET, IOF, taxas de juros e número de parcelas) são detalhadas para você antes de qualquer assinatura. Sem letras miúdas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
