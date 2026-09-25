import { X, Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/creditData';

interface LegalModalProps {
  type: 'termos' | 'privacidade' | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const isTermos = type === 'termos';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-300 relative text-slate-900 overflow-hidden">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0c2f7c] flex items-center justify-center shrink-0">
              {isTermos ? <FileText className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
            </div>
            <div>
              <h3 id="legal-modal-title" className="text-lg sm:text-xl font-black text-[#020612]">
                {isTermos ? 'Termos de Uso' : 'Política de Privacidade (LGPD)'}
              </h3>
              <span className="text-xs text-slate-600 block">
                {COMPANY_INFO.name} • CNPJ: {COMPANY_INFO.cnpj}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar janela"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5 text-sm sm:text-[15px] leading-relaxed text-slate-700 font-normal">
          {isTermos ? (
            <>
              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  1. Natureza dos Serviços
                </h4>
                <p>
                  A <strong>{COMPANY_INFO.name}</strong>, inscrita no CNPJ sob o nº <strong>{COMPANY_INFO.cnpj}</strong>, atua estritamente como correspondente de instituições financeiras no Brasil, em observância à <strong>Resolução nº 3.954 do Banco Central do Brasil</strong>.
                </p>
                <p className="mt-1">
                  Não somos instituição financeira nem operamos concessão direta de crédito com recursos próprios. Nossa atividade é intermediar a simulação e encaminhamento de propostas para instituições bancárias autorizadas.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  2. Análise de Crédito e Aprovação
                </h4>
                <p>
                  A simulação disponibilizada no site possui caráter informativo e estimativo. Todas as propostas e operações financeiras estão sujeitas à análise cadastral, análise de crédito, margem consignável e políticas internas das instituições financeiras parceiras.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-600 shrink-0" />
                  3. Tolerância Zero a Cobranças Prévias
                </h4>
                <p>
                  A {COMPANY_INFO.name} <strong>NUNCA</strong> solicita qualquer adiantamento financeiro, depósito prévio, taxa de avalista, caução, fiador ou PIX para liberar créditos. Cobrança de qualquer valor antecipado configura crime de estelionato.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  4. Canais Oficiais de Atendimento
                </h4>
                <p>
                  O atendimento é realizado prioritariamente pelo WhatsApp Oficial <strong>{COMPANY_INFO.phone}</strong> e pelas redes sociais oficiais da empresa.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-600 shrink-0" />
                  1. Conformidade com a LGPD (Lei nº 13.709/2018)
                </h4>
                <p>
                  A <strong>{COMPANY_INFO.name}</strong> respeita integralmente a privacidade de seus usuários e clientes, em total consonância com as diretrizes da Lei Geral de Proteção de Dados Pessoais (LGPD).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  2. Coleta e Finalidade dos Dados
                </h4>
                <p>
                  Os dados informados no formulário de simulação (como nome, número de WhatsApp e interesse de crédito) são coletados exclusivamente para possibilitar o atendimento consultivo solicitado pelo próprio titular.
                </p>
                <p className="mt-1">
                  Seus dados <strong>jamais</strong> são comercializados, alugados ou cedidos a empresas não autorizadas para fins de mala direta ou telemarketing abusivo.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  3. Compartilhamento Seguro com Parceiros
                </h4>
                <p>
                  Os dados necessários à análise de crédito são transmitidos de forma segura e criptografada unicamente às instituições financeiras parceiras devidamente homologadas pelo Banco Central do Brasil para a efetivação da consulta requerida.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#020612] text-base mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  4. Direitos do Titular
                </h4>
                <p>
                  O titular poderá a qualquer momento solicitar a confirmação da existência de tratamento, a correção de dados incompletos ou a revogação de consentimento através do nosso canal oficial: <strong>{COMPANY_INFO.email}</strong> ou pelo WhatsApp <strong>{COMPANY_INFO.phone}</strong>.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0c2f7c] hover:bg-[#081f54] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
