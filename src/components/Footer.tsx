import { useState } from 'react';
import { Shield, Clock, Phone, MapPin, Mail, MessageCircle, AlertTriangle, Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, PRODUCTS } from '../data/creditData';
import { createWhatsAppUrl } from '../utils/formatters';
import { Logo } from './Logo';
import { LegalModal } from './LegalModal';

interface FooterProps {
  onSelectProduct: (productId: string) => void;
  onSimulateClick: () => void;
}

export function Footer({ onSelectProduct, onSimulateClick }: FooterProps) {
  const [legalModalType, setLegalModalType] = useState<'termos' | 'privacidade' | null>(null);

  const handleWhatsApp = () => {
    const url = createWhatsAppUrl(
      COMPANY_INFO.whatsappNumber,
      "Olá! Gostaria de mais informações sobre a Cred Sempre +."
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <footer className="bg-[#020612] text-slate-300 pt-16 pb-12 border-t border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Anti-Fraud Banner inside Footer */}
          <div className="mb-12 bg-amber-500/10 border border-amber-500/40 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-4 text-amber-200 text-xs sm:text-sm shadow-md">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <strong className="text-amber-300 block font-bold text-sm sm:text-base">
                ALERTA IMPORTANTE CONTRA GOLPES
              </strong>
              <p className="mt-1 text-slate-300 text-[13px] sm:text-[14px] leading-relaxed">
                A <strong>Cred Sempre +</strong> NUNCA solicita valores, depósitos prévios ou transferências PIX para aprovar ou liberar empréstimos. Cobrança de qualquer taxa antecipada é fraude. Fale apenas pelos nossos contatos oficiais.
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="shrink-0 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-[#020612] font-black rounded-xl text-[14px] sm:text-[15px] transition-colors cursor-pointer border-b-2 border-amber-800 min-h-[46px]"
            >
              Verificar Contato Oficial
            </button>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-950/80">
            {/* Col 1: Brand & Slogan */}
            <div className="lg:col-span-4 space-y-4">
              {/* Logo in footer with clean white backing badge to preserve original colors and proportions */}
              <div className="inline-block p-2.5 sm:p-3 bg-white rounded-2xl shadow-md border border-slate-300">
                <Logo variant="footer" />
              </div>

              <p className="text-[14px] sm:text-[15px] text-slate-300 leading-relaxed pt-1 font-normal">
                Crédito do seu jeito: Rápido • Digital • Seguro. Correspondente bancária autorizada que conecta você às melhores instituições financeiras do Brasil com total transparência.
              </p>

              <div className="pt-2 flex items-center gap-2 text-[13px] sm:text-[14px] text-amber-400 font-semibold">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Correspondente Bacen nº 3.954</span>
              </div>

              {/* Redes Sociais Oficiais */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Redes Sociais Oficiais
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Oficial"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-amber-500 text-slate-300 hover:text-amber-400 hover:bg-[#0c2f7c] flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm group"
                  >
                    <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>

                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Oficial"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-amber-500 text-slate-300 hover:text-amber-400 hover:bg-[#0c2f7c] flex items-center justify-center transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm group"
                  >
                    <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Products */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Nossos Produtos
              </h4>
              <ul className="space-y-2.5 text-[14px] sm:text-[15px]">
                {PRODUCTS.map((prod) => (
                  <li key={prod.id}>
                    <button
                      onClick={() => onSelectProduct(prod.id)}
                      className="hover:text-amber-400 transition-colors text-left cursor-pointer py-0.5"
                    >
                      {prod.name}
                    </button>
                  </li>
                ))}
                <li className="pt-1.5">
                  <button
                    onClick={onSimulateClick}
                    className="text-amber-400 font-bold hover:underline cursor-pointer py-0.5"
                  >
                    → Fazer Simulação Completa
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-[14px] sm:text-[15px]">
                <li>
                  <a href="#inicio" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#produtos" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#seguranca" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    Segurança & LGPD
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4: Official Contact & Schedule */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                Canais Oficiais
              </h4>
              <div className="space-y-3 text-[14px] sm:text-[15px] text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>
                    WhatsApp:{' '}
                    <a
                      href={createWhatsAppUrl(COMPANY_INFO.whatsappNumber, "Olá! Gostaria de mais informações sobre a Cred Sempre +.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-emerald-400 transition-colors inline-flex items-center"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-1" />
                  <span>
                    Telefone:{' '}
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                      className="font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="break-all hover:text-amber-400 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-blue-300 shrink-0 mt-1" />
                  <span>{COMPANY_INFO.hours}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Disclaimer with official CNPJ */}
          <div className="pt-8 text-xs sm:text-[13px] text-slate-400 space-y-3 leading-relaxed">
            <p>
              <strong>Aviso Legal & Regulatório:</strong> {COMPANY_INFO.bacenNotice}
            </p>
            <p>
              O prazo de quitação pode variar entre 12 e 96 meses dependendo do convênio e da modalidade. As taxas de juros (CET) são informadas de forma clara e individualizada previamente à contratação, oscilando conforme análise de perfil e banco parceiro. <strong>CNPJ oficial: {COMPANY_INFO.cnpj}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blue-950/80 text-slate-400 text-xs sm:text-[13px]">
              <div>
                © {new Date().getFullYear()} <strong>CRED SEMPRE+</strong> (CNPJ: {COMPANY_INFO.cnpj}). Todos os direitos reservados.
              </div>
              <div className="flex items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={() => setLegalModalType('termos')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Termos de Uso
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => setLegalModalType('privacidade')}
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade
                </button>
                <span>·</span>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-slate-400 hover:text-amber-400 transition-colors p-1"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-slate-400 hover:text-amber-400 transition-colors p-1"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal for Termos de Uso and Política de Privacidade */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </>
  );
}
